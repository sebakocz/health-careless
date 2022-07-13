import {useState} from "react";
import { Range } from 'react-range';
import CountUp from 'react-countup';

export default function Slider(){
    const [values, setValues] = useState([8])

    const [currentValue, setcurrentValue] = useState(8)
    const [prevValue, setPrevValue] = useState(0)

    return(
        <div>
            <div className={"mb-5 flex justify-around"}>
                <div className={"rounded-3xl border p-2"}>
                    Effort In: {values[0]}h
                </div>
                <div className={"rounded-3xl border p-2"}>
                    Money out:
                    $<CountUp useEasing={true}
                             useGrouping={true}
                             start={prevValue*12}
                             end={currentValue*12}/>
                </div>
                <div className={"rounded-3xl border p-2"}>
                    Health out:
                    $<CountUp useEasing={true}
                              useGrouping={true}
                              start={prevValue*-2}
                              end={currentValue*-2}/>
                </div>
            </div>
            <Range
                step={1}
                min={0}
                max={24}
                values={values}
                onChange={(val) => {
                    setValues(val)
                }}
                onFinalChange={(val) => {
                    setPrevValue(currentValue)
                    setcurrentValue(val[0] || 0)
                }}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '6px',
                            width: '100%',
                            backgroundColor: '#dbd1b7'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '32px',
                            width: '32px',
                            backgroundColor: '#ce4415',
                            borderRadius: '50px'
                        }}
                    />
                )}
            />
        </div>
    )
}