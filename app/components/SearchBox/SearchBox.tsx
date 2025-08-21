import css from "./SearchBox.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      className={css.input}
      placeholder="Search notes"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;
