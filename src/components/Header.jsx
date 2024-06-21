import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './ui/Button'
import CardContext from '../store/CardContext'
import userProgressContext from '../store/UserProgressContext'
export default function Header(){
    const cartCtx=useContext(CardContext);
    const userProgressCtx=useContext(userProgressContext);
    const totalCartItems=cartCtx.items.reduce((totalNumberofItems,item)=>{
        return totalNumberofItems+item.quantity;
    },0);

    function handleshowCart(){
        userProgressCtx.showCart();
    }
    return <>
    <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="logo image" className='img'/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleshowCart}>Card({totalCartItems})</Button>
        </nav>
    </header>
    </>
}