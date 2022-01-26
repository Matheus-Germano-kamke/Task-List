module.exports = async function (app) {
    app.use(require("./users.routes"));
    app.use(require("./posts.routes"));
  };
  