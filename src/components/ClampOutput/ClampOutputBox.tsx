import useGlobalState from "../../hooks/useGlobalState";
import OutputBox from "./OutputBox";

const ClampOutputBox = () => {
  const { clampValue, targetValue, customTargetValue, addComment, commentValue, useTailwind } =
    useGlobalState();

  const tailwindNames = [
    { name: "font-size:", value: "text-" },
    { name: "width:", value: "w-" },
    { name: "padding-left:", value: "pl-" },
    { name: "padding-right:", value: "pr-" },
    { name: "margin-left:", value: "ml-" },
    { name: "margin-right:", value: "mr-" },
  ];

  const getTailwindValue = (name: string) => {
    const tailwindName = tailwindNames.find((item) => item.name === name);
    if (tailwindName) {
      return tailwindName.value;
    }
    return "";
  };

  return (
    <>
      {useTailwind ? (
        <>
          <OutputBox
            clampValue={clampValue}
            targetValue={customTargetValue ? customTargetValue : getTailwindValue(targetValue)}
            addComment={false}
            commentValue={""}
            useTailwind={useTailwind}
          />
          {addComment && (
            <OutputBox
              clampValue={""}
              targetValue={""}
              addComment={true}
              commentValue={commentValue}
              useTailwind={useTailwind}
            />
          )}
        </>
      ) : (
        <OutputBox
          clampValue={clampValue}
          targetValue={customTargetValue ? customTargetValue : targetValue}
          addComment={addComment}
          commentValue={commentValue}
          useTailwind={useTailwind}
        />
      )}
    </>
  );
};

export default ClampOutputBox;
