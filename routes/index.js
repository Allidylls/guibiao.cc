module.exports = (app) => {
    require('./home')(app);
    require('./guibiao')(app);
    require('./analemmatic')(app);
    require('./sudden')(app);
    require('./about')(app);
    require('./404')(app);
};
