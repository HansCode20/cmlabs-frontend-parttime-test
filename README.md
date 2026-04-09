# MealApp - React JS

Aplikasi web sederhana untuk mencari bahan makanan (ingredients), daftar makanan (meals), dan detail resep menggunakan API dari TheMealDB.

---

## itur Utama

### Halaman Ingredients
- Menampilkan daftar semua bahan makanan
- Fitur pencarian berdasarkan nama ingredient
- Fitur Load More (pagination sederhana)
- Klik ingredient → menuju halaman detail

---

### Halaman Ingredient Detail
- Menampilkan daftar makanan berdasarkan ingredient yang dipilih
- Fitur pencarian makanan (meal)
- Fitur Load More
- Klik makanan → menuju halaman detail meal

---

### Halaman Meal Detail (Opsional ⭐)
- Menampilkan detail makanan:
  - Gambar makanan
  - Nama makanan
  - Instruksi / cara memasak
  - Daftar bahan
  - Video YouTube (embed)

---

## API yang Digunakan

- List Ingredients :
  - http://www.themealdb.com/api/json/v1/1/list.php?i=list
- Ingridients Detail :
  - http://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient-name}
- Meal Detail :
  - http://www.themealdb.com/api/json/v1/1/lookup.php?i={meal-id}

## Teknologi yang Digunakan

- React JS (Vite)
- React Router DOM
- Tailwind CSS
- Fetch API


---

## Cara Menjalankan Project

```bash
# clone repository
git clone https://github.com/username/mealapp.git

# masuk ke folder project
cd mealapp

# install dependencies
npm install

# jalankan project
npm run dev