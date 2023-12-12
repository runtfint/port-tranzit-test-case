export const AuthModule = {
    namespaced: true,

    state() {
        return {
            userPermission: localStorage.getItem('user_permission') || null
        }
    },

    mutations: {
        setUserPermission(state, permission) {
            state.userPermission = permission;
            localStorage.setItem('user_permission', permission);
        },
    },

    getters: {
        getUserPermission(state) {
            return state.userPermission
        },
    },

    actions: {
        
    }
}