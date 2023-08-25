import useContextMenu from "@/hooks/useContextMenu";
import { deleteTodo, updateTodo } from "@/store/thunks/todosThunks";
import { Icon } from "@iconify/react/dist/iconify.js";
import classnames from "classnames";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContextMenu from "./contextMenu";
import Datepicker from "./datePicker";
import Status from "./status";
import { CardStatus } from "@/types/enums";

type CardProps = {
  className?: string;
  description: string;
  status: CardStatus;
  isChecked?: boolean;
  id: string;
  isLastTodo: boolean;
  date: Date | string;
  handleAddCard: () => void;
};

const CardBorderColorClasses = {
  [CardStatus.Created]: "!border-t-4 !border-gray-300",
  [CardStatus.Scheduled]: "!border-t-4 !border-blue-500",
  [CardStatus.Checked]: "!border-t-4 !border-green-500",
  [CardStatus.AlmostDueDate]: "!border-t-4 !border-yellow-500",
  [CardStatus.Canceled]: "!border-t-4 !border-red-500",
};

const Card = ({
  className,
  description,
  status,
  isChecked = false,
  id,
  isLastTodo,
  date,
  handleAddCard,
}: CardProps) => {
  const classes = classnames(
    "block w-full rounded-lg border border-solid shadow-sm border-neutral-200 hover:shadow-md",
    isChecked && "!bg-[#e5e7eb] opacity-50",
    CardBorderColorClasses[status],
    className
  );
  const dispatch = useDispatch();

  const { showContextMenu, registerContextMenu } = useContextMenu();

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedTodo = {
      id,
      description: event.target.value,
    };
    dispatch(updateTodo(updatedTodo) as any);
  };

  const handleCalendarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dueDate = event.target.value;
    dispatch(
      updateTodo({
        id,
        dueDate,
      }) as any
    );
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    dispatch(
      updateTodo({
        id,
        isChecked,
      }) as any
    );
  };

  const handleDeleteCard = () => {
    dispatch(deleteTodo(id) as any);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key == "Enter") {
      event.preventDefault();
      handleAddCard();
    }
  };

  useEffect(() => {
    if (isLastTodo) {
      document.querySelector<HTMLTextAreaElement>(`#${id}`)?.focus();
    }
  }, [isLastTodo]);

  return (
    <div>
      <div className={classes} onContextMenu={showContextMenu}>
        <div className="flex items-center px-6 py-3 justify-between text-neutral-800">
          <div className="flex items-center mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] w-full">
            <input
              className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-800 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-[#16a34a] checked:bg-[#16a34a] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheck}
            />
            <textarea
              id={id}
              className={classnames(
                "border-0 focus:ring-0 focus:outline-none w-full resize-none h-auto",
                isChecked && "line-through"
              )}
              value={description}
              placeholder="Descripción de la tarea"
              onChange={handleDescriptionChange}
              onKeyDown={handleKeyDown}
              rows={1}
              disabled={isChecked}
            />
          </div>
          <div className="flex gap-10 items-center">
            <Datepicker
              onChange={handleCalendarChange}
              value={date}
              isChecked={isChecked}
            />
            <Status iconName={status} />
          </div>
        </div>
      </div>

      <ContextMenu className="w-60 min-w-max" {...registerContextMenu}>
        <div className="flex flex-col w-full">
          <button
            className="transition duration-150 p-1 hover:bg-neutral-400 hover:rounded-none hover:text-red-600"
            onClick={handleDeleteCard}
          >
            <div className="flex items-center gap-1 hover:text-red-600">
              <Icon className="mb-1" icon="mdi:trash" width="17" height="17" />
              <p>Eliminar</p>
            </div>
          </button>
        </div>
      </ContextMenu>
    </div>
  );
};

export default Card;
