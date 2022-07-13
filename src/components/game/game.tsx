import {useState} from "react";
import Disclaimer from "../disclaimer";
import GameHeader from "./game-header";
import {GameStats} from "./game-header"


function getRandomInt(min: number, max: number) {
    return Math.floor( Math.random() * (max - min) + min);
}

export default function Game(){
    const nextStep = (node: any) => {
        setStoryNode(node)
        setStats(stats => {
            return {
                day: stats.day+1,
                morale: stats.morale + getRandomInt(-20, 20),
                money: stats.money + getRandomInt(-200, 200),
                health: stats.health + getRandomInt(-10, 10)
            }
        })
    }

    const [stats, setStats] = useState<GameStats>({day: 0, morale: 10, money: 50, health: 100})

    const [storyNode, setStoryNode] = useState(<Disclaimer nextStep={nextStep}/>)

    return(
        <>
            {stats.day != 0 && <GameHeader {...stats}/>}
            <div className={"w-80 md:w-1/2 lg:w-1/3 text-main h-screen relative flex flex-col content-start items-center"}>
                {storyNode}
            </div>
        </>
    )
}