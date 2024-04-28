import { CardButton, CartImage, CartCount } from "./ButtonHeader.style"

// Button que irá abrir a janela lateral, e mostrar quantidade de produtos no carrinho
export const ButtonHeader = ({ totalProducts, handleOpenCart }: any) => {

    return (
        <CardButton
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenCart}
        >
            <CartImage src='/cart.png' alt='cart image' />
            <CartCount>{totalProducts}</CartCount>
        </CardButton>
    )
}