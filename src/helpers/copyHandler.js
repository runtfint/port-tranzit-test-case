/**
 * Обработчик копирования текста в буфер обмена с использованием API Clipboard.
 *
 * @param {string} value - Значение, которое требуется скопировать в буфер обмена.
 * @returns {Promise<void>} - Промис, который разрешается после успешного копирования текста.
 */

const copyHandler = async (value) => {
    try {
        await navigator.clipboard.writeText(value);
        alert(`Скопировано: ${value}`);
    } catch (error) {
        console.error('Ошибка копирования:', error);
    }
};

export { copyHandler }