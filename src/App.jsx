import { Routes, Route, BrowserRouter} from "react-router";

//Pages 
import Ingredients from "./pages/Ingredients";
import IngridientsDetail from "./pages/IngridientsDetail";
import MealDetail from "./pages/MealDetail";

//Layout
import MainLayout from "./layout/MainLayout";

function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Ingredients/>}/>
          <Route path="/ingredients/:name" element={<IngridientsDetail/>}/>
          <Route path="/meal/:id" element={<MealDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default app;
