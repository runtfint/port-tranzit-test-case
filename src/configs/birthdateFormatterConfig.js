// Конфигурации для форматирования дат 


// Формат: День недели, mm/dd/yyyy, hh:mm am
const birthdateFormatterConfig = new Intl.DateTimeFormat('en', {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
})

export { birthdateFormatterConfig }