import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/ui/Cart";
import { CartContextProvider } from "./store/CardContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
function App() {
  return (
    <>
    <UserProgressContextProvider> <CartContextProvider>
      <Header/>
      <Meals/>
      <Cart/>
      <Checkout/>
      
      </CartContextProvider></UserProgressContextProvider>

  </>
  );
}

export default App;
