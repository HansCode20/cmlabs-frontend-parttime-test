export default function InputSearch({  onChange, placeholder }) {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4 outline-none "
            />
             <img
                src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
                alt="Search Icon"
                className="w-5 h-5 absolute right-3 top-1/2 -translate-y-4"
            />
        </div>
    );
};