const Question = require("../models/question");
async function handleAddQuestion(req, res) {
  try {
    const { questionText, options, correctOption, image } = req.body;
    const question = await Question.create({
      questionText,
      options,
      correctOption,
      image,
    });
    return res.status(200).json(question);
  } catch (e) {
    return res.status(404).json({ error: e });
  }
}
module.exports = {
  handleAddQuestion,
};
