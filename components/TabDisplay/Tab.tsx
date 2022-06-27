import React from "react";

const Tab = 
({ children, active = false, setActiveFunction }: 
{ children: string, active?: boolean, setActiveFunction: () => void }) => {
     
    const setSelfActive = (event: React.MouseEvent) => {
        event.preventDefault();
        setActiveFunction();
    }

    return(
    <div className={"inline-block flex-shrink-0 h-10 w-28 border-b-4 cursor-pointer " + (active ? 
        "mono-bold text-peach-light bg-peach-light bg-opacity-[0.15] border-b-peach-light" :
        "mono-bold text-sub-light hover:bg-peach-light hover:bg-opacity-5 border-b-off-white hover:border-b-peach-light hover:border-opacity-25" )}
        onClick={setSelfActive}
    >
        <div className="h-full w-full flex items-center justify-center pt-[3px]">
            {children}
        </div>
    </div>
    )
}

export default Tab;