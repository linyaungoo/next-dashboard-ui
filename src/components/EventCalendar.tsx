'use client'

import { useState } from "react";
import Calendar from "react-calendar";
import Image from 'next/image';
import 'react-calendar/dist/Calendar.css';

//TEMP Data
const events = {
    event1: {
        id: 1,
        title: "Halloween Party",
        time: "6:00 PM - 10:00 PM",
        description: "Join us for a spooky night filled with fun and games!",
    },
    event2: {
        id: 2,
        title: "Thanksgiving Dinner",
        time: "5:00 PM - 9:00 PM",
        description: "Celebrate Thanksgiving with a feast and family!",
    },
    event3: {
        id: 3,
        title: "New Year's Eve Celebration",
        time: "8:00 PM - 1:00 AM",
        description: "Ring in the new year with friends, food, and fireworks!",
    }
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    const eventsArry = Object.values(events);
  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}></Image>
        </div>
        <div className="flex flex-col gap-4 ">
            {eventsArry.map(ev =>(
                <div className="p-5 rounded-md border-2 broder-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={ev.id}>
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-gray-600">{ev.title}</h1>
                        <span className="text-gray-300 text-xs">{ev.time}</span>
                    </div>
                    <p className="mt-2">{ev.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalendar