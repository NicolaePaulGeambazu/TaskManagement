import { ErrorText, FormInput, FormLabel } from '../Modal/TaskModal.style';

interface DataEntryProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error: string | undefined;
}

const DataEntry = ({ label, value, onChange, placeholder, error } : DataEntryProps) => {
  console.log(error);
  return (
    <>
      <FormLabel>{label}:</FormLabel>
      <FormInput type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default DataEntry;
