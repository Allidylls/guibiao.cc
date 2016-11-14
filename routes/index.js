module.exports = (app, partials) => {
    require('./home')   (app, partials);
    require('./404')    (app, partials);
};
