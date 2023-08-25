import { Icon } from "@iconify/react";
import Tooltip from "./tooltip";

type IconProps = {
  iconName?: string;
  iconHeight?: number;
  iconWidth?: number;
  message?: string;
};

const IconStatus = {
  Created: "created",
  Scheduled: "scheduled",
  Checked: "checked",
  Canceled: "canceled",
};

const IconStatusName = {
  [IconStatus.Created]: "mdi:calendar-alert",
  [IconStatus.Scheduled]: "ic:round-schedule",
  [IconStatus.Checked]: "icon-park-outline:check-one",
  [IconStatus.Canceled]: "mi:circle-error",
};

const IconStatusColor = {
  [IconStatus.Created]: "#eab308",
  [IconStatus.Scheduled]: "#0369a1",
  [IconStatus.Checked]: "#16a34a",
  [IconStatus.Canceled]: "red",
};

const messages = {
  [IconStatus.Created]: "Creada",
  [IconStatus.Scheduled]: "A tiempo",
  [IconStatus.Checked]: "Completada",
  [IconStatus.Canceled]: "Vencida",
};

const Status = ({
  iconName = IconStatus.Created,
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
