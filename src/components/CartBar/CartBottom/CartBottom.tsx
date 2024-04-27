import { ButtonCheckout, ButtonCheckoutTitle, ContainerBottomDiv, TotalInfoDiv, TotalPriceTitle, TotalPriceValue } from "./CartBottom.style"

export const CartBottom = ({ roundedPrice, totalValue, checkout }: any) => {

    return (
        <ContainerBottomDiv>
            <TotalInfoDiv>
                <TotalPriceTitle>Total:</TotalPriceTitle>
                <TotalPriceValue>R${roundedPrice(totalValue)}</TotalPriceValue>
            </TotalInfoDiv>
            <ButtonCheckout onClick={checkout}>
                <ButtonCheckoutTitle>Finalizar Compra</ButtonCheckoutTitle>
            </ButtonCheckout>
        </ContainerBottomDiv>
    )
}