

export default function AnimWrapper({children}: any){
    return(
        <>
            {children.map((child: any, index: number) => {
                return (
                    <div
                        key={index}
                        className={"fade-in w-full"}
                        style={{animationDelay: `${index * .2}s`}}
                    >
                        {child}
                    </div>
                )
            })}
        </>
    )
}