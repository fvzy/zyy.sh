import React from "react";

const Tab = 
({ children, active = false, setActiveFunction }: 
{ children: string, active?: boolean, setActiveFunction: () => void }) => {
     
    const setSelfActive = (event: React.MouseEvent) => {
        event.preventDefault();
        setActiveFunction();
    }

    return(
    <div className={"inline-block flex-shrink-0 h-10 w-28 md:w-32 border-b-4 cursor-pointer transition-all " + (active ? 
        `mono-bold text-peach-light dark:text-peach-dark bg-peach-light dark:bg-peach-dark !bg-opacity-[0.15] border-b-peach-light dark:border-b-peach-dark` :
        `mono-bold text-sub-light dark:text-sub-dark hover:text-peach-light dark:hover:text-peach-dark
        hover:bg-peach-light dark:hover:bg-peach-dark hover:!bg-opacity-5 
        border-b-off-white dark:border-b-off-black hover:border-b-peach-light dark:hover:border-b-peach-dark hover:!border-opacity-25` )}
        onClick={setSelfActive}
    >
        <div className="h-full w-full flex items-center justify-center pt-[3px]">
            {children}
        </div>
    </div>
    )
}

export default Tab;