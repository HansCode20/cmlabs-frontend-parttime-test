import Card from "../Molecules/Card";

export default function List({ data, type, onClick }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.map((item) => (
        <Card
          key={type === "ingredient" ? item.idIngredient : item.idMeal}
          title={
            type === "ingredient"
              ? item.strIngredient
              : item.strMeal
          }
          image={type === "meal" ? item.strMealThumb : `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png`}
          onClick={() =>
            onClick(
              type === "ingredient"
                ? item.strIngredient
                : item.idMeal
            )
          }
        />
      ))}
    </div>
  );
}