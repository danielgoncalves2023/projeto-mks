import cartActionTypes from '../../types/cart/cartTypes';

export interface IProduct {
    name: string,
    photo: string,
    quantity: number,
    price: number,
    totalPrice: number
}

export interface ICart {
    products: IProduct[],
    totalProducts: number,
    totalValue: number
}

const INITIAL_STATE: ICart = {
    products: [],
    totalProducts: 0,
    totalValue: 0
}

// Função para arredondar o preço do produto
const roundedPrice = (price: number) => Math.round(price);

const cartReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        // Adiciona produto do grid ao carrinho
        case cartActionTypes.ADD_ITEM_IN_CART: {
            // Verifica se o produto já existe no carrinho, retornando-o se for existente, ou retornando 'undefined' se não existir.
            const existingProduct = state.products.find((product) => product.name === action.payload.name);
            // Tratativas se o produto já existir no carrinho (para acrescentar 1 à quantidade, não duplicando o item no carrinho):
            if (existingProduct) {
                // Irá fazer um loop nos produtos do carrinho, e irá fazer as tratativas quando encontrar o mesmo produto da action
                const updatedProducts = state.products.map((product) => {
                    if (product.name === action.payload.name) {
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                            totalPrice: roundedPrice((product.quantity + 1) * product.price),
                        };
                    }
                    return product;
                });
                // Irá atualizar o valor total do produto, com base na quantidade e preço do produto em carrinho
                const totalPriceOfExistingProducts = updatedProducts.reduce((total: number, product) => total + product.totalPrice, 0);
                return {
                    ...state,
                    products: updatedProducts,
                    totalProducts: state.totalProducts + 1,
                    totalValue: roundedPrice(totalPriceOfExistingProducts)
                };
                // SE o produto não existir no carrinho, irá o adicionar com quantidade 1
            } else {
                const newProduct: IProduct = {
                    name: action.payload.name,
                    photo: action.payload.photo,
                    quantity: 1,
                    price: roundedPrice(action.payload.price),
                    totalPrice: roundedPrice(action.payload.price)
                };
                return {
                    ...state,
                    products: [...state.products, newProduct],
                    totalProducts: state.totalProducts + 1,
                    totalValue: state.totalValue + newProduct.totalPrice
                };
            }
        }
        // Remove produto do carrinho de compras
        case cartActionTypes.REMOVE_ITEM_OF_CART: {
            // Irá validar se o produto existe no carrinho de compras, para evitar erros indesejados.
            const removedProduct = state.products.find((product) => product.name === action.payload);
            if (!removedProduct) {
                return state;
            }
            // Essa constante irá criar um novo array de produtos, excluindo o produto da action e atualizando o carrinho de compras
            const updatedProducts = state.products.filter((product) => product.name !== action.payload);
            return {
                ...state,
                products: updatedProducts,
                totalProducts: state.totalProducts - removedProduct.quantity >= 0 ? state.totalProducts - removedProduct.quantity : 0,
                totalValue: roundedPrice(state.totalValue - removedProduct.totalPrice)
            };
        }
        // Acrescenta uma unidade ao produto no carrinho
        case cartActionTypes.SUM_QUANTITY_ITEM: {
            // Irá fazer um loop para encontrar no carrinho o produto da action e acrescentar uma unidade do produto no carrinho
            const updatedProducts = state.products.map((product: IProduct) => {
                if (product.name === action.payload) {
                    const newQuantity = product.quantity + 1;
                    const newTotalPrice = newQuantity * roundedPrice(product.price);
                    return {
                        ...product,
                        quantity: newQuantity,
                        totalPrice: newTotalPrice
                    };
                }
                return product;
            });
            // Irá atualizar o valor total do produto, com base na quantidade e preço do produto em carrinho
            const totalPriceOfUpdatedProducts = updatedProducts.reduce((total, product) => total + roundedPrice(product.totalPrice), 0);
            return {
                ...state,
                products: updatedProducts,
                totalProducts: state.totalProducts + 1,
                totalValue: roundedPrice(totalPriceOfUpdatedProducts)
            };
        }
        // Diminui uma unidade ao produto no carrinho
        case cartActionTypes.DEC_QUANTITY_ITEM: {
            // Irá fazer um loop para encontrar no carrinho o produto da action e diminuir uma unidade do produto no carrinho
            const updatedProducts = state.products.map((product: IProduct) => {
                if (product.name === action.payload && product.quantity > 1) {
                    const newQuantity = product.quantity - 1;
                    const newTotalPrice = newQuantity * roundedPrice(product.price);
                    return {
                        ...product,
                        quantity: newQuantity,
                        totalPrice: newTotalPrice
                    };
                }
                return product;
            });
            // Irá atualizar o valor total do produto, com base na quantidade e preço do produto em carrinho
            const totalPriceOfUpdatedProducts = updatedProducts.reduce((total, product) => total + roundedPrice(product.totalPrice), 0);
            return {
                ...state,
                products: updatedProducts,
                totalProducts: state.totalProducts > 0 ? state.totalProducts - 1 : 0,
                totalValue: roundedPrice(totalPriceOfUpdatedProducts)
            };
        }
        // Finaliza o carrinho de compras, removendo todos os itens
        case cartActionTypes.CHECKOUT_CART: {
            // Irá limpar o carrinho de compras, retornando ao state inicial vazio
            return {
                ...state = INITIAL_STATE
            };
        }
        default:
            return state;
    }
};

export default cartReducer;