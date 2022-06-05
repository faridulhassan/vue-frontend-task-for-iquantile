import { nanoid } from "nanoid";
const store = {
    namespaced: true,
    state() {
        return {
            user: {}
        };
    },
    actions: {
        addUser({ commit }, user, isLoggedIn) {
            const _user = isLoggedIn ? user : { ...user, id: nanoid() };
            localStorage.setItem("user", JSON.stringify(_user));
            commit("addUser", _user);
        },
        removeUser({ commit }) {
            localStorage.removeItem("user");
            commit("addUser", {});
        }
    },
    mutations: {
        addUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        isLoggedIn(state) {
            return !!state.user.id;
        },
        userId(state) {
            return state.user.id;
        }
    }
};

export default store;
