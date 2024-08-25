import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails';
import {createBrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "/recipe/:recipeId",
    element: <RecipeDetails />
  },
]);

function App() {

  return (
    <>
     <RecipeList />
     <AddRecipeForm />
     <FavoritesList />
     <RecommendationsList />
    </>
  )
}

export default App
