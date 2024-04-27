import {
    CardProductCount, CardProductCountContainer, CardProductCountDec, CardProductCountDiv,
    CardProductCountSum, CardProductCountTitle, CardProductDiv, CardProductImage, CardProductPrice,
    CardProductTitle, CartContentDiv, CartProductDivMobile
} from "./CartContent.style"

export const CartProductMobile = ({
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

export const CartProduct = ({
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

export const CardProduct = ({
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
                            <CartProductMobile
                                roundedPrice={roundedPrice} actionsCart={actionsCart} product={product}
                            />
                        ) :
                        (
                            <CartProduct
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