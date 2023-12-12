import axios from "axios"

// Инициализация конфигурации Axios для запросов к серверу
const publicConfig = {
    headers: { 'Content-Type': 'application/json' },
}

// Создание инстанции на основе конфигурации
const apiInstance = axios.create(publicConfig);

export { apiInstance }
