import store from '../store'

/**
 * Функция для подсчета количества пользователей с различными национальностями
 * Происходит сохранение массива со всеми найденными национальностями в хранилище Vuex (используется для фильтров)
 *
 * @param {Array} users - Массив пользователей для обработки.
 * @returns {Promise<Object>} - Промис, который разрешается объектом, содержащим количество пользователей для каждой национальности.
 */

const countNationalities = async (users) => {
    const nationalitiesCounts = {};

    for (const user of users) {
      const nationality = user.nat;
      nationalitiesCounts[nationality] = (nationalitiesCounts[nationality] || 0) + 1;
    }

    const allNationalities = [{value:'', name: 'Все'}]
    for (const key in nationalitiesCounts) {
      allNationalities.push({ value: key, name: key })
    }

    store.commit('UtilsModule/setNationalities', allNationalities)
    
    return nationalitiesCounts;
}

export { countNationalities }