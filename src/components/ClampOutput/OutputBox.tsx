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
    <div className="flex my-4 py-4 pl-4 bg-c-secondary rounded-2xl">
      <div className="w-full text-center py-4 bg-c-grey-one rounded-l-xl">
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
          "w-24 bg-c-primary mr-4 text-c-background font-bold flex justify-center items-center rounded-r-xl hover:bg-green-600 active:bg-green-500",
          { "bg-green-600": showIcon }
        )}
        onClick={handleCopy}
      >
        {showIcon ? <CheckIcon /> : "COPY"}
      </button>
    </div>
  );
};

export default OutputBox;
