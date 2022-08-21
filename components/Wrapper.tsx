const Wrapper = ({ children }) => {
    return (
    <div className="lg:pt-8">
        <div className="max-w-[700px] mx-auto overflow-hidden lg:rounded-2xl">
            {children}
        </div>
    </div>
    );
}

export default Wrapper;