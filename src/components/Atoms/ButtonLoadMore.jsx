export default function Button({ children, onClick }) {
    return (
        <button
            className="px-4 py-2 border-2 border-gray-200  text-black rounded-lg hover:bg-black hover:text-white
                       transition-colors mb-10 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
            onClick={onClick}
        >
            {children}
        </button>
    );
}