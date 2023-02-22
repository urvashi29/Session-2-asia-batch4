import React from "react";
import data from "./data";

const App = () => {
  console.log(data.recipes);

  const recipeList = data.recipes.map((recipe) => {
    return (
      <React.Fragment key={recipe.idCategory}>
        <img src={recipe.strCategoryThumb} />
        <p>{recipe.strCategory}</p>
        <p>{recipe.strCategoryDescription.slice(0, 10)}</p>
      </React.Fragment>
    );
  });

  return <div>{recipeList}</div>;
};

export default App;
