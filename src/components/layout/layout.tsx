

export default function Layout({children}: any){
    return(
        <div className={'bg-black w-screen h-screen flex flex-col justify-center items-center p-4'}>
            {children}
        </div>
    )
}