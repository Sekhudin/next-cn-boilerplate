"use client";
import { useAuthStore } from "src/stores/auth.store";

const Page = () => {
  const authStore = useAuthStore();
  return (
    <div className="flex flex-col gap-y-4 px-4">
      <button onClick={() => authStore.setToken("dlflInmdimk")}>Set Token</button>
      <button onClick={() => authStore.clearToken()}>Clear Token</button>
    </div>
  );
};

export default Page;
