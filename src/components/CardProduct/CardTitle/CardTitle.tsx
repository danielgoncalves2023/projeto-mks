import { CardImage, DivTitle, CardTitle as Title, CardPrice } from "./CardTitle.style"

// Parte superior da Card do produto
export const CardTitle = ({ roundedPrice, product }: any) => {

    return (
        <>
            <CardImage src={product.photo} alt={product.brand} />
            <DivTitle>
                <Title>{product.name}</Title>
                <CardPrice>R${roundedPrice(product.price)}</CardPrice>
            </DivTitle>
        </>
    )
}