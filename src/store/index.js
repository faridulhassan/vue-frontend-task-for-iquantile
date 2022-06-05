import { createStore } from "vuex";

import userStore from "./user.module";
import productStore from "./product.module";

const store = createStore({
    modules: {
        userStore,
        productStore
    }
});

export default store;
