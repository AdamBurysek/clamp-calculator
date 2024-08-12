import { useRef, useState } from "react";
import { cn } from "../../utils/classNames";
import { CheckIcon } from "../Icons";

interface OutputBoxProps {
  clampValue: string;
  targetValue: string;
  addComment: boolean;
  commentValue: string;
  useTailwind: boolean;
}

const OutputBox = ({
  clampValue,
  targetValue,
  addComment,
  commentValue,
  useTailwind,
}: OutputBoxProps) => {
  const [showIcon, setShowIcon] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const handleCopy = () => {
    if (textRef.current) {
      const textToCopy = textRef.current.innerText;
      navigator.clipboard.writeText(textToCopy);
      setShowIcon(true);
      setTimeout(() => {
        setShowIcon(false);
      }, 1000);
    }
  };
  return (
    <div className="my-4 flex rounded-2xl bg-c-secondary py-4 pl-4">
      <div className="w-full rounded-l-xl bg-c-grey-one py-4 text-center">
        <p ref={textRef}>
          <span>
            {/* Comment */}
            {addComment && (
              <span>
                {commentValue}
                <br />
              </span>
            )}
            {/* Clamp */}
            {clampValue && (
              <span>
                {targetValue}
                {/* Adding a space between targetValue and clampValue if targetValue is not empty and useTailwind is false */}
                {targetValue && !useTailwind ? " " : ""}
                {clampValue}
                {/* Adding a semicolon at the end of the clamp if targetValue is provided and useTailwind is false */}
                {targetValue && clampValue && !useTailwind ? ";" : ""}
              </span>
            )}
          </span>
        </p>
      </div>
      <button
        className={cn(
          "mr-4 flex w-24 items-center justify-center rounded-r-xl bg-c-primary font-bold text-c-background hover:bg-green-600 active:bg-green-500",
          { "bg-green-600": showIcon },
        )}
        onClick={handleCopy}
      >
        {showIcon ? <CheckIcon /> : "COPY"}
      </button>
    </div>
  );
};

export default OutputBox;
