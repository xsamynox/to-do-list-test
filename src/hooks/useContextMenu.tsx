import { useCallback, useEffect, useRef, useState } from "react";

const useContextMenu = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(() => false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const hideContextMenu = useCallback(() => {
    setIsVisible(false);
  }, []);

  const showContextMenu = useCallback(
    (event: { preventDefault: () => void; clientX: any; clientY: any }) => {
      event.preventDefault();
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    },
    []
  );

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (ref.current) {
        hideContextMenu();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return {
    showContextMenu,
    registerContextMenu: {
      ref,
      isVisible,
      position,
    },
  };
};

export default useContextMenu;
