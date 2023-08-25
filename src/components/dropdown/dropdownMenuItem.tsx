export type DropdownMenuItemProps = {
  title: string;
  handleButton?: () => void;
};
const DropdownMenuItem = ({ title, handleButton }: DropdownMenuItemProps) => {
  return (
    <button
      className="transition duration-150 p-1 hover:rounded-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      onClick={handleButton}
    >
      <div className="flex items-center gap-1 text-left">
        <p>{title}</p>
      </div>
    </button>
  );
};

export default DropdownMenuItem;
