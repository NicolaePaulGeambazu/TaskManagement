import { ErrorText, FormLabel, FormSelect } from '../Modal/TaskModal.style';

interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error: string | undefined;
}

const Dropdown = ({ label, value, onChange, options, error } : DropdownProps) => {
  return (
    <>
      <FormLabel>{label}:</FormLabel>
      <FormSelect value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </FormSelect>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default Dropdown;
