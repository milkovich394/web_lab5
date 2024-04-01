const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {  
    // проверяем массив на наличие длины и соответствие типу "массив"
    const arrayLength = isArrayHasLength(data);
    
    if (!arrayLength)
      throw new Error("Переданные данные - не массив или длина = 0");
  
    // пробегаем по массиву, ищем null'ы и отсутствующие аттрибуты
    data.forEach((obj) => isObjectHasProps(obj, ["header", "posts"]));
  
    const { posts } = arrayLength;
  
    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(posts, ["isMain", "img", "post"]);
  
    const { img } = arrayLength;
  
    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(img, ["src", "alt"]);

    const { post } = arrayLength;
  
    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(post, ["date", "header", "link"]);

    const { link } = arrayLength;
  
    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(link, ["href", "lable"]);
  };
  
  module.exports = isBlogDataValid;