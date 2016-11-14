module.exports = (app, partials) => {
    require('./home')   (app, partials);
    require('./link1')  (app, partials);
    require('./link2')  (app, partials);
    require('./404')    (app, partials);
};
