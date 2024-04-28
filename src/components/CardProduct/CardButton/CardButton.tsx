import { CardButton as Button } from "./CardButton.style"
import { addItemInCart } from "../../../store/actions/cart/cartActions";

// Parte inferior da Card do produto onde será renderizado botão de "COMPRAR"
export const CardButton = ({dispatch, product}: any) => {

    return (
        <Button
            onClick={() => {
                dispatch(addItemInCart(product.name, product.photo, product.price))
            }
            }>
            <img src='/shopping-bag.png' alt='shopping bag' />
            <p>COMPRAR</p>
        </Button>
    )
}