import { RefObject, useCallback, useEffect, useState } from "react";

interface IUseIsScrollComplete<TElement> {
  ref: RefObject<TElement>;
  querySelector?: string;
  markAsComplete?: boolean;
}

const THRESHOLD = 1;

function useIsScrollComplete<TElement extends HTMLElement>({
  ref,
  querySelector,
  markAsComplete = true,
}: IUseIsScrollComplete<TElement>) {
  const [isScrollComplete, setIsScrollComplete] = useState(false);

  const onScroll: EventListener = useCallback(({ currentTarget }) => {
    const { scrollHeight, clientHeight, scrollTop } = currentTarget as TElement;

    if (Math.abs(scrollHeight - clientHeight - scrollTop) < THRESHOLD) {
      setIsScrollComplete(true);
    } else {
      setIsScrollComplete(false);
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    const targetElement = querySelector
      ? element?.querySelector(querySelector)
      : element;

    if (targetElement) {
      const { scrollHeight, clientHeight } = targetElement;

      if (scrollHeight === clientHeight) {
        // set scroll is complete if there is no scroll
        setIsScrollComplete(true);
        //console.log("scroll is complete");
      }

      targetElement.addEventListener("scroll", onScroll);

      if (isScrollComplete && markAsComplete) {
        targetElement.removeEventListener("scroll", onScroll);
      }
    }

    return () => {
      if (targetElement) {
        targetElement.removeEventListener("scroll", onScroll);
      }
    };
  }, [isScrollComplete, markAsComplete, onScroll, querySelector, ref]);

  return { isScrollComplete };
}

export default useIsScrollComplete;