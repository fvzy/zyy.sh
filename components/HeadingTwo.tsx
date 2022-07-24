const HeadingTwo = ({ className = "", children }: { className?: string, children: string }) => {
    return(<h2 className={"inter-bold sm:inter-extrabold text-main-light dark:text-main-dark text-[28px] md:text-3xl lg:text-4xl leading-tight pb-2 pt-0.5 " + className}>
        { children }
    </h2>)
}

export default HeadingTwo;