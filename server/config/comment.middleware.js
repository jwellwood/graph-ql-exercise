// Doesn't do anything right now

const commentMiddleware = (req, res, next) => {
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/comments') {
    commentMiddleware(req, res, next);
  } else {
    next();
  }
};
