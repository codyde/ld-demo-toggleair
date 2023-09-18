import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/nav";
import { MoveHorizontalIcon } from "lucide-react";
import { useContext, useState } from "react";
import AirportPicker from "@/components/airportPicker";
import {motion} from "framer-motion";
import TripsContext from "@/utils/contexts/TripContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [fromLocation, setFromLocation] = useState("From");
  const [toLocation, setToLocation] = useState("To");
  const [showSearch, setShowSearch] = useState(false);
  const [activeField, setActiveField] = useState<"from" | "to" | null>(null);
  const { bookedTrips, setBookedTrips } = useContext(TripsContext);


  function setAirport() {
    setShowSearch(true);
  }

  function bookTrip() {
    const tripId = Math.floor(Math.random() * 900) + 100; // Generate a random 3 digit number
    setBookedTrips([...bookedTrips, { id: tripId, from: fromLocation, to: toLocation }]);
  }


  return (
    <main className={`flex min-h-screen bg-white flex-col`}>
      <div className="grid xl:flex py-10 xl:py-36 mb-8 bg-ldgray w-full shadow-2xl items-center">
        <div className="w-full xl:w-1/2 flex flex-col items-center place-content-center">
          <div className="flex items-center">
          <button
            onClick={() => {
              setActiveField("from");
              setShowSearch(true);
            }}
          >
            <p className="text-6xl font-bold px-4 py-2 border-b-2 border-red-600">
              {fromLocation}
            </p>
          </button>
          <MoveHorizontalIcon strokeWidth={1} size={100} color="red" />
          <button
            onClick={() => {
              setActiveField("to");
              setShowSearch(true);
            }}
          >
            <p className="text-6xl font-bold px-4 border-b-2  py-2 border-red-600">
              {toLocation}
            </p>
          </button>
          {showSearch && activeField && (
            <AirportPicker
              setToLocation={setToLocation}
              setFromLocation={setFromLocation}
              setShowSearch={setShowSearch}
              activeField={activeField}
              toLocation={toLocation}
              fromLocation={fromLocation}
            />
          )}
          </div>
          {toLocation !== "To" && fromLocation !== "From" && (
            <motion.div 
            initial={{ scale: .25, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: .25 }}
            className="w-full flex justify-center pt-4">
              <motion.button
              whileTap={{ scale: .5, color: 'green' }}
              onClick={() => bookTrip()} className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 font-semibold text-xl rounded-lg">
                Book Now!
              </motion.button>
            </motion.div>
          )}
        
        </div>
        <div className="w-full xl:w-1/2 items-center place-content-center mr-16">
          <p className="text-7xl font-bold pb-4">Toggle Airlines</p>
          <p className="text-md font-light pt-4">
            LaunchDarkly into the skies. In the air in milliseconds, reach your
            destination without risk, and ship your travel dreams faster than
            ever before.
          </p>
        </div>
      </div>
      <div className="flex h-1/2 w-full">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="font-bold text-3xl text-gray-900">
              Wheels-Up with Toggle Airlines!
            </p>
            <p className="text-gray-700 pt-2 text-lg">
              Launch flightly into the skies. Live the life of comfort, spead,
              and excitement as board any of our hundreds of flights a month.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src="airplane.jpg" className="w-2/3 shadow-2xl rounded-lg" />
        </div>
      </div>
      <div className="flex h-1/2 w-full">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="airtravel-map.jpg"
            className="w-2/3 shadow-2xl rounded-lg"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-1/2 flex flex-col justify-center">
            <p className="font-bold text-3xl text-gray-900">
              Toggle "On" Your Next Trip
            </p>
            <p className="text-gray-700 pt-2 text-lg">
              With more than 100 points of presence globally, you'll be able to
              fly anywhere you need in the blink of eye. Resolve your travel,
              ship your family faster, without the risk!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
