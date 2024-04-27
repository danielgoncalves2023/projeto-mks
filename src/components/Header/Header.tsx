import { useSelector } from "react-redux";
import { CartBar } from "../CartBar/CartBar";
import { HeaderContainer } from "./Header.style";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TitleHeader } from "./TitleHeader/TitleHeader";
import { ButtonHeader } from "./ButtonHeader/ButtonHeader";

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
                <TitleHeader />
                <ButtonHeader handleOpenCart={handleOpenCart} totalProducts={totalProducts} />
            </HeaderContainer>

            <AnimatePresence>
                {cartBar && <CartBar closeCart={handleCloseCart} />}
            </AnimatePresence>
        </>
    )
}