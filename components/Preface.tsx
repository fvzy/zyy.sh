const Preface = ({ className, children }: { className: string, children: string }) => {
    return (
    <h1 className={"mono-bold text-ms pl-0.5 lg:text-base leading-none " + className}>
        { children }
    </h1>)
}

export default Preface;