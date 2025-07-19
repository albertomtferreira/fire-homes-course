"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { removeToken } from "@/context/actions";
import { useAuth } from "@/context/auth";
import {
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { useState } from "react";

import { toast } from "sonner";
import { deleteUserFavourites } from "../actions";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


export default function DeleteAccountButton({ isAdmin }: { isAdmin: boolean }) {
  const auth = useAuth();
  const [isDeleting, setIsDeleting] = useState(false);
  const [password, setPassword] = useState("");

  const handleDeleteClick = async () => {
    if (auth?.currentUser?.email) {
      setIsDeleting(true);
      try {
        await reauthenticateWithCredential(
          auth.currentUser,
          EmailAuthProvider.credential(auth.currentUser.email, password)
        );
        await deleteUserFavourites();
        await deleteUser(auth.currentUser);
        await removeToken();
        toast.success("Your account was deleted successfully");
      } catch (e: any) {
        toast.error(
          e.code === "auth/invalid-credential"
            ? "Your current password is incorrect"
            : "An error occurred"
        );
      }
      setIsDeleting(false);
    }
  };

  // If admin, just show disabled button with tooltip
  if (isAdmin) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="destructive"
              className="w-full opacity-50"
            >
              Delete Account
            </Button>
          </TooltipTrigger>
          <TooltipContent className="opacity-50">
            <p>Admins cannot delete their account</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  // If not admin, show the full AlertDialog functionality
  return (
    <TooltipProvider>
      <Tooltip>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => console.log("Trigger button clicked")}
              >
                Delete Account
              </Button>
            </TooltipTrigger>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete your account?
              </AlertDialogTitle>
              <AlertDialogDescription asChild>
                <div className="flex flex-col gap-4">
                  This action cannot be undone. This will permanently delete your
                  account and remove all your data from our servers.
                  <div className="flex flex-col gap-4">
                    <Label>Enter current password to continue</Label>
                    <Input
                      value={password}
                      className="input-style"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Your password here"
                    />
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button onClick={() => {
                console.log("Delete button in dialog clicked");
                handleDeleteClick();
              }} disabled={isDeleting} variant="destructive">
                {isDeleting ? "Deleting..." : "Delete Account"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Tooltip>
    </TooltipProvider>
  );
}