import { useState, useEffect } from "react";
import { getIngredients } from "../utils/meal_api";
import List from "../components/Organisms/List";
import Button from "../components/Atoms/ButtonLoadMore";
import InputSearch from "../components/Atoms/InputSearch";
import { useNavigate } from "react-router";

export default function Ingredients() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(13);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        getIngredients().then((res) => {
        if (res.meals) {
            setData(res.meals || [])
            setLoading(false);
        } else {
            setData([]);
            setLoading(false); 
        };
        });
    }, []);

    const filteredData = search
         ? data.filter((item) => item.strIngredient.toLowerCase().includes(search.toLowerCase()))
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
        <div className="flex flex-col items-center gap-20 font-bold p-4">
            <div className="text-center mt-20 space-y-4">
                <h2>mealapp API Website</h2>
                <h3 className="text-4xl">See All The Delicious Food</h3>
            </div>

            <InputSearch
                placeholder="Search Ingredients..."
                onChange={setSearch}
            />
                
       
            {filteredData.length === 0 ? (
                <p>No ingredients found.</p>
            ) : (
                <List
                    data={filteredData.slice(0, visible)}
                        type="ingredient"
                        onClick={(name) => navigate(`/ingredients/${name}`)}
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