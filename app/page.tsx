"use client";

import { useEffect, useState } from "react";
import { useCityStore } from "@/src/utils/store";
import { WeatherData } from "@/src/utils/types";
import axios from "axios";
import Image from "next/image";
import Search from "@/app/components/Search";
import Weather from "@/app/components/Weather";
import Spinner from "@/app/components/Spinner";

const fetchWeatherData = async (city: string) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather",
      params: {
        q: city,
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
export default function Home() {
  const city = useCityStore((state) => state.city);
  const [cityWeather, setCityWeather] = useState<WeatherData>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (city !== "") {
      fetchWeatherData(city)
        .then((data) => setCityWeather(data))
        .catch((err) => console.error(err));
    }
    setLoading(false);
  }, [city]);

  if (loading) return <Spinner />;
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      <Image
        src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
        className="object-cover"
        layout="fill"
        alt="bg-image"
      />
      <Search />
      {cityWeather && <Weather data={cityWeather} />}
    </div>
  );
}
