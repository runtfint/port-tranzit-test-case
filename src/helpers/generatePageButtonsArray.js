/**
 * Генерирует массив с диапазоном чисел (номеров страницдля отображения кнопок) в порядке возрастания.
 * Если `from` меньше `to`, вернется пустой массив.
 * 
 * @param {number} from - Начальное значение диапазона.
 * @param {number} to - Конечное значение диапазона.
 * @param {number} step - Шаг между значениями в массиве.
 * @returns {Array} - Массив страниц для пагинации.
 */
export function generatePageButtonsArray(from, to, step = 1) {
    if (from > to) {
        return [];
    }

    const direction = from < to ? 1 : -1;
    const distance = Math.abs(from - to) + 1;
    const arrayLength = Math.ceil(distance / step);

    const arr = Array(arrayLength);
    for (let index = 0; index < arr.length; index++) {
        arr[index] = from + index * step * direction;
    }
    return arr;
}