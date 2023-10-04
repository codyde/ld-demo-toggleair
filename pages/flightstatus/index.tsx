import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import airports from "@/lib/airportData";


const FlightStatus = () => {
  

  const getRandomFlightStatus = () => Math.random() > 0.5 ? 'On Time' : 'Delayed';
  const getRandomDuration = () => `${Math.floor(Math.random() * 5 + 1)}h ${Math.floor(Math.random() * 59)}m`;
  const getRandomAirport = () => airports[Math.floor(Math.random() * airports.length)].AirportCode;

  const flights = Array.from({ length: 10 }, () => ({
    start: getRandomAirport(),
    end: getRandomAirport(),
    duration: getRandomDuration(),
    status: getRandomFlightStatus(),
  }));

  return (
    <div className='flex flex-col items-center min-h-screen py-2 bg-white'>
        <div className="relative">
        <img
          src="/statusboard.png"
          alt="Airplane"
          className="w-screen object-cover blur-sm"
        />
       
      </div>
      <div className='w-2/3 mt-4'>
    <Table>
      <TableHeader>
        <TableRow className='text-2xl text-black'>
          <TableHead>Start</TableHead>
          <TableHead>End</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {flights.map((flight, index) => (
          <TableRow key={index}>
            <TableCell>{flight.start}</TableCell>
            <TableCell>{flight.end}</TableCell>
            <TableCell>{flight.duration}</TableCell>
            <TableCell className={flight.status === 'On Time' ? 'text-green-500' : 'text-red-500'}>
            <Badge variant={flight.status === 'On Time' ? 'outline' : 'destructive'}>
  {flight.status}
</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
    </div>
  );
};

export default FlightStatus;