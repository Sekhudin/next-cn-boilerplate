"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { authService } from "src/modules/auth/services/auth.service";
import { useAsync } from "src/shared/hooks/use-async.hook";
import { useAuthStore } from "src/stores/auth.store";
import { catchHookException } from "src/utils/exception";
import * as tanQ from "src/configs/tanstack-query.config";

export const useAuth = () => {
  const clearToken = useAuthStore((store) => store.clearToken);
  const payload = useSuspenseQuery({
    queryKey: tanQ.userKeys.meDetails(),
    queryFn: () => authService.me().catch(catchHookException),
    staleTime: tanQ.staleTime,
  });

  const signOut = useAsync(async () => {
    const payload = await authService.signOut();
    if (payload) {
      clearToken();
      window.location.replace("/signin");
    }
  });

  return { user: payload.data, signOut };
};
