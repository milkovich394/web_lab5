const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isRegistrationDataValid = (data) => {
  // проверяем массив на наличие длины и соответствие типу "массив"
  const arrayLength = isArrayHasLength(data);

  if (!arrayLength)
    throw new Error("Переданные данные - не массив или длина = 0");

  // пробегаем по массиву, ищем null'ы и отсутствующие аттрибуты
  data.forEach((obj) => isObjectHasProps(obj, ["title", "header", "button"]));
  const { button } = arrayLength;
  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["href", "text"]);

};

module.exports = isRegistrationDataValid;