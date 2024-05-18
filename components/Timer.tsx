"use client";
import { useEffect, useState } from "react";
import TimerUnit from "./TimerUnit";

export default function Timer() {
  const [time, setTime] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDiscountDate: Date = new Date(2024, 5, 11);

    const intervalId = setInterval(() => {
      const nowDate: Date = new Date();
      const duration = endDiscountDate - nowDate;
      const seconds = Math.round((duration / 1000) % 60);
      const minutes = Math.round((duration / 1000 / 60) % 60);
      const hours = Math.round((duration / 1000 / 60 / 60) % 24);
      const days = Math.round(duration / 1000 / 60 / 60 / 24);
      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time, setTime]);
  return (
    <div className="flex gap-2">
      <TimerUnit amount={time.days} type="days" />
      <TimerUnit amount={time.hours} type="hours" />
      <TimerUnit amount={time.minutes} type="mins" />
      <TimerUnit amount={time.seconds} type="secs" />
    </div>
  );
}
