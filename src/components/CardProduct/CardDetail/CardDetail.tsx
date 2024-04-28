import { CardDetailContainer, CardDetail as CardDescription } from "./CardDetail.style"

// Parte da descrição do produto na card
export const CardDetail = ({product}: any) => {

    return (
        <CardDetailContainer>
            <CardDescription>
                {product.description}
            </CardDescription>
        </CardDetailContainer>
    )
}