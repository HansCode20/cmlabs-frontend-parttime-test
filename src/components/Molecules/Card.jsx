export default function Card({ title, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full mx-auto p-3 border-2 border-gray-200 rounded cursor-pointer hover:scale-105  transition-transform duration-300 mb-2 z-0"
    >
      <img 
        src={image} 
        className="w-40 md:w-full  md:h-40 mb-2 bg-gray-100 rounded object-center object-cover" 
      />
      <div className="h-fit bg-blue-100 p-2 rounded">
        <p className="text-center md:text-sm text-xs text-wrap font-semibold">
          {title}
        </p>
      </div>
    </div>
  );
}