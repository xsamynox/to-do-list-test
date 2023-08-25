import classnames from "classnames";
import { forwardRef, PropsWithChildren } from "react";

type ContextMenuProps = PropsWithChildren<{
  className?: string;
  isVisible: boolean;
  position: { y: number; x: number };
}>;

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ className, isVisible, position, children }, ref) => {
    const classes = classnames(
      "fixed flex bg-neutral-500 text-white font-extralight z-50 py-2 px-1 rounded-md",
      className
    );
    return (
      <>
        {isVisible && (
          <div
            ref={ref}
            className={classes}
            style={{
              top: position.y,
              left: position.x,
            }}
          >
            {children}
          </div>
        )}
      </>
    );
  }
);
ContextMenu.displayName = "ContextMenu";
export default ContextMenu;
