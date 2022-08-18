// TODO: Rewrite
const DefText = ({ className = "", children }: { className?: string, children: string }) => {
    return (<p className={"inter-medium text-sub-light dark:text-sub-dark " + className}>
        { children }
    </p>)
}

export default DefText; 