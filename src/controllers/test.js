function test(req, res) {
  return res.status(200).json({msg: "Aqui estoy esperando"});
}
module.exports = test;
