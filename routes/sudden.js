module.exports = (app) => {
    app.get('/sudden', (req, res) => {
        res.locals.sudden_active = true;
        res.render('sudden.html');
    });
};
