import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const blockListKey = ["blockList"] as unknown[];

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
    placeholderData: keepPreviousData
  });
}

export function useAddBlockItemMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}

export function useRemoveBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}
