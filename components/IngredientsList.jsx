import ChefSanjiSticker from "../images/chef-sanji-sticker.png";

export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleBounce() {
        const sticker = document.getElementById("chef-sanji-sticker");
        if (sticker) {
            sticker.classList.add("bounce");
            setTimeout(() => sticker.classList.remove("bounce"), 3000);
        }
    }

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={() => { props.getRecipe(); handleBounce(); }}>Get a recipe!</button>
                <img src={ChefSanjiSticker} id="chef-sanji-sticker" alt="A sticker of Chef Sanji."/>
            </div>}
        </section>
    )
}