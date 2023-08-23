type CalendarProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: Date | string;
};

const Calendar = ({ onChange, value }: CalendarProps) => {
  return (
    <form>
      <input
        type="date"
        value={String(value)}
        onChange={onChange}
        className="w-auto bg-neutral-50 border border-neutral-200 text-gray-900 text-sm rounded-lg block p-2.5 shadow-sm hover:shadow-md shadow-neutral-200"
      />
    </form>
  );
};

export default Calendar;
