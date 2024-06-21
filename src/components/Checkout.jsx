import { useContext } from "react";
import Modal from "./ui/Modal";
import CardContext from "../store/CardContext";
import Input from "./ui/input";
import Button from "./ui/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout(){
    const cartCtx=useContext(CardContext);
    const userProgressCtx=useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
      );

      function handleClose(){
        userProgressCtx.hideCheckout();
      }
    //   function handleGotoCheckout(){
    //     userProgressCtx.showCheckout
    
    let customerData;
    //   }
    function handleSubmit(e){
        e.preventDefault();
        const fd=new FormData(e.target);
         customerData=Object.fromEntries(fd.entries());
        fetch('http://localhost:3000/orders',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                order:{
                    items:cartCtx.items,
                    customer:customerData
                }
            })
        })


    }
    if(customerData && !error){
        return <Modal open={userProgressCtx.progress==='checkout'} onClose={handleClose}>
            <h2>Success!</h2>
            <p>Your Order was Submitted successfully</p>
            <p>We will get back to you with more deatails via email with </p>
            <Button textOnly type="button" onClick={handleClose}>Close</Button>
        </Modal>
    }
    return <Modal open={userProgressCtx.progress==='checkout'}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount:{cartTotal}</p>
            <Input label="Full Name" type="text" id="name"/>
            <Input label="Email" type="email" id="email"/>
            <Input label="Street" type="text" id="street"/>
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city"/>
            </div>
            <p className="modal-actions">
               <Button textOnly type="button" onClick={handleClose}>Close</Button>
               <Button >Submit Order</Button>
            </p>
        </form>
    </Modal>
}