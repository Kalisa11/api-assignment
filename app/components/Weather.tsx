import { WeatherData } from "@/src/utils/types";
import Image from "next/image";
import { WiHumidity, WiHorizonAlt, WiStrongWind } from "react-icons/wi";

const Weather = ({ data }: { data: WeatherData }) => {
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10 overflow-hidden">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;C</p>
      </div>

      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">
          Weather in {data.name}, {data.sys.country}
        </p>
        <div className="flex justify-between text-center">
          <div className="flex flex-col items-center justify-center">
            <WiHorizonAlt size={40} />
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;C
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div className="flex flex-col items-center justify-center py-1">
            <WiHumidity size={40} />
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <WiStrongWind size={40} />
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} m/s
            </p>
            <p className="text-xl">Wind</p>
          </div>
        </div>
        <div className="flex pt-5 justify-between">
          <div>
            <p>
              <strong>Min:</strong> {data.main.temp_min}°C
            </p>
            <p>
              <strong>Max:</strong> {data.main.temp_max}°C
            </p>
          </div>
          <div>
            <p>
              Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
            <p>
              Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
