import VoiceSearch from "./VoiceSearch";
import SearchInput from "./SearchInput";

const Search = () => {
  return (
    <div className="flex gap-x-5 w-2/4 max-sm:hidden">
      <SearchInput />
      <VoiceSearch />
    </div>
  );
};

export default Search;
