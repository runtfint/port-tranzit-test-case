export const UtilsModule = {
    namespaced: true,

    state() {
        return {
            dataShowVariant: localStorage.getItem('data_show_variant') || 'table',
            nationalities: []
        }
    },

    mutations: {
        setDataShowVariant(state, newVariant) {
            state.dataShowVariant = newVariant;
            localStorage.setItem('data_show_variant', newVariant);
        },
        setNationalities(state, newNationalities) {
            state.nationalities = newNationalities
        }
    },

    getters: {
        getDataShowVariant(state) {
            return state.dataShowVariant
        },
        getNationalities(state) {
            return state.nationalities
        }
    },

    actions: {
        
    }
}