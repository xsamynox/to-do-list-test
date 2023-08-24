import { RefObject, useEffect, useState } from "react";
import DropdownMenuItem, { DropdownMenuItemProps } from "./dropdownMenuItem";
import classnames from "classnames";

type DropdownMenuProps = {
  parentRef: RefObject<HTMLElement>;
  isVisible: boolean;
  items: DropdownMenuItemProps[];
};

const DropdownMenu = ({ parentRef, isVisible, items }: DropdownMenuProps) => {
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const parent = parentRef.current;

    if (parent) {
      parent.className = classnames(parent.className, "!relative");

      const parentRect = parent.getBoundingClientRect();
      setParentHeight(parentRect.height);
    }
  }, []);

  return (
    <div className="w-full">
      {isVisible && (
        <div
          style={{ top: parentHeight }}
          className={`w-full absolute left-0 bg-white shadow-lg`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="bg-white flex flex-col w-full">
            {items.map((item) => (
              <DropdownMenuItem {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
