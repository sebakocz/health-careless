

export default function ChoiceButton({children, onClick}: any){

    return(
        <button
            type={"button"}
            className={`relative w-full font-bold rounded-2xl px-5 py-2.5 m-2 overflow-hidden group bg-main text-black hover:bg-gradient-to-r hover:from-main hover:to-main-400 hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300`}
            onClick={onClick}
        >
                <span
                    className="absolute right-0 w-8 h-16 -mt-4 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-[1600%] ease"></span>
                {children}
        </button>
    )
}