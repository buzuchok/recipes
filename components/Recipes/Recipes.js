import React, { useState, useEffect } from "react";
import apiFacade from "../../services/apiFacade";
import { BrowserRouter, useRouteMatch, useParams, Route, Link } from "react-router-dom";
import SearchForm from '../SearchForm';
import Recipe from '../Recipe';
import './Recipes.scss';

const AllRecipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  let match = useRouteMatch();
  const handleChange = e => {
    setSearchTerm(e.target.value);
    console.log(recipes)
  };
  useEffect(() => {
    apiFacade.getRecipes().then(data => {
      setRecipes(data.results)
      console.log("check data", data.results)
    });
  }, [searchTerm]);

  return (
    <>
    <section className="section section-recipes">
      <h1>Recipes</h1>
      
      <SearchForm value={searchTerm} onChange={handleChange} />
      
      <div className="recipe-list">
        <div className="item">
          <div className="item-img">{<img src="" alt="img"/>}</div>
          <div className="item-r">
            <div className="item-c">
              <div className="item-title">Recipe Title</div>
              <div className="item-info">
                <div className="portions">
                  <i className="icon icon-portion"></i>
                  <span>4 portions</span>
                </div>
                <div className="time">
                  <i className="icon icon-time"></i>
                  <span>1 h 30 m</span>
                </div>
              </div>
            </div>
            <div className="item-links">
              <Link className="btn btn-green btn-sm btn-block" to="">Details</Link>
              <Link className="btn btn-grey btn-sm btn-block" to="">Link</Link>
            </div>
          </div>
          
        </div>
      {recipes
        .filter(recipe => {
          return (
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
          )
        }
        )
        .map((data, index) => (
          
          <div className="item" key={index}>
            <div className="item-img">{<img src={data.thumbnail} />}</div>
            <div className="item-r">
              <div className="item-c">
              <div className="item-title">{data.title}</div>
                <div className="item-info">
                  <div className="portions">
                    <i className="icon icon-portion"></i>
                    <span>4 portions</span>
                  </div>
                  <div className="time">
                    <i className="icon icon-time"></i>
                    <span>1 h 30 m</span>
                  </div>
                </div>
              </div>
              <div className="item-links">
                <Link className="btn btn-green btn-sm btn-block" to={`${match.url}/${data.title}/${data.ingredients}/${data.href}`}>
                  Details
                </Link>
                <Link className="btn btn-grey btn-sm btn-block" to={data.href}>Link</Link>
              </div>
            </div>
            
          </div>
        ))}
      </div>
       
      {/* <Route path={`${match.path}/:title/:ingredients`}>
        <Recipe></Recipe>
      </Route> */}
    </section>
    </>
  );
}

// function Recipe() {
//   let { picture, title, ingredients, link } = useParams();
//   return (
//     <div>
//       <p>Recipe: {title}</p>
//       <p>Ingredients: {ingredients}</p>
//       <br></br>
//       {picture}
//     </div>
//   )
// }

export default AllRecipes;