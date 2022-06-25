// TODO: Add dark theme text color variant
const DefText = ({ className, children }: { className?: string, children: string }) => {
    return (<p className={"inter-medium text-sub-light " + className}>
        { children }
    </p>)
}

export default DefText;