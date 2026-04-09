import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getDetailMeal } from "../utils/meal_api";
import Breadcrumb from "../components/Molecules/Breadcrumb";

export default function MealDetail() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDetailMeal(id).then((res) => {
            if (res.meals) {
                setData(res.meals[0] || {})
                setLoading(false);
            } else {
                setData({});
                setLoading(false); 
            };
        });
    }, [id]);

    const instructions = data.strInstructions ? data.strInstructions.split('\r\n') : [];

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = data[`strIngredient${i}`];
        const measure = data[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    };
    
    if (loading) {
        return <div className="flex justify-center text-center min-h-screen items-center">Loading...</div>;
    };

   return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-8">

                <Breadcrumb
                    items={[
                        { name: "Home", link: "/" },
                        { name: "Ingredients" },
                        { name: `${data.strCategory}`, link: `/ingredients/${data.strCategory}` },
                        { name: data.strMeal, link: `/meal/${id}` },
                    ]}
                />

                {/* Title */}
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl font-extrabold">
                        {data.strMeal}
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm md:text-base italic">
                        {data.strArea} Culinary • {data.strCategory}
                    </p>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={data.strMealThumb}
                        alt={data.strMeal}
                        className="w-full max-w-md rounded-xl shadow-lg object-cover transition duration-300 hover:scale-105"
                    />
                </div>

                {/* Ingredients */}
                <div className="bg-gray-100 p-5 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold mb-4">
                        Ingredients
                    </h3>
                    <ul className="list-disc list-outside space-y-1 text-sm md:text-base text-gray-700 p-4">
                        {ingredients.map((item, index) => (
                            <li key={index} className="leading-relaxed">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Instructions */}
                <div className="bg-gray-100 p-5 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold mb-4">
                        Instructions
                    </h3>
                    <ol className="list-outside space-y-2 text-sm md:text-base text-gray-700">
                        {instructions.map((step, index) => (
                            <li key={index} className="leading-relaxed">
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Video */}
                <div>
                    <p className="text-center text-lg md:text-xl font-bold mb-4">
                        Video Tutorial
                    </p>
                    <iframe
                        className="w-full aspect-video rounded-xl shadow-lg"
                        src={`https://www.youtube.com/embed/${
                            data.strYoutube
                                ? data.strYoutube.split("v=")[1]
                                : ""
                        }`}
                        title={data.strMeal}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );

};