import React from "react";

const Tab = 
({ children, active = false, setActiveFunction }: 
{ children: string, active?: boolean, setActiveFunction: () => void }) => {
     
    const setSelfActive = (event: React.MouseEvent) => {
        event.preventDefault();
        setActiveFunction();
    }

    return(
    <div className="inline-block flex-shrink-0 h-10 w-28 cursor-pointer" onClick={setSelfActive}>
        <div className={"rounded-md h-full w-full pt-[2px] flex items-center justify-center font-mono text-sm transition-all duration-300 border-off-white dark:border-off-black border " + 
        (active ? `text-quiet-light dark:text-quiet-dark font-semibold !border-opacity-100`
        : `text-quiet-light dark:text-quiet-dark font-medium !border-opacity-0` )}>
            {children}
        </div>
    </div>
    )
}

export default Tab;