import _ from 'lodash'

/**
 * Кастомный хук для сортировки и фильтрации массива пользователей.
 *
 * @param {Array} users - Массив пользователей для обработки.
 * @param {string} sort - Критерий сортировки ('az' для сортировки по возрастанию, 'za' для сортировки по убыванию, '' - изначальный массив).
 * @param {Object} filter - Объект со значеними фильтров.
 * @param {string} [filter.name] - Имя пользователя для фильтрации.
 * @param {string} [filter.gender] - Пол пользователя для фильтрации.
 * @param {string} [filter.nationality] - Национальность пользователя для фильтрации.
 * @returns {Promise<Array>} - Промис, который разрешается отсортированным и отфильтрованным массивом пользователей.
 */

const useUsers = async (users, sort, filter) => {
    let sortedUsers = structuredClone(users)

    switch (sort) {
        case 'az':
            sortedUsers = _.sortBy(sortedUsers, ['name.first', 'name.last'])
            break;
        case 'za':
            sortedUsers = _.reverse(_.sortBy(sortedUsers, ['name.first', 'name.last']))
            break;
    }

    if(filter.name) {
        sortedUsers = sortedUsers.filter(user => `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase().includes(filter.name.toLowerCase()))
    }
    if(filter.gender) {
        sortedUsers = sortedUsers.filter(user => user.gender === filter.gender)
    }
    if(filter.nationality) {
        sortedUsers = sortedUsers.filter(user => user.nat === filter.nationality)
    }

    return sortedUsers
}

export { useUsers }