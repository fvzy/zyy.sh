import { useEffect } from "react";

const TranslatingTabGroup = ({ tabsButActive, direction }: { tabsButActive: JSX.Element[], direction: string }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            document.getElementById("mobile-tab-wrapper").classList.remove("translate-x-32");
            document.getElementById("mobile-tab-wrapper").classList.remove("-translate-x-32");
        }, 0);
        return () => clearTimeout(timeout);
    })
    
    return(
    <div className="mask">
        {/* Math.random() to force element rerender. */}
        <div id="mobile-tab-wrapper" key={Math.random()} className={"flex space-x-4 !-mx-52 transition-transform duration-300 " + (direction === "" ? "" : (direction === "left" ? "-translate-x-32" : "translate-x-32"))}>
            { tabsButActive[0] }
            { tabsButActive[1] }
            { tabsButActive[2] }
            { tabsButActive[3] }
            { tabsButActive[4] }
        </div>
    </div>);
}

export default TranslatingTabGroup;