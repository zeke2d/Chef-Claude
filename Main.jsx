import React from "react"
import IngredientsList from "./components/IngredientsList"
import AIRecipe from "./components/AIRecipe"
import { getRecipeFromLlama } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromLlama(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function deleteIngredient(ingredientToDelete) {
        setIngredients(prevIngredients => 
            prevIngredients.filter(ingredient => ingredient !== ingredientToDelete)
        )
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="add at least three ingredients"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    deleteIngredient={deleteIngredient}
                />
            }

            {recipe && <AIRecipe recipe={recipe} />}
        </main>
    )
}