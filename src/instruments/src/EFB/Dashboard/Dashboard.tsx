import React from 'react';
import { FlightWidget } from './Widgets/FlightWidget';
import { WeatherWidget } from './Widgets/WeatherWidget';
import { useAppSelector } from '../Store/store';

export const Dashboard = () => {
    const { departingAirport, arrivingAirport } = useAppSelector((state) => state.simbrief.data);

    return (
        <div className="w-full">
            <h1 className="font-bold">Dashboard</h1>
            <div className="flex mt-4 w-full h-efb">
                {/* <FlightWidget /> */}
                <div className="flex flex-col w-3/5">
                    <div className="p-6 mb-3 ml-3 h-2/5 bg-theme-accent rounded-lg">
                        <div className="flex items-center h-full">
                            <div className="w-1/2">
                                <WeatherWidget name="origin" editIcao="yes" icao={departingAirport} />
                            </div>
                            <div className="border border-gray-500 rounded-full h-60" />
                            <div className="w-1/2">
                                <WeatherWidget name="destination" editIcao="yes" icao={arrivingAirport} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
