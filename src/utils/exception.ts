import { ZodError } from "zod";
import { isAxiosError } from "axios";
import { toast, ExternalToast } from "sonner";
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

export const catchExceptionAsWarning = (error: unknown, customData?: ExternalToast) => {
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

  if (error instanceof ZodError) {
    notification.data = {
      ...notification.data,
      description: error.issues[0].message.toLowerCase(),
    };
  }

  return toast.warning(notification.title, customData || notification.data);
};

export const catchHookException = (error: unknown, customData?: ExternalToast) => {
  catchException(error, customData);
  return null;
};

export const catchHookExceptionAsWarning = (error: unknown, customData?: ExternalToast) => {
  catchExceptionAsWarning(error, customData);
  return null;
};

export const catchFormException = (error: unknown, customData?: ExternalToast) => {
  catchException(error, customData);
  return error;
};

export const catchable = <T, V>(tryMethod: () => T, exceptionCatcher: (error: unknown) => V) => {
  try {
    return tryMethod();
  } catch (error) {
    return exceptionCatcher(error);
  }
};
