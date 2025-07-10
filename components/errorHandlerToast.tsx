'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function ErrorHandlerToast() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const showErrorToast = (errorType: string) => {
    if (errorType === 'admin_required') {
      toast.error("Access Denied", {
        description: "You need administrator privileges to access this area"
      });
    } else if (errorType === 'access_denied') {
      toast.warning("Access Denied", {
        description: "You do not have access to this area"
      });
    }
  };

  useEffect(() => {
    if (error) {
      // Add a small delay to ensure component is fully mounted
      setTimeout(() => showErrorToast(error), 100);
    }
  }, [error]);

  return null;
}