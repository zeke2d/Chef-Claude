import Markdown from 'marked-react';

export default function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Zeee Chef Recommends:</h2>
            <Markdown>{props.recipe}</Markdown>
        </section>
    )
}