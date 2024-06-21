import { useContext } from "react"
import { currencyFormatter } from "../util/formatting"
import Button from "./ui/Button"
import CardContext from "../store/CardContext";
export default function MealsItem({meal}){
   const cartCtx= useContext(CardContext);
   function handleAddToCart(){
    cartCtx.addItem(meal);
   }
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt="meals image" />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddToCart}>Add to Cart</Button>
            </p>
        </article>
    </li>

}