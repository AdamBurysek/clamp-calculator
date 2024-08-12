import useGlobalState from "../../hooks/useGlobalState";
import OutputBox from "./OutputBox";

const ClampOutputBox = () => {
  const { clampValue, targetValue, addComment, commentValue, useTailwind } = useGlobalState();

  return (
    <>
      {useTailwind ? (
        <>
          <OutputBox
            clampValue={clampValue}
            targetValue={targetValue}
            addComment={false}
            commentValue={""}
          />
          {addComment && (
            <OutputBox
              clampValue={""}
              targetValue={""}
              addComment={true}
              commentValue={commentValue}
            />
          )}
        </>
      ) : (
        <OutputBox
          clampValue={clampValue}
          targetValue={targetValue}
          addComment={addComment}
          commentValue={commentValue}
        />
      )}
    </>
  );
};

export default ClampOutputBox;
