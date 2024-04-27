import { CardDetailContainer, CardDetail as CardDescription } from "./CardDetail.style"

export const CardDetail = ({product}: any) => {

    return (
        <CardDetailContainer>
            <CardDescription>
                {product.description}
            </CardDescription>
        </CardDetailContainer>
    )
}