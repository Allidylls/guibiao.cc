module.exports = (app) => {
    require('./home')(app);
    require('./link1')(app);
    require('./link2')(app);
    require('./link3')(app);
    require('./link4')(app);
    require('./about')(app);
    require('./404')(app);
};
