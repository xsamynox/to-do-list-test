import { Icon } from "@iconify/react";
import Tooltip from "./tooltip";

type addCardProps = {
  handleAddCard: () => void;
};

const addCard = ({ handleAddCard }: addCardProps) => {
  return (
    <>
      <Tooltip message={"Agrega una nueva tarea"}>
        <button
          className="flex justify-center items-center w-full rounded-lg border border-solid border-neutral-200 shadow-sm hover:shadow-md ease-in-out"
          onClick={handleAddCard}
        >
          <div className="flex items-center px-6 py-3 gap-2">
            <Icon icon="mingcute:add-fill" width="20" height="20" />
          </div>
        </button>
      </Tooltip>
    </>
  );
};

export default addCard;
