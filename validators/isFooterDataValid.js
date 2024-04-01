const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // проверяем массив на наличие длины и соответствие типу "массив"
  const arrayLength = isArrayHasLength(data);

  if (!arrayLength)
    throw new Error("Переданные данные - не массив или длина = 0");

  // пробегаем по массиву, ищем null'ы и отсутствующие аттрибуты
  data.forEach((obj) => isObjectHasProps(obj, 
    ["headerOfFooter", "infoGpt3", "footerLinks", "companyLinks", "contactLinks", "TheEndText"]));

  const { footerLinks, companyLinks, contactLinks } = obj;

  const { headerOfFooter } = arrayLength;
  isObjectHasProps(headerOfFooter, ["header", "button"]);
  const { button } = arrayLength;
  isObjectHasProps(button, ["href", "text"]);

  const { infoGpt3 } = arrayLength;
  isObjectHasProps(infoGpt3, ["img", "text"]);
  const { img } = arrayLength;
  isObjectHasProps(img, ["src", "alt"]);

  isArrayHasLength(footerLinks);
  footerLinks.forEach((item) => {
    isObjectHasProps(item, ["href", "text"]);
  });

  isArrayHasLength(companyLinks);
  companyLinks.forEach((item) => {
    isObjectHasProps(item, ["href", "text"]);
  });

  isArrayHasLength(contactLinks);
  contactLinks.forEach((item) => {
    isObjectHasProps(item, ["href", "text"]);
  });

};

module.exports = isFooterDataValid;