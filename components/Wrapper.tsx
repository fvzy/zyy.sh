const Wrapper = ({ children }) => {
    return (
    <div className="md:pt-8">
        <div className="max-w-[768px] mx-auto overflow-hidden">
            {children}
        </div>
    </div>
    );
}

export default Wrapper;