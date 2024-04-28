import * as actions from './cartActions';
import cartActionTypes from '../../types/cart/cartTypes';

describe('cart actions', () => {
    describe('addItemInCart', () => {
        it('deve criar uma action para add o item no carrinho', () => {
            const name = "Test Item";
            const photo = "test_photo.png";
            const price = "10.00";
            const expectedAction = {
                type: cartActionTypes.ADD_ITEM_IN_CART,
                payload: {
                    name,
                    photo,
                    price,
                    quantity: 1
                }
            };
            expect(actions.addItemInCart(name, photo, price)).toEqual(expectedAction);
        });
    });

    describe('removeItemInCart', () => {
        it('deve criar uma action para remover o item no carrinho', () => {
            const name = "Test Item";
            const expectedAction = {
                type: cartActionTypes.REMOVE_ITEM_OF_CART,
                payload: name
            };
            expect(actions.removeItemInCart(name)).toEqual(expectedAction);
        });
    });

    describe('sumItemOfCart', () => {
        it('deve criar uma action para somar 1 a quantidade do item no carrinho', () => {
            const name = "Test Item";
            const expectedAction = {
                type: cartActionTypes.SUM_QUANTITY_ITEM,
                payload: name
            };
            expect(actions.sumItemOfCart(name)).toEqual(expectedAction);
        });
    });

    describe('decItemOfCart', () => {
        it('deve criar uma action para subtrair 1 a quantidade do item no carrinho', () => {
            const name = "Test Item";
            const expectedAction = {
                type: cartActionTypes.DEC_QUANTITY_ITEM,
                payload: name
            };
            expect(actions.decItemOfCart(name)).toEqual(expectedAction);
        });
    });

    describe('checkoutCart', () => {
        it('deve criar uma action para dar checkout no carrinho', () => {
            const expectedAction = {
                type: cartActionTypes.CHECKOUT_CART
            };
            expect(actions.checkoutCart()).toEqual(expectedAction);
        });
    });
});
