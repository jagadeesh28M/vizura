import { useState, useEffect } from "react";

interface PromptProps {
  sendPromptToParent: (prompt: string) => void; // Function that accepts a string and returns void
}

export const Prompt: React.FC<PromptProps> = ({ sendPromptToParent }) => {
  const [prompt, setPrompt] = useState<string>("");

  useEffect(() => {
    sendPromptToParent(prompt);
  }, [prompt, sendPromptToParent]);

  return (
    <div className="pt-3">
      <h2 className="font-semibold text-xl py-2">Prompt</h2>
      <textarea
        onChange={(e) => {
          const newPrompt = e.target.value;
          setPrompt(newPrompt);
        }}
        className=" rounded-lg p-2 w-full resize-none overflow-hidden h-40  bg-zinc-200  font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 text-black  placeholder:opacity-100 px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 "
        placeholder="Enter your prompt here"
        rows={1}
        value={prompt}
      />
    </div>
  );
};
