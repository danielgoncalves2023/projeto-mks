import { useDispatch } from "react-redux"
import { CardContainer } from "./CardProduct.style";
import { CardTitle } from "./CardTitle/CardTitle";
import { CardDetail } from "./CardDetail/CardDetail";
import { CardButton } from "./CardButton/CardButton";

export const CardProduct = ({ product }: any) => {
    const roundedPrice = (price: number) => Math.round(price);
    const dispatch = useDispatch();

    return (
        <>
            <CardContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7 } }}
            >
                <CardTitle roundedPrice={roundedPrice} product={product} />
                <CardDetail product={product} />
                <CardButton dispatch={dispatch} product={product} />
            </CardContainer>
        </>
    )
}