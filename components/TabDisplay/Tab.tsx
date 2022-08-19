import React from "react";

const Tab = 
({ children, active = false, setActiveFunction }: 
{ children: string, active?: boolean, setActiveFunction: () => void }) => {
     
    const setSelfActive = (event: React.MouseEvent) => {
        event.preventDefault();
        setActiveFunction();
    }

    return(
    <div className="inline-block flex-shrink-0 h-10 w-28 cursor-pointer transition-all" onClick={setSelfActive}>
        <div className={"rounded-md h-full w-full pt-[2px] flex items-center justify-center font-mono text-sm " + 
        (active ? `border-off-white border-[1.5px] text-quiet-light dark:text-sub-dark font-semibold`
        : `text-quiet-light dark:text-quiet-dark font-medium` )}>
            {children}
        </div>
    </div>
    )
}

export default Tab;