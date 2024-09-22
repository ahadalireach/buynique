module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(req, res, next).catch(next);
};
