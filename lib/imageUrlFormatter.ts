export function imageUrlFormatter(imagePath: string) {
  return `https://firebasestorage.googleapis.com/v0/b/fire-homes-course-7a4af.firebasestorage.app/o/${encodeURIComponent(
    imagePath
  )}?alt=media`;
}
