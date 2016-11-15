module.exports = (app, partials) => {
    require('./home')           (app, partials);
    require('./guibiao')        (app, partials);
    require('./analemmatic')    (app, partials);
    require('./traditional')    (app, partials);
    require('./sudden')         (app, partials);
    require('./about')          (app, partials);
    require('./404')            (app, partials);
};
