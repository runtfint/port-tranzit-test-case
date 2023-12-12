import { UsersAPI } from "../../api/UsersAPI/";

export const UsersModule = {
    namespaced: true,

    state() {
        return {

        }
    },

    actions: {
        onGetUsers() {
            return new Promise((resolve, reject) => {
                UsersAPI.getUsers()
                    .then((res) => {
                        resolve(res)
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        },
    }
}