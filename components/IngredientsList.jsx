import ChefSanjiSticker from "../assets/chef-sanji-sticker.png";
import SanjiThemeSong from "../assets/sanji-theme-song.mp3";

export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient} className="ingredient-item">
            <button 
                className="delete-ingredient-button" 
                onClick={() => props.deleteIngredient(ingredient)}
                aria-label={`Delete ${ingredient}`}
            >✕</button>
            {ingredient}
        </li>
    ))

    function handleBounce() {
        const sticker = document.getElementById("chef-sanji-sticker");
        if (sticker) {
            sticker.classList.add("bounce");
            setTimeout(() => sticker.classList.remove("bounce"), 3000);
        }
    }

    function playThemeSong() {
        const audio = new Audio(SanjiThemeSong); // create a new Audio object
        audio.play(); 
    }

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length >= 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={() => { 
                    props.getRecipe(); 
                    handleBounce(); 
                    playThemeSong(); 
                }}>
                    Get a recipe!
                </button>
                <img src={ChefSanjiSticker} id="chef-sanji-sticker" alt="A sticker of Chef Sanji."/>
            </div>}
        </section>
    )
}