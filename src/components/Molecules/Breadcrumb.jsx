export default function Breadcrumb({ items }) {
    return (
        <nav className="flex justify-start text-sm mb-4">
            <ul className="flex flex-wrap space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="flex  items-center">
                        <a href={item.link} className="text-gray-600 hover:text-gray-800">
                            {item.name}
                        </a>
                        {index < items.length - 1 && (
                            <span className="mx-2 text-gray-400">/</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};