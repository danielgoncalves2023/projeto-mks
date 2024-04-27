import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { CartBarContainer } from "./CartBar.style";
import { AnimatePresence } from "framer-motion";
import * as actions from "../../store/actions/cart/cartActions";
import { CartHeader } from "./CartHeader/CartHeader";
import { CartBottom } from "./CartBottom/CartBottom";
import { CartContentContainer, CardProduct } from "./CartContent/CartContent";
import { RemoveProduct } from "./CartBar.style";

export const CartBar = ({ closeCart }: any): any => {
    const { products, totalValue } = useSelector((rootReducer: any) => rootReducer.cartReducer);
    const responsiveMode = useMediaQuery({
        query: '(max-device-width: 520px)'
    });

    const dispatch = useDispatch();
    const roundedPrice = (price: number) => Math.round(price);

    const actionsCart = {
        increaseQuantity: (name: string) => dispatch(actions.sumItemOfCart(name)),
        decreaseQuantity: (name: string) => dispatch(actions.decItemOfCart(name)),
        checkout: () => {
            if (products < 1) {
                alert('Você não possui produtos no seu carrinho.')
                closeCart()
            } else {
                alert('Compra finalizada. Obrigado(a) pela preferência!')
                dispatch(actions.checkoutCart())
                closeCart()
            }
        },
        handleRemoveProduct: (name: string) => {
            dispatch(actions.removeItemInCart(name));
        }
    }

    return (
        <>
            <CartBarContainer
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
                <CartHeader closeCart={closeCart} />
                <CartContentContainer>
                    <AnimatePresence>
                        {products.map((product: any, index: number) => (
                            <div key={index}>
                                <CardProduct
                                    responsiveMode={responsiveMode} product={product}
                                    roundedPrice={roundedPrice} actionsCart={actionsCart}
                                />
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
                                    onClick={() => actionsCart.handleRemoveProduct(product.name)}
                                >X</RemoveProduct>
                            </div>
                        ))}
                    </AnimatePresence>
                </CartContentContainer>
                <CartBottom roundedPrice={roundedPrice} totalValue={totalValue} checkout={actionsCart.checkout} />
            </CartBarContainer >
        </>
    );
}