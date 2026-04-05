import { MouseEventHandler } from "react";

export const Button = ({
  onClick,
  loading,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full invert hover:rotate-2 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-cyan-700/60 transition ease-in-out hover:scale-105 p-1 mt-2 rounded-2xl bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-800 hover:from-cyan-700 hover:via-cyan-800 hover:to-cyan-600"
    >
      <div className="flex items-center justify-center px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-semibold w-full h-full">
        {loading ? (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin w-6 h-6 text-cyan-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 000 8v4a8 8 0 01-8-8z"
              />
            </svg>
            Generating...
          </div>
        ) : (
          <div className="group-hover:scale-100 flex items-center group-hover:text-cyan-500 text-cyan-400 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              className="w-6 h-6 stroke-cyan-600 group-hover:stroke-cyan-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            Generate
          </div>
        )}
      </div>
    </button>
  );
};
