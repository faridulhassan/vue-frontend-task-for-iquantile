import { nanoid } from "nanoid";
const store = {
    namespaced: true,
    state() {
        return {
            products: []
        };
    },
    actions: {
        addProduct({ commit, state: { products } }, product) {
            const _products = JSON.parse(localStorage.getItem("products")) || [...products];
            const _product = { ...product, id: nanoid() };
            _products.push(_product);
            localStorage.setItem("products", JSON.stringify(_products));
            commit("addProduct", _product);
        },
        loadProducts({ commit }, products) {
            localStorage.setItem("products", JSON.stringify(products));
            commit("loadProducts", products);
        },
        removeProducts({ commit }) {
            localStorage.removeItem("products");
            commit("loadProducts", []);
        }
    },
    mutations: {
        addProduct(state, product) {
            state.products.push(product);
        },
        loadProducts(state, products) {
            state.products = products;
        }
    }
};

export default store;
