import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { getMealsByIngredients } from "../utils/meal_api";
import InputSearch from "../components/Atoms/InputSearch";
import List from "../components/Organisms/List";
import Button from "../components/Atoms/ButtonLoadMore";
import Breadcrumb from "../components/Molecules/Breadcrumb";

export default function IngridientsDetail() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(13);
    const [search, setSearch] = useState("");
    const [loadingMore, setLoadingMore] = useState(false);


    useEffect(() => {
        getMealsByIngredients(name).then((res) => {
            if (res.meals) {
                setData(res.meals || [])
                setLoading(false);
            } else {
                setData([]);
                setLoading(false); 
            };
        });
    }, [name]);

    const filteredData = search
         ? data.filter((item) => item.strMeal.toLowerCase().includes(search.toLowerCase()))
         : data;

    const handleLoadMore = () => {
        setLoadingMore(true);
        setTimeout(() => {
            setVisible((prev) => prev + 10);
            setLoadingMore(false);
        }, 800);
    };

    if (loading) {
        return <div className="flex justify-center text-center min-h-screen items-center">Loading...</div>;
    };

    return (
        <div className="flex flex-col items-center gap-20 mt-20 font-bold">

            <InputSearch
                placeholder="Search Meals..."
                onChange={setSearch}
            />

            <Breadcrumb
                items={[
                    { name: "Home", link: "/" },
                    { name: "Ingredients" },
                    { name: name, link: `/ingredients/${name}` },
                ]}
            />

            <p className="md:text-2xl text-lg">{name} Meal</p>

            {filteredData.length === 0 ? (
                <p>No meals found.</p>
            ) : (
                <List
                    data={filteredData.slice(0, visible)}
                        type="meal"
                        onClick={(id) => navigate(`/meal/${id}`)}
                />
            )}

            {visible < filteredData.length && (
                <div className="flex justify-center mt-6">
                    <Button onClick={handleLoadMore} disabled={loadingMore}>
                        {loadingMore ? "Loading..." : "Load More"}
                    </Button>
                </div>
            )}
            </div>
    );
};