import { toast } from "sonner";
import { ZodError } from "zod";
import type { ToastNotification } from "src/types/global.type";

export const catchInvalidSchemaAsWarning = (error: unknown) => {
  const notification: ToastNotification = {
    level: "error",
    title: "Invalid",
    data: {
      description: "invalid form",
    },
  };

  if (error instanceof ZodError) {
    notification.data = {
      ...notification.data,
      description: error.issues[0].message.toLowerCase(),
    };
  }

  toast.warning(notification.title, notification.data);
};
