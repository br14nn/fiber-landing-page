import { useEffect, useRef, useState } from "react";

type TCommentProps = {
  children: React.ReactNode;
};

export default function (props: TCommentProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(
    null,
  ) as React.MutableRefObject<HTMLParagraphElement>;

  const [readMoreButtonVisibility, setReadMoreButtonVisibility] =
    useState<Boolean>(false);
  const [hiddenTextVisibility, setHiddenTextVisibility] = useState<
    "line-clamp-4" | null
  >("line-clamp-4");
  const [textButton, setTextButton] = useState<"read more" | "read less">(
    "read more",
  );

  useEffect(() => {
    if (paragraphRef.current.scrollHeight >= 120) {
      setReadMoreButtonVisibility(true);
    }

    window.addEventListener("resize", () => {
      const { scrollHeight } = paragraphRef.current;

      if (scrollHeight >= 120) {
        setReadMoreButtonVisibility(true);
      }

      if (scrollHeight < 120) {
        setReadMoreButtonVisibility(false);
      }
    });
  }, [readMoreButtonVisibility]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === "readMoreButton" && hiddenTextVisibility === "line-clamp-4") {
      setHiddenTextVisibility(null);
      setTextButton("read less");
    } else if (name === "readMoreButton" && hiddenTextVisibility === null) {
      setHiddenTextVisibility("line-clamp-4");
      setTextButton("read more");
    }
  };

  return (
    <div>
      <p className={`${hiddenTextVisibility} select-none`} ref={paragraphRef}>
        {props.children}
      </p>
      {readMoreButtonVisibility && (
        <button
          className="rounded-full bg-violet-blue px-2 py-1 text-sm font-normal leading-none text-white"
          name="readMoreButton"
          onClick={handleClick}
        >
          {textButton}
        </button>
      )}
    </div>
  );
}
