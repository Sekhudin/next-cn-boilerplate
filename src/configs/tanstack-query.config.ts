const minute = (value: number) => 1000 * 60 * value;

export const staleTime = minute(5);
export const cacheTime = minute(10);
export const refetchOnWindowFocus = true;
export const refetchInterval = 5000;

export const userKeys = {
  find: () => ["users"],
  findOne: (id: string) => ["users", id],
};
