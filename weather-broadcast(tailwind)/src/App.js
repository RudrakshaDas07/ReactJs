import "./App.css";
import { useEffect, useState } from "react";
function App() {
  let [city, setCity] = useState("");
  let [wDetails, setWdetails] = useState();
  let [isLoading, setIsloading] = useState(false);
  let getData = (event) => {
    setIsloading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`
    )
      .then((res) => res.json())
      .then((finalRes) => {
        if (finalRes.cod === "404") {
          setWdetails(undefined);
        } else {
          setWdetails(finalRes);
        }
        setIsloading(false);
      });
    event.preventDefault();
    setCity("");
  };
  useEffect(() => {
    //For info display
    console.log("Welcome to Rishi's page...");
  });
  return (
    <div className="w-[100%] h-[100vh] bg-[#4aacb1]">
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-[40px] font-bold py-[50px] text-white">
          Simple weather App
        </h1>
        <form onSubmit={getData}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[300px] h-[40px] pl-3"
            placeholder="City Name"
          />
          <button className="bg-[#1d4a6b] text-white font-bold h-[43px] p-[10px_20px] ml-1 ">
            Submit
          </button>
        </form>
        <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] relative">
          <img
            src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-minimal-loading-icon-graphic-png-image_6944732.png"
            alt="Loading..."
            width={200}
            className={`absolute left-[30%]
     ${isLoading ? "" : "hidden"}`}
          />
          {wDetails !== undefined ? (
            <>
              <h3 className="font-bold text-[30px]">
                {wDetails.name}
                <span className="bg-[yellow]">{wDetails.sys.country}</span>
              </h3>
              <h2 className="font-bold text-[40px]">{wDetails.main.temp}</h2>
              <img
                src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}
                alt="weather"
              />
              <p>{wDetails.weather[0].description}</p>
            </>
          ) : (
            "No data...!"
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
