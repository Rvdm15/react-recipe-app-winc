import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  if (selectedRecipe) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return (
      <RecipePage
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
      />
    );
  }
  return <RecipeListPage onSelectRecipe={setSelectedRecipe} />;
};
