const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getIngredients = async () => {
    try {
        const response = await fetch(`${BASE_URL}/list.php?i=list`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching ingredients:', error);
    }
};

export const getMealsByIngredients = async (name) => {
    try {
        const response = await fetch(`${BASE_URL}/filter.php?i=${name}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching ingredients:', error);
    }
    
};

export const getDetailMeal = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching ingredients:', error);
    }
    
};


