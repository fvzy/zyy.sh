const FrameWrapper = ({ children, className = "" }) => {
    return <div className={"mx-auto space-y-1 px-5 " + className}>
        { children }
    </div>
}

export default FrameWrapper;