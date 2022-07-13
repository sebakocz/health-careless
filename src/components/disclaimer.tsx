import ChoiceButton from "./interaction/choice-button";
import {useState} from "react";
import Start from "./game/nodes/black-female/start";
import AnimWrapper from "./utils/anim-wrapper";

export default function Disclaimer({nextStep}: any){
    const [effect, setEffect] = useState(false)

    return (
        <div
            className={`${effect && 'next-chapter'}`}
            onAnimationEnd={() => nextStep(<Start nextStep={nextStep}/>)}
        >
            <div onAnimationEnd={e => e.stopPropagation()}>
                <h1 className={"text-4xl mt-0 mb-2"}>
                    Before we start...
                </h1>

                <main>
                    <AnimWrapper>
                        <p>
                            This simulation is an experience inspired by the <b>oppression</b> that our minority population in the USA faces on a daily basis. For this exercise, current literature was consulted and adjusted for inflation with regards to average income, health insurance costs, analgesic administration disparities, and more.
                        </p>
                        <p>
                            This game uses the <b>monetary system employed in the USA</b>, so all currency is displayed in dollar values.
                        </p>
                        <p>
                            At the time of developing this game, the median wage of a minority in the USA was <b>$47,800</b> and according to the <a href={"https://www.dol.gov/agencies/wb/data/earnings/median-annual-sex-race-hispanic-ethnicity/"} target={"_blank"} rel="noreferrer">U.S. Department of Labor (DOL)</a>, this is nearly <b>35% below</b> the median wage of a white male.
                        </p>
                        <p>
                            <b>NOTE:</b> In this exercise, pension payments, governmental assistance programs, current events with regards to race, and tax obligations were not considered. These events are difficult to simulate, and the objective of this exercise is to simply provide the most accurate representation of what is presented in the literature with regards to minority healthcare disparities in the USA.
                        </p>
                        <p>
                            The simulation will provide you with 3 variables (<b>health</b>, <b>morale</b>, & <b>money</b>) and will adapt based on your choices.
                        </p>


                        <ChoiceButton
                            onClick={() => setEffect(true)}
                        >
                            Start The Simulation
                        </ChoiceButton>

                    </AnimWrapper>
                </main>
            </div>
        </div>
    )
}