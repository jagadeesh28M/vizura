import { useEffect, useState } from "react";

interface labels {
  heading: string;
  bt1: string;
  bt2: string;
  sendData: (ratioValue: string) => void;
}

export function Selection({ heading, bt1, bt2, sendData }: labels) {
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    sendData(activeButton);
  }, [sendData, activeButton]);

  return (
    <div className="mx-3">
      <div>
        <h2 className="font-semibold text-xl  text-white">{heading}</h2>
      </div>
      <div className="flex justify-evenly items-center m-3 gap-3">
        <Btn
          label={bt1}
          isActive={activeButton === bt1}
          onClick={() => {
            setActiveButton(bt1);
          }}
        />
        <Btn
          label={bt2}
          isActive={activeButton === bt2}
          onClick={() => {
            setActiveButton(bt2);
          }}
        />
      </div>
    </div>
  );
}

const Btn = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`w-full h-10 text-center cursor-pointer font-semibold rounded-2xl hover:shadow-md hover:shadow-rose-600 hover:border-2 hover:border-red-500 transition duration-300 ease-in-out border-2 border-[rgba(75,30,133,0.5)] bg-gradient-to-br from-red-500 to-[rgba(75,30,133,0.01)] text-white p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]
        ${
          isActive
            ? "bg-yellow-500 transition duration-300 ease-in-out focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-red-500"
            : " bg-[#38284f]"
        }`}
      onClick={onClick}
    >
      <span className="font-medium text-lg text-center text-white ">
        {label}
      </span>
    </button>
  );
};
