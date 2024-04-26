import { useDispatch, useSelector } from "react-redux";
import cartActionTypes from "../../store/types/cart/cartTypes";
import { useMediaQuery } from "react-responsive";
import {
    CartContainer, ContainerTop, CartTitle, CloseCart, CartContent, CardProductDiv,
    CardProductImage, CardProductTitle, CartProductDivMobile, CardProductCountContainer,
    CardProductCountTitle, CardProductCountDiv, CardProductCountDec, CardProductCount,
    CardProductCountSum, CardProductPrice, RemoveProduct, ContainerBottom, TotalInfoDiv,
    TotalPriceTitle, TotalPriceValue, ButtonCheckout, ButtonCheckoutTitle
} from "./CartShopping.style";
import { AnimatePresence } from "framer-motion";
import { checkoutCart, decItemOfCart, removeItemInCart, sumItemOfCart } from "../../store/actions/cart/cartActions";

export const CartShopping = ({ closeCart }: any) => {
    const { products, totalValue } = useSelector((rootReducer: any) => rootReducer.cartReducer);
    const responsiveMode = useMediaQuery({
        query: '(max-device-width: 520px)'
    });

    const dispatch = useDispatch();
    const roundedPrice = (price: number) => Math.round(price);
    const increaseQuantity = (name: string) => dispatch(sumItemOfCart(name));
    const decreaseQuantity = (name: string) => dispatch(decItemOfCart(name));
    const checkout = () => {
        if(products < 1){
            alert('Você não possui produtos no seu carrinho.')
            closeCart()
        } else {
            alert('Compra finalizada. Obrigado(a) pela preferência!')
            dispatch(checkoutCart())
            closeCart()
        }
    };
    const handleRemoveProduct = (name: string) => {
        dispatch(removeItemInCart(name));
    };

    return (
        <>
            <CartContainer
                key="cart-container"
                initial={{ x: "100%" }}
                animate={{
                    x: "0%", transition: {
                        delay: 0.5,
                        duration: 0.5,
                        type: 'tween',
                        ease: 'easeInOut'
                    }
                }}
                exit={{
                    x: "100%", transition: {
                        delay: 0.5,
                        duration: 0.5,
                        type: 'tween',
                        ease: 'easeInOut'
                    }
                }}
            >
                <ContainerTop>
                    <CartTitle>Carrinho de Compras</CartTitle>
                    <CloseCart
                        onClick={closeCart}
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 0.9 }}
                    >X</CloseCart>
                </ContainerTop>
                <CartContent
                >
                    <AnimatePresence>
                        {products.map((product: any, index: number) => (
                            <div key={index}>
                                <CardProductDiv
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1, transition: {
                                        duration: 0.5
                                    }}}
                                    exit={{ opacity: 0, transition: {
                                        duration: 0.3
                                    }}}
                                >
                                    <CardProductImage src={product.photo} />
                                    <CardProductTitle>{product.name}</CardProductTitle>
                                    {
                                        responsiveMode ?
                                            (
                                                <CartProductDivMobile>
                                                    <CardProductCountContainer>
                                                        <CardProductCountTitle>Qtd:</CardProductCountTitle>
                                                        <CardProductCountDiv>
                                                            <CardProductCountDec onClick={() => decreaseQuantity(product.name)}>-</CardProductCountDec>
                                                            <CardProductCount>{product.quantity}</CardProductCount>
                                                            <CardProductCountSum onClick={() => increaseQuantity(product.name)}>+</CardProductCountSum>
                                                        </CardProductCountDiv>
                                                    </CardProductCountContainer>
                                                    <CardProductPrice>R${roundedPrice(product.totalPrice)}</CardProductPrice>
                                                </CartProductDivMobile>
                                            ) :
                                            (
                                                <>
                                                    <CardProductCountContainer>
                                                        <CardProductCountTitle>Qtd:</CardProductCountTitle>
                                                        <CardProductCountDiv>
                                                            <CardProductCountDec onClick={() => decreaseQuantity(product.name)}>-</CardProductCountDec>
                                                            <CardProductCount>{product.quantity}</CardProductCount>
                                                            <CardProductCountSum onClick={() => increaseQuantity(product.name)}>+</CardProductCountSum>
                                                        </CardProductCountDiv>
                                                    </CardProductCountContainer>
                                                    <CardProductPrice>R${roundedPrice(product.totalPrice)}</CardProductPrice>
                                                </>
                                            )
                                    }
                                </CardProductDiv>
                                <RemoveProduct
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {
                                            transition: 0.3
                                        }
                                    }}
                                    whileHover={{ scale: 0.95 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleRemoveProduct(product.name)}
                                >X</RemoveProduct>
                            </div>
                        ))}
                    </AnimatePresence>
                </CartContent>
                <ContainerBottom>
                    <TotalInfoDiv>
                        <TotalPriceTitle>Total:</TotalPriceTitle>
                        <TotalPriceValue>R${roundedPrice(totalValue)}</TotalPriceValue>
                    </TotalInfoDiv>
                    <ButtonCheckout onClick={checkout}>
                        <ButtonCheckoutTitle>Finalizar Compra</ButtonCheckoutTitle>
                    </ButtonCheckout>
                </ContainerBottom>
            </CartContainer>
        </>
    );
};
