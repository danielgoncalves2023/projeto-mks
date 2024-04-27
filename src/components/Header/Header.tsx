import { useSelector } from "react-redux";
import { CartBar } from "../CartBar/CartBar";
import { HeaderContainer, TitleDiv, MksTitle, SistemasTitle, CardButton, CartImage, CartCount } from "./Header.style";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export const Header = () => {
    const { totalProducts } = useSelector((rootReducer: any) => rootReducer.cartReducer)
    const [cartBar, setCarBar] = useState<boolean>(false);

    const handleCloseCart = () => {
        setCarBar(false)
    };

    const handleOpenCart = () => {
        setCarBar(true)
    };

    return (
        <>
            <HeaderContainer>
                <TitleDiv>
                    <MksTitle>MKS</MksTitle>
                    <SistemasTitle>Sistemas</SistemasTitle>
                </TitleDiv>
                <CardButton
                    whileHover={{ scale: 0.97 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOpenCart}
                >
                    <CartImage src='/cart.png' alt='cart image' />
                    <CartCount>{totalProducts}</CartCount>
                </CardButton>
            </HeaderContainer>
            <AnimatePresence>
                {cartBar && <CartBar closeCart={handleCloseCart} />}
            </AnimatePresence>
        </>
    )
}