import { Icon } from "@iconify/react";

type IconProps = {
  iconName?: string;
  iconHeight?: number;
  iconWidth?: number;
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

const Status = ({
  iconName = IconStatus.Created,
  iconHeight = 38,
  iconWidth = 38,
}: IconProps) => {
  return (
    <>
      {iconName && (
        <Icon
          icon={IconStatusName[iconName]}
          color={IconStatusColor[iconName]}
          width={iconWidth}
          height={iconHeight}
        />
      )}
    </>
  );
};

export default Status;
