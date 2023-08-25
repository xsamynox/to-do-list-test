import { Icon } from "@iconify/react";
import Tooltip from "./tooltip";
import { CardStatus } from "@/types/enums";

type IconProps = {
  iconName?: CardStatus;
  iconHeight?: number;
  iconWidth?: number;
  message?: string;
};

const IconStatusName = {
  [CardStatus.Created]:
    "streamline:interface-edit-write-circle-change-circle-edit-modify-pencil-write-writing",
  [CardStatus.Scheduled]: "ic:round-schedule",
  [CardStatus.Checked]: "icon-park-outline:check-one",
  [CardStatus.AlmostDueDate]: "ph:warning-circle-bold",
  [CardStatus.Canceled]: "mi:circle-error",
};

const IconStatusColor = {
  [CardStatus.Created]: "#d1d5db",
  [CardStatus.Scheduled]: "#0369a1",
  [CardStatus.Checked]: "#16a34a",
  [CardStatus.AlmostDueDate]: "#eab308",
  [CardStatus.Canceled]: "red",
};

const messages = {
  [CardStatus.Created]: "Creada",
  [CardStatus.Scheduled]: "A tiempo",
  [CardStatus.Checked]: "Completada",
  [CardStatus.AlmostDueDate]: "A punto de vencer",
  [CardStatus.Canceled]: "Vencida",
};

const Status = ({
  iconName = CardStatus.Created,
  iconHeight = 38,
  iconWidth = 38,
}: IconProps) => {
  return (
    <>
      {iconName && (
        <Tooltip
          message={messages[iconName]}
          position="top-10"
          className="whitespace-nowrap"
        >
          <Icon
            icon={IconStatusName[iconName]}
            color={IconStatusColor[iconName]}
            width={iconWidth}
            height={iconHeight}
          />
        </Tooltip>
      )}
    </>
  );
};

export default Status;
