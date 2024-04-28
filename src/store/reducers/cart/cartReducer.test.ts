import cartReducer from './cartReducer';
import { addItemInCart, checkoutCart, decItemOfCart, removeItemInCart, sumItemOfCart } from '../../actions/cart/cartActions';

describe('cartReducer', () => {

    it('deve retornar o state inicial', () => {
        expect(cartReducer(undefined, {})).toEqual({
            products: [],
            totalProducts: 0,
            totalValue: 0
        });
    });

    it('deve adicionar um produto ao carrinho, atualizando também os estados totalProducts e totalValue no redux', () => {
        const initialState = {
            products: [],
            totalProducts: 0,
            totalValue: 0
        };

        const action = addItemInCart("Produto Teste", "url_da_imagem", "10");
        const newState = cartReducer(initialState, action);

        expect(newState.products.length).toBe(1);
        expect(newState.totalProducts).toBe(1);
        expect(newState.totalValue).toBe(10);
    });
});

    it('deve remover o produto do carrinho, atualizando também os estados totalProducts e totalValue no redux', () => {
        const initialState = {
            products: [
                {
                    name: 'Produto Teste',
                    photo: 'url_da_imagem',
                    quantity: 1,
                    price: 10,
                    totalPrice: 10
                }
            ],
            totalProducts: 1,
            totalValue: 10
        };

        const action = removeItemInCart("Produto Teste");
        const newState = cartReducer(initialState, action);

        expect(newState.products.length).toBe(0);
        expect(newState.totalProducts).toBe(0);
        expect(newState.totalValue).toBe(0);
    });

    it('deve acrescentar uma quantidade ao produto do carrinho, atualizando também os estados totalProducts e totalValue no redux', () => {
        const initialState = {
            products: [
                {
                    name: 'Produto Teste',
                    photo: 'url_da_imagem',
                    quantity: 1,
                    price: 10,
                    totalPrice: 10
                }
            ],
            totalProducts: 1,
            totalValue: 10
        };

        const action = sumItemOfCart("Produto Teste");
        const newState = cartReducer(initialState, action);

        expect(newState.products[0].quantity).toBe(2);
        expect(newState.totalProducts).toBe(2);
        expect(newState.totalValue).toBe(20);
    });

    it('deve reduzir uma quantidade ao produto do carrinho, atualizando também os estados totalProducts e totalValue no redux', () => {
        const initialState = {
            products: [
                {
                    name: 'Produto Teste',
                    photo: 'url_da_imagem',
                    quantity: 2,
                    price: 10,
                    totalPrice: 20
                }
            ],
            totalProducts: 2,
            totalValue: 20
        };

        const action = decItemOfCart("Produto Teste");
        const newState = cartReducer(initialState, action);

        expect(newState.products[0].quantity).toBe(1);
        expect(newState.totalProducts).toBe(1);
        expect(newState.totalValue).toBe(10);
    });

    it('deve limpar o carrinho, retornando um state vazio', () => {
        const initialState = {
            products: [
                {
                    name: 'Produto Teste',
                    photo: 'url_da_imagem',
                    quantity: 2,
                    price: 10,
                    totalPrice: 20
                }
            ],
            totalProducts: 2,
            totalValue: 20
        };

        const action = checkoutCart();
        const newState = cartReducer(initialState, action);

        expect(newState).toEqual({
            products: [],
            totalProducts: 0,
            totalValue: 0
        });
    });