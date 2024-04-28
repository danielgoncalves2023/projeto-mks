import { ContainerTopDiv, CartTitle, CloseCart } from "./CartHeader.style"

export const CartHeader = ({ closeCart }: any) => {

    // Header/cabeçalho do menu do carrinho
    return (
        <ContainerTopDiv>
            <CartTitle>Carrinho de Compras</CartTitle>
            <CloseCart
                onClick={closeCart}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
            >X</CloseCart>
        </ContainerTopDiv>
    )
}
