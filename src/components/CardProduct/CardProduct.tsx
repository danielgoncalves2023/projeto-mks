import { useDispatch } from "react-redux"
import {
    CardButton, CardContainer, CardDetail, CardDetailContainer, CardImage, CardPrice, CardTitle, DivTitle
} from "./CardProduct.style";
import { addItemInCart } from "../../store/actions/cart/cartActions";

export const CardProduct = ({ product }: any) => {
    const roundedPrice = (price: number) => Math.round(price);
    const dispatch = useDispatch();

    return (
        <>
            <CardContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7 } }}
            >
                <CardImage src={product.photo} alt={product.brand} />
                <DivTitle>
                    <CardTitle>{product.name}</CardTitle>
                    <CardPrice>R${roundedPrice(product.price)}</CardPrice>
                </DivTitle>
                <CardDetailContainer>
                    <CardDetail>{product.description}</CardDetail>
                </CardDetailContainer>
                <CardButton
                    onClick={() => {
                        dispatch(addItemInCart(product.name, product.photo, product.price))
                    }
                    }>
                    <img src='/shopping-bag.png' alt='shopping bag' />
                    <p>COMPRAR</p>
                </CardButton>
            </CardContainer>
        </>
    )
}