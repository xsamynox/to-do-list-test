import Datepicker from "./date-picker";
import Status from "./status";
import classnames from "classnames";

type CardProps = {
  className?: string;
  description: string;
  status: string;
  isChecked?: boolean;
  id: string;
  date: string;
  handleCardChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCalendarChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Card = ({
  className,
  description,
  status,
  isChecked = false,
  id,
  date,
  handleCardChange,
  handleCalendarChange,
  handleCheck,
}: CardProps) => {
  const classes = classnames(
    "block w-full rounded-lg border border-solid shadow-sm border-neutral-200 hover:shadow-md",
    className
  );

  return (
    <div className={classes}>
      <div className="flex items-center px-6 py-3 justify-between text-neutral-800">
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] w-full">
          <input
            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-800 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-[#16a34a] checked:bg-[#16a34a] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
            type="checkbox"
            id={id}
            checked={isChecked}
            onChange={handleCheck}
          />
          <input
            className="border-0 focus:ring-0 focus:outline-none w-full"
            type="text"
            value={description}
            placeholder="Descripción de la tarea"
            onChange={handleCardChange}
          />
        </div>
        <div className="flex gap-10 items-center">
          <Datepicker onChange={handleCalendarChange} value={date} />
          <Status iconName={status} />
        </div>
      </div>
    </div>
  );
};

export default Card;
