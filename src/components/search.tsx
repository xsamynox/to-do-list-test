import { Icon } from "@iconify/react";
import { SetStateAction } from "react";

type SearchProps = {
  searchTerm: string;
  handleSearch: (e: { target: { value: SetStateAction<string> } }) => void;
};
const Search = ({ searchTerm, handleSearch }: SearchProps) => {
  return (
    <div className="mb-3 xl:w-96">
      <div className="relative mb-4 flex items-center">
        <input
          className="relative m-0 placeholder-neutral-400 block flex-auto rounded border border-solid border-neutral-400 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
          placeholder="Buscar..."
          type="text"
          value={searchTerm}
          aria-label="Search"
          onChange={handleSearch}
        />
        <Icon icon="tabler:search" width="24" height="24" />
      </div>
    </div>
  );
};

export default Search;
