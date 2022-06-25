const Preface = ({ className, children }: { className: string, children: string }) => {
    return (
    <h1 className={"mono-bold " + className}>
        { children }
    </h1>)
}

export default Preface;