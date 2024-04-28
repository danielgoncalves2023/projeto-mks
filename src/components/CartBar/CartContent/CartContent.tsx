import {
    CardProductCount, CardProductCountContainer, CardProductCountDec, CardProductCountDiv,
    CardProductCountSum, CardProductCountTitle, CardProductDiv, CardProductImage, CardProductPrice,
    CardProductTitle, CartContentDiv, CartProductDivMobile
} from "./CartContent.style"

// Layout da visualização do produto no carrinho
export const CardProduct = ({
    roundedPrice, actionsCart, product
}: any) => {

    return (
        <>
            <CardProductCountContainer>
                <CardProductCountTitle>Qtd:</CardProductCountTitle>
                <CardProductCountDiv>
                    <CardProductCountDec onClick={() => actionsCart.decreaseQuantity(product.name)}>-</CardProductCountDec>
                    <CardProductCount>{product.quantity}</CardProductCount>
                    <CardProductCountSum onClick={() => actionsCart.increaseQuantity(product.name)}>+</CardProductCountSum>
                </CardProductCountDiv>
            </CardProductCountContainer>
            <CardProductPrice>R${roundedPrice(product.totalPrice)}</CardProductPrice>
        </>
    )
}

// Layout da visualização do produto no carrinho para mobiles até 520px de width
export const CardProductMobile = ({
    roundedPrice, actionsCart, product
}: any) => {

    return (
        <CartProductDivMobile>
            <CardProductCountContainer>
                <CardProductCountTitle>Qtd:</CardProductCountTitle>
                <CardProductCountDiv>
                    <CardProductCountDec onClick={() => actionsCart.decreaseQuantity(product.name)}>-</CardProductCountDec>
                    <CardProductCount>{product.quantity}</CardProductCount>
                    <CardProductCountSum onClick={() => actionsCart.increaseQuantity(product.name)}>+</CardProductCountSum>
                </CardProductCountDiv>
            </CardProductCountContainer>
            <CardProductPrice>R${roundedPrice(product.totalPrice)}</CardProductPrice>
        </CartProductDivMobile>
    )
}

// Div do produto no carrinho que será visualizado ao abrir janela lateral
export const CartProduct = ({
    responsiveMode, product,
    roundedPrice, actionsCart
}: any) => {

    return (
        <>
            <CardProductDiv
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1, transition: {
                        duration: 0.5
                    }
                }}
                exit={{
                    opacity: 0, transition: {
                        duration: 0.3
                    }
                }}
            >
                <CardProductImage src={product.photo} />
                <CardProductTitle>{product.name}</CardProductTitle>
                {
                    responsiveMode ?
                        (
                            <CardProductMobile
                                roundedPrice={roundedPrice} actionsCart={actionsCart} product={product}
                            />
                        ) :
                        (
                            <CardProduct
                                roundedPrice={roundedPrice} actionsCart={actionsCart} product={product}
                            />
                        )
                }
            </CardProductDiv>
        </>
    )
}

export const CartContentContainer = ({ children }: any) => {

    return (
        <>
            <CartContentDiv>
                {children}
            </CartContentDiv>
        </>
    )
}