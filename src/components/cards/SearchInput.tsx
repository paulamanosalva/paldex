// @ts-expect-error - TODO: define types
const SearchInput = ({ onChange }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search by name..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
