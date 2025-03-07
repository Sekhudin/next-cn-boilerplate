import { toast, type ExternalToast } from "sonner";
import { isAxiosError } from "axios";
import type { ToastNotification } from "src/types/global.type";

export const catchException = (error: unknown, customData?: ExternalToast) => {
  const notification: ToastNotification = {
    level: "error",
    title: "Failed",
    data: {
      description: "Something was wrong!",
    },
  };

  if (isAxiosError(error)) {
    const message = error.response?.data?.message;
    if (message && typeof message === "string") {
      notification.title = error.code || "failed";
      notification.data = {
        ...notification.data,
        description: message,
      };
    }
  }
  return toast.error(notification.title, customData || notification.data);
};

export const catchExeptionAsWarning = (error: unknown, customData?: ExternalToast) => {
  const notification: ToastNotification = {
    level: "warning",
    title: "Failed",
    data: {
      description: "Something was wrong!",
    },
  };

  if (isAxiosError(error)) {
    const message = error.response?.data?.message;
    if (message && typeof message === "string") {
      notification.title = error.code || "failed";
      notification.data = {
        ...notification.data,
        description: message,
      };
    }
  }
  return toast.warning(notification.title, customData || notification.data);
};
