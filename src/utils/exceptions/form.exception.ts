import { toast } from "sonner";
import type { FieldErrors, FieldValues } from "react-hook-form";
import type { ToastNotification } from "src/types/global.type";

export const handleInvalidForm = (error: FieldErrors<FieldValues>) => {
  const notification: ToastNotification = {
    level: "error",
    title: "Invalid",
    data: {
      description: "invalid form",
    },
  };

  const key = Object.keys(error)[0] || "root";
  if (typeof key === "string" && typeof error[key]?.message === "string") {
    notification.data = {
      ...notification.data,
      description: error[key]?.message,
    };
  }
  return toast.error(notification.title, notification.data);
};
