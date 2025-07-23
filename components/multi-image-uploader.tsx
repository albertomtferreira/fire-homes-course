"use client"

import { useRef, useState, useCallback } from "react";
import { Button } from "./ui/button";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd"
import Image from "next/image";
import { Badge } from "./ui/badge";
import { MoveIcon, XIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { imageUrlFormatter } from "@/lib/imageUrlFormatter";


export type imageUpload = {
  id: string;
  url: string;
  file?: File;
}

type Props = {
  images?: imageUpload[];
  onImagesChange: (images: imageUpload[]) => void;
  urlFormatter?: (image: imageUpload) => string
}

export default function MultiImageUploader({
  images = [],
  onImagesChange,
  urlFormatter
}: Props) {
  const uploadInputRef = useRef<HTMLInputElement | null>(null)

  // Modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [imageToDelete, setImageToDelete] = useState<{ id: string; index: number, url: string } | null>(null);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const newImages = files.map((file, index) => {
      return {
        id: `${Date.now()}-${index}-${file.name}`,
        url: URL.createObjectURL(file),
        file
      }
    })
    onImagesChange([...images, ...newImages])
    // Reset the input value to allow selecting the same file again
    if (uploadInputRef.current) {
      uploadInputRef.current.value = '';
    }
  }, [images, onImagesChange])

  const handleDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) {
      return
    }
    const items = Array.from(images)
    const [reorderedImage] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedImage)
    onImagesChange(items)
  }, [images, onImagesChange])

  const handleDeleteClick = useCallback((e: React.MouseEvent, id: string, index: number, url: string) => {
    // e.preventDefault();
    // e.stopPropagation();
    setImageToDelete({ id, index, url });
    setShowDeleteModal(true);
  }, [])

  const handleDeleteConfirm = useCallback(() => {
    if (imageToDelete) {
      const updatedImages = images.filter(image => image.id !== imageToDelete.id)
      onImagesChange(updatedImages)
    }
    setShowDeleteModal(false);
    setImageToDelete(null);
  }, [imageToDelete, images, onImagesChange])

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <input
        className="hidden input-style"
        ref={uploadInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleInputChange}
      />
      <Button
        className="w-full"
        variant="outline"
        type="button"
        onClick={() => uploadInputRef?.current?.click()}
      >
        Upload Images
      </Button>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="property-images" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="relative p-2"
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.5 : 1,
                      }}
                    >
                      {/* Property Images Card */}
                      <div className="bg-gray-200 rounded-lg gap-4 flex items-center overflow-hidden">
                        <div className="size-16 relative">
                          <Image
                            src={urlFormatter ? urlFormatter(image) : image.url}
                            alt={image.id}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="text-sm font-medium">
                            Image {index + 1}
                          </p>
                          {index === 0 && (
                            <Badge variant="success">Featured Image</Badge>
                          )}
                        </div>
                        <div className="flex items-center p-2">
                          <button
                            type="button"
                            className="text-red-400 p-2 hover:text-red-600 transition-colors"
                            onClick={(e) => handleDeleteClick(e, image.id, index, image.url)}
                          >
                            <XIcon />
                          </button>
                          <div className="text-gray-600 cursor-move">
                            <MoveIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Delete Confirmation Modal */}
      <AlertDialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Image</AlertDialogTitle>
            <AlertDialogDescription>
              <p>Are you sure you want to delete Image {imageToDelete ? imageToDelete.index + 1 : ''}?</p>
              <p className="font-semibold">This action cannot be undone.</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-between">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              {imageToDelete && (
                <>
                  <div className="size-12 relative rounded overflow-hidden">
                    <Image
                      src={imageUrlFormatter(imageToDelete.url)}
                      alt={`Image ${imageToDelete.index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">Image {imageToDelete.index + 1}</p>
                  </div>
                </>
              )}
            </div>
            <div className="flex align-middle gap-2">
              <AlertDialogCancel >Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive">
                Delete
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}