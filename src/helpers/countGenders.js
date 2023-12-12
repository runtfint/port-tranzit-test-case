/**
 * Функция для подсчета количества пользователей каждого пола и определения преобладающего пола.
 *
 * @param {Array} users - Массив пользователей для обработки.
 * @returns {Promise<Object>} - Промис, который разрешается объектом с количеством каждого пола и преобладающим полом.
 */

const countGenders = async (users) => {

    /**
     * При возврате объект gendersCount имеет такие поля:
     * @property {number} male - Количество мужчин.
     * @property {number} female - Количество женщин.
     * @property {number} unknown - Количество пользователей с неопределенным полом.
     * @property {string} isMore - Преобладающий пол ('Мужчин', 'Женщин', 'Неопределившихся').
     */


    const gendersCount = {
        male: 0,
        female: 0,
        unknown: 0,
    }
    let isMore = 'unknown'

    for (const user of users) {
        const gender = user.gender || 'unknown';
        gendersCount[gender]++;
    }

    if(gendersCount.male === gendersCount.female) {
        gendersCount['isMore'] = 'Одинаково'
        return gendersCount
    }

    const genders = Object.keys(gendersCount);
    let maxCount = 0;
    
    for (const gender of genders) {
        if (gendersCount[gender] > maxCount) {
            isMore = gender;
            maxCount = gendersCount[gender];
        }
    }
    
    if(isMore === 'male') {
        gendersCount['isMore'] = 'Мужчин'
    }
    else if (isMore === 'female') {
        gendersCount['isMore'] = 'Женщин'
    }
    else {
        gendersCount['isMore'] = 'Неопределившихся'
    }

    return gendersCount

}

export { countGenders }
