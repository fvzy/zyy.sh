const HeadingTwo = ({ className = "", children }: { className?: string, children: string }) => {
    return(<h2 className={"work-bold text-main-light text-4xl " + className}>
        { children }
    </h2>)
}

export default HeadingTwo;