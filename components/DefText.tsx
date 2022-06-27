// TODO: Add dark theme text color variant
const DefText = ({ className = "", children }: { className?: string, children: string }) => {
    return (<p className={"inter-medium text-sub-light text-ms " + className}>
        { children }
    </p>)
}

export default DefText; 