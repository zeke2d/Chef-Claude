import Markdown from 'marked-react';
import ChefSanjiCooking from '../assets/chef-sanji-cooking.gif';

export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Zeee Chef Recommends:</h2>
            <Markdown>{props.recipe}</Markdown>
            <div className="gif-quote-container">
                <img src={ChefSanjiCooking} id="chef-sanji-cooking" alt="Chef Sanji cooking GIF." />
                <q id="chef-sanji-quote">Every cook has a duty to make sure each little ingredient is used with love</q>
            </div>
        </section>
    )
}