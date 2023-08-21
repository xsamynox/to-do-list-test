import classnames from "classnames";

type TooltipProps = {
  className?: string;
  message: string;
  children: React.ReactNode;
  position?: string;
};

const Tooltip = ({
  message,
  children,
  position = "top-14",
  className,
}: TooltipProps) => {
  const classes = classnames(
    `absolute ${position} scale-0 transition-all rounded bg-gray-500 border border-gray-600 p-2 text-xs font-extralight text-white group-hover:scale-100 z-40`,
    className
  );
  return (
    <div className="group relative flex justify-center">
      {children}
      <span className={classes}>{message}</span>
    </div>
  );
};

export default Tooltip;
