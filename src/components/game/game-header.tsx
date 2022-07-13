import {useEffect} from "react";


const calendarIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dbd1b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
)

const healthIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dbd1b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
)

const moneyIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dbd1b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
)

const moraleIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dbd1b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
)

const iconClass = "stat-change flex bg-highlight text-main rounded p-2"

export type GameStats = {
    day: number,
    health: number,
    morale: number,
    money: number
}

export default function GameHeader(stats: GameStats){

    useEffect(() => {
        console.log("yo")
    }, [stats])

    return(
        <div className={"sticky top-0 z-50 text-black w-screen md:w-1/2 lg:w-1/3 mb-14 pt-5"}>
            <div className={"flex justify-around"}>
                <div key={stats.day+"day"} className={iconClass}>
                    {calendarIcon} {stats.day}
                </div>

                <div key={stats.health+"health"} className={iconClass}>
                    {healthIcon} {stats.health}
                </div>

                <div key={stats.money+"money"} className={iconClass}>
                    {moneyIcon} {stats.money}
                </div>

                <div key={stats.morale+"morale"} className={iconClass}>
                    {moraleIcon} {stats.morale}
                </div>
            </div>
        </div>
    )
}