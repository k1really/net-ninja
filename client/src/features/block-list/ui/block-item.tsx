import { useRemoveBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";

export function BlockItem({
  data,
  id,
  type,
}: {
  type: AddBlockItemDtoType;
  id: number;
  data: string;
}) {
  const removeBlockItemMutation = useRemoveBlockItemMutation();
  const handleRemove = () => {
    removeBlockItemMutation.mutate(id);
  };
  return (
    <div className="flex gap-2">
      <div>
        <div className="text-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>

      <button
        className="ml-auto text-rose-500 hover:text-rose-600 disabled:opacity-50 p-1"
        disabled={removeBlockItemMutation.isPending}
        onClick={handleRemove}
      >
        <Trash className="w-5 h-5" />
      </button>
    </div>
  );
}

function Trash({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
      />
    </svg>
  );
}
