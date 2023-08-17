import axios from "axios";
import { NextResponse } from "next/server";

const fetchWeatherData = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather",
      params: {
        q: "dubai",
        units: "metric",
        appId: process.env.NEXT_PUBLIC_WEATHER_KEY as string,
      },
    };
    const response = await axios.get(options.url, { params: options.params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export async function GET() {
  const resData = await fetchWeatherData();
  return NextResponse.json(resData);
}
