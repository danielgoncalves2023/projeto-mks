import cartActionTypes from "../../types/cart/cartTypes"

export function addItemInCart(name: string, photo: string, price: string): {
    type: string
    payload: {
        name: string,
        photo: string,
        price: string,
        quantity: number
    }
} {
    return {
        type: cartActionTypes.ADD_ITEM_IN_CART,
        payload: {
            name: name,
            photo: photo,
            price: price,
            quantity: 1
        }
    }
}

export function removeItemInCart(name: string): {
    type: string
    payload: string
} {
    return {
        type: cartActionTypes.REMOVE_ITEM_OF_CART,
        payload: name
    }
}

export function sumItemOfCart(name: string): {
    type: string
    payload: string
} {
    return {
        type: cartActionTypes.SUM_QUANTITY_ITEM,
        payload: name
    }
}

export function decItemOfCart(name: string): {
    type: string
    payload: string
} {
    return {
        type: cartActionTypes.DEC_QUANTITY_ITEM,
        payload: name
    }
}

export function checkoutCart(): {
    type: string
} {
    return {
        type: cartActionTypes.CHECKOUT_CART,
    }
}