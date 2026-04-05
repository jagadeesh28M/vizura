import { useState, useCallback } from "react";
import { Button } from "./Button";
import { Prompt } from "./Prompt";
import { Selection } from "./Selection";
import { imgReq } from "../function";
import { Video } from "./Video";
import { Alert } from "./Alert";

export const Card: React.FC = () => {
  const [parentPrompt, setParentPrompt] = useState<string>("");
  const [parentRatio, setParentRatio] = useState<string>("");
  const [parentDuration, setParentDuration] = useState<string>("");
  const [mainUrl, setMainUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<boolean>(false);

  const receivedPrompt = (promptValue: string): void => {
    setParentPrompt(promptValue);
  };

  const receivedRatio = (ratioValue: string): void => {
    setParentRatio(ratioValue);
  };

  const receivedDuration = (durationValue: string): void => {
    setParentDuration(durationValue);
  };

  const receivedUrl = (url: string): void => {
    setMainUrl(url);
    setLoading(false);
  };

  const handleClick = useCallback(() => {
    if (!parentPrompt || !parentRatio || !parentDuration) {
      setAlertMessage(true);
      return;
    }
    setAlertMessage(false);
    setLoading(true);
    imgReq(
      {
        prompt: parentPrompt,
        ratio: parentRatio,
        time: parentDuration,
      },
      receivedUrl
    );
  }, [parentPrompt, parentRatio, parentDuration]);

  return (
    <div className="h-auto w-auto border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#d4191c] to-[rgba(0,0,0,0.01)] text-white  p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
      <div
        className={`grid grid-cols-1 gap-5 ${
          mainUrl ? "lg:grid-cols-2 lg:gap-5" : ""
        }`}
      >
        <div>
          <h1 className="text-6xl p-1 font-bold text-center">Vizura.ai</h1>
          <p className="text-md text-center font-semibold">
            Text to Video Generator
          </p>
          <Prompt sendPromptToParent={receivedPrompt} />
          <Selection
            heading={"Ratio"}
            bt1={"▭ 16:9"}
            bt2={"▯ 9:16"}
            sendData={receivedRatio}
          />
          <Selection
            heading={"Duration"}
            bt1={"5s"}
            bt2={"10s"}
            sendData={receivedDuration}
          />
          {alertMessage && <Alert />}
          <Button onClick={handleClick} loading={loading} />
          {loading && (
            <div className="flex justify-center items-center mt-3">
              Wait 3-5 mins to generate
            </div>
          )}
        </div>
        {mainUrl && (
          <div className="flex flex-col gap-14 justify-center items-center h-full">
            <Video link={mainUrl} />
            <a
              href={mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 uppercase rounded-lg text-[17px] font-medium text-white/80 border border-white/80 bg-transparent transition duration-500 cursor-pointer select-none hover:text-white hover:bg-[#008cff] hover:border-[#008cff] hover:shadow-[0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff] focus:outline-none"
            >
              Download
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
