import axios from "axios";

interface ValType {
  prompt: string;
  ratio: string;
  time: string;
}

export const imgReq = async (
  { prompt, ratio, time }: ValType,
  sendUrlToParent: (url: string) => void
) => {
  let ratioW = 0;
  let ratioH = 0;
  let duration = 0;

  if (ratio === "▭ 16:9") {
    ratioW = 1920;
    ratioH = 1080;
  } else if (ratio === "▯ 9:16") {
    ratioW = 1080;
    ratioH = 1920;
  }

  if (time === "5s") {
    duration = 5;
  } else if (time === "10s") {
    duration = 10;
  }

  const options = {
    method: "POST",
    url: "https://runwayml.p.rapidapi.com/generate/text",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      "x-rapidapi-host": "runwayml.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      text_prompt: prompt,
      model: "gen3",
      width: ratioW,
      height: ratioH,
      motion: 5,
      seed: 0,
      callback_url: "",
      time: duration,
    },
  };
  try {
    const response = await axios.request(options);
    const uuid = response.data.uuid;

    const img = {
      method: "GET",
      url: "https://runwayml.p.rapidapi.com/status",
      params: { uuid: uuid },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "runwayml.p.rapidapi.com",
      },
    };

    let url = null;

    while (!url) {
      try {
        const statusResponse = await axios.request(img);
        if (
          statusResponse.data.status === "success" &&
          statusResponse.data.url
        ) {
          url = statusResponse.data.url;
          console.log("URL fetched:", url);
          sendUrlToParent(url);
        } else if (statusResponse.data.status === "failed") {
          alert("Text prompt did not pass moderation");
          return;
        } else {
          console.log(
            "Status:",
            statusResponse.data.status,
            "Waiting for the URL..."
          );
        }

        await new Promise((resolve) => setTimeout(resolve, 5000)); // 5 seconds delay
      } catch (error) {
        alert("Error While Fetching Data");
        console.error("Error during polling:", error);
        return;
      }
    }
    return;
  } catch (error) {
    alert("Error While Fetching Data");
    console.error(error);
  }
};
