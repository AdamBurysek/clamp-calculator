import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <svg className="spinner h-16 w-16" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="25"
        ></circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
