import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classnames from "classnames";
import { Icon } from "@iconify/react/dist/iconify.js";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: string;
  size?: string;
  children?: React.ReactNode;
  className?: string;
  iconName?: string;
  iconColor?: string;
  iconWidth?: string;
  iconHeight?: string;
};

const ButtonColor = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
};

const ButtonColorClasses = {
  [ButtonColor.Primary]: "btn-primary",
  [ButtonColor.Secondary]: "btn-secondary",
  [ButtonColor.Tertiary]: "btn-tertiary",
};

const Button = ({
  className,
  size,
  color = ButtonColor.Primary,
  iconName,
  iconColor,
  iconWidth,
  iconHeight,
  children,
  ...rest
}: ButtonProps) => {
  const classes = classnames(
    "flex justify-center items-center gap-x-2",
    ButtonColorClasses[color],
    className
  );
  return (
    <button type="button" color={color} className={classes} {...rest}>
      {iconName && (
        <Icon
          icon={iconName}
          color={iconColor}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
