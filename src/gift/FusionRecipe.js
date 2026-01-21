import { Gift } from "./gift";

function FusionRecipe({ recipe, scale = 1, includeProduct = true }) {
    const fontStyle = { color: "#ECCDA3", fontSize: `${2.5 * scale}em` }
    const components = [];
    recipe.ingredients.forEach(ingredient => {
        if (components.length !== 0) components.push(<span style={fontStyle}>+</span>);
        if (ingredient instanceof Object) {
            const half = Math.ceil(ingredient.options.length / 2);
            components.push(<div style={{ ...fontStyle, display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
                {ingredient.count}x
                <div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {ingredient.options.slice(0, half).map((option, i) => <Gift key={i} id={option} scale={0.5 * scale} />)}
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {ingredient.options.slice(half).map((option, i) => <Gift key={i} id={option} scale={0.5 * scale} />)}
                    </div>
                </div>
            </div>)
        } else {
            components.push(<Gift id={ingredient} scale={scale} />);
        }
    });

    if (includeProduct) {
        components.unshift(<span style={fontStyle}>=</span>);
        components.unshift(<Gift id={recipe.id} scale={scale} />);
    }

    return <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>{components}</div>
}

export default FusionRecipe;