import { useState } from "react";
import Navbar from "./Component/Navbar";
import NewsBord from "./Component/NewsBord";
import NewsItem from "./Component/NewsItem";

const App = () => {
  const [category, setCategory] = useState("sports");
  return (
    <div>
      <Navbar setcategory={setCategory} />
      <NewsBord category={category} />
    </div>
  );
};

export default App;
