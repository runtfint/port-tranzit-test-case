import { apiInstance } from "../http-requests"

// GET запрос к серверу по url для получения массива пользователей

export const UsersAPI = {
    getUsers() {
        const url = 'https://randomuser.me/api/?results=200'
        return apiInstance.get(url)
    },
}