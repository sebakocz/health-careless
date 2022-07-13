import {useState} from "react";

const carouselItemClass = "shadow-lg w-36 h-40 p-3 flex flex-col text-center bg-main-400 text-black absolute flex justify-center transition ease-in-out delay-50 duration-300"

export default function Carousel(){

    const [items, setItems] = useState<string[]>(["carousel-right ","carousel-center ", "carousel-left "])

    const carouselToRight = () => {
        const newItems = [...items.slice(1), items[0]]
        // @ts-ignore
        setItems(newItems)
    }

    return(
        <div className={"relative w-36 h-44 mt-1 mb-1"} onClick={carouselToRight}>
            <div className={items[0]+carouselItemClass}>
                <h3>Get a job</h3>
                <div className="w-full border-t border-gray-300"></div>
                <p>Nearby restaurant seeks kitchen help</p>
            </div>
            <div className={items[1]+carouselItemClass}>
                <h3>Med School</h3>
                <div className="w-full border-t border-gray-300"></div>
                <p>Definitly not going into more dept</p>
            </div>
            <div className={items[2]+carouselItemClass}>
                <h3>Stay at home</h3>
                <div className="w-full border-t border-gray-300"></div>
                <p>Mum's pancakes are delicious after all</p>
            </div>
        </div>
    )
}