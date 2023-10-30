import React, { useEffect, useState } from 'react'

type TimeCounterType = {
    [key: string]: string | number;
}

export default function Countdown() {
    const [CDCounter, setCDCounter] = useState<number[]>([0, 0, 0, 0]);
    const [remainTime, setRemainTime] = useState<number>(0);

    const daysStyle: TimeCounterType = { '--value': CDCounter[0] };
    const hoursStyle: TimeCounterType = { '--value': CDCounter[1] };
    const minutesStyle: TimeCounterType = { '--value': CDCounter[2] };
    const secondsStyle: TimeCounterType = { '--value': CDCounter[3] };

    useEffect(() => {
        const updateCounter = (time: number) => {
            const remainTime = time - 1;
            const remainDay = Math.floor(remainTime / 86400);
            const remainHour = Math.floor((remainTime % 86400) / 3600)
            const remainMinute = Math.floor((remainTime % 3600) / 60)
            const remainSecond = remainTime % 60

            setCDCounter([remainDay, remainHour, remainMinute, remainSecond])
            return remainTime
        }

        const timeInterval = setInterval(() => {
            setRemainTime(value => updateCounter(value))
        }, 1000)

        return () => clearInterval(timeInterval);
    }, [remainTime])

    useEffect(() => {
        const remainTime = Math.floor((1701310945000 - Date.now()) / 1000);
        setRemainTime(remainTime)
    }, [])

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col px-4 xl:px-6 py-2 xl:py-4 bg-gradient-to-t from-purple-500/50 to-purple-700/70 rounded-box text-purple-200">
                <span className="countdown font-mono text-4xl xl:text-5xl">
                    <span style={daysStyle}></span>
                </span>
                days
            </div>
            <div className="flex flex-col px-4 xl:px-6 py-2 xl:py-4 bg-gradient-to-t from-purple-500/50 to-purple-700/70 rounded-box text-purple-200">
                <span className="countdown font-mono text-4xl xl:text-5xl">
                    <span style={hoursStyle}></span>
                </span>
                hours
            </div>
            <div className="flex flex-col px-4 xl:px-6 py-2 xl:py-4 bg-gradient-to-t from-purple-500/50 to-purple-700/70 rounded-box text-purple-200">
                <span className="countdown font-mono text-4xl xl:text-5xl">
                    <span style={minutesStyle}></span>
                </span>
                min
            </div>
            <div className="flex flex-col px-4 xl:px-6 py-2 xl:py-4 bg-gradient-to-t from-purple-500/50 to-purple-700/70 rounded-box text-purple-200">
                <span className="countdown font-mono text-4xl xl:text-5xl">
                    <span style={secondsStyle}></span>
                </span>
                sec
            </div>
        </div>
    )
}
