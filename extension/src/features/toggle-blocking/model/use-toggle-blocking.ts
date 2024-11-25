import { useAccountQuery, useUpdateAccountMutation } from "@/entities/account";

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();

  const updateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !updateAccountMutation.data?.isBlockingEnabled,
      });
    }
  };

  return {
    isLoading: updateAccountMutation.isPending,
    isReady: accountQuery.isSuccess,
    toggleBlocking,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
  };
}
