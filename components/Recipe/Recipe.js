import React, { useState, useEffect } from "react";
import { BrowserRouter, useRouteMatch, useParams, Route, Link } from "react-router-dom";
import './Recipe.scss';



function Recipe() {
  let { picture, title, ingredients, link } = useParams();
  return (
    <div>
      <p>Recipe: {title}</p>
      <p>Ingredients: {ingredients}</p>
      <br></br>
      {picture}
    </div>
  )
}

export default Recipe;