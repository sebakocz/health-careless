import Image from "next/image";
import AnimWrapper from "../../../utils/anim-wrapper";
import ChoiceButton from "../../../interaction/choice-button";
import {useEffect, useState} from "react";
import Carousel from "../../../interaction/carousel";
import Slider from "../../../interaction/slider";

export default function Start({nextStep}: any) {
    const [effect, setEffect] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const slides = [
        <div key={"hi"}>hi</div>,
        <div key={"yo"}>yo</div>,
        <div key={"buh"}>buh</div>,
        <div key={"bla"}>bla</div>,
        <div key={"baam"}>baam</div>
    ]

    return(
        <div className={`${effect && 'next-chapter'}`}
             onAnimationEnd={() => nextStep(<Start key={Math.random()} nextStep={nextStep}/>)}>
            <div onAnimationEnd={e => e.stopPropagation()}>
                <AnimWrapper>
                    <div className={"flex justify-center"}>
                        <div className={"image-cut"}>
                            <Image alt={""}
                                   width={300}
                                   height={300}
                                   src={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjz8tXqnCWels56uuO5t4pUugI5sxy6Aq_U5wtm07wL9eLz98YoI1JA_U8zs42dhJjm33BpP-Lil8QKvyCExfi5-u3HlAsZ6tZls5Nb0wNZ_QOPvE0r9oYLLX62YLi8QS-iS-N8EwrpePTT8Ouuoqsp-SUofxz_hs2I_EFpGkHPpV4hgwCLuQ0B4f_2/s1600/first%20girl%20gif.gif"}/>
                        </div>
                    </div>

                    <p>
                        This is you: An 18 year old black female who has just graduated high school.
                    </p>
                    <p>
                        You were diagnosed with sickle cell disease at age 1.
                    </p>
                    <p>
                        {"You're trying to decide if you should go to college. You've always been told that getting an education is important, but you're unsure if you'll be able to pay back your student loans after only an undergraduate degree. Plus, none of your friends are attending university and you don't want to be the only one."}
                    </p>

                    <div className={"flex justify-center"}>
                        <Carousel/>
                    </div>

                    <div className={"m-10"}>
                        <Slider/>
                    </div>

                    <p>
                        {"You wonder if it would be better to get a job immediately out of high school. You know that your parents struggle financially and you think that maybe you'd be able to help them and yourself if you were employed."}
                    </p>
                    <p>
                        You decide to:
                    </p>

                    <ChoiceButton onClick={() => setEffect(true)}>
                        pursue a college education college
                    </ChoiceButton>
                    <ChoiceButton onClick={() => setEffect(true)}>
                        make money
                    </ChoiceButton>

                </AnimWrapper>
            </div>
        </div>
    )
}