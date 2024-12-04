import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar"; // Import SearchBar component
import "./App.css";

// Sample recipes array
const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with rich meat sauce.",
    image: "https://example.com/spaghetti-bolognese.jpg",
  },
  {
    id: 2,
    title: "Chicken Curry",
    description: "A spicy and flavorful curry with tender chicken.",
    image: "https://example.com/chicken-curry.jpg",
  },
  {
    id: 3,
    title: "Vegetable Stir-Fry",
    description: "A healthy stir-fry with colorful vegetables.",
    image: "https://example.com/vegetable-stir-fry.jpg",
  },
  {
    id: 4,
    title: "Grilled Cheese Sandwich",
    description: "A simple and delicious grilled cheese sandwich.",
    image: "https://example.com/grilled-cheese.jpg",
  },
  {
    id: 5,
    title: "Caesar Salad",
    description: "A fresh salad with crisp lettuce, parmesan, and croutons.",
    image: "https://example.com/caesar-salad.jpg",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* Pass props to SearchBar */}
      <RecipeList recipes={filteredRecipes} /> {/* Pass filtered recipes to RecipeList */}
    </div>
  );
}

export default App;
