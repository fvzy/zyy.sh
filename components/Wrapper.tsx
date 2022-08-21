const Wrapper = ({ children }) => {
    return (
    <div className="md:pt-8">
        <div className="max-w-[600px] mx-auto overflow-hidden md:rounded-2xl">
            {children}
        </div>
    </div>
    );
}

export default Wrapper;