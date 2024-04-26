import { useDispatch } from "react-redux"
import {
    CardButton, CardContainer, CardDetail, CardDetailContainer, CardImage, CardPrice, CardTitle, DivTitle
} from "./CardProduct.style";
import { addItemInCart } from "../../store/actions/cart/cartActions";

export const CardProduct = ({ name, price, detail, photo, brand }: any) => {
    const roundedPrice = (price: number) => Math.round(price);
    const dispatch = useDispatch();

    return (
        <>
            <CardContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7 } }}
            >
                <CardImage src={photo} alt={brand} />
                <DivTitle>
                    <CardTitle>{name}</CardTitle>
                    <CardPrice>R${roundedPrice(price)}</CardPrice>
                </DivTitle>
                <CardDetailContainer>
                    <CardDetail>{detail}</CardDetail>
                </CardDetailContainer>
                <CardButton
                    onClick={() => {
                        dispatch(addItemInCart(name, photo, price))
                    }
                    }>
                    <img src='/shopping-bag.png' alt='shopping bag' />
                    <p>COMPRAR</p>
                </CardButton>
            </CardContainer>
        </>
    )
}