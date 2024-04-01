const isExceedDataValid = require("../validators/isExceedDataValid");

const {
  getExceedDataModel,
  postExceedDataModel,
} = require("../model/files/exceedDataModel");

const getExceedData = (req, res, next) => {
  try {
    const data = getExceedDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postExceedData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isExceedDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postExceedDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getExceedData, postExceedData };