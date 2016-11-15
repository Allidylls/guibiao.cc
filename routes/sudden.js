module.exports = (app, partials) => {
    app.get('/sudden', (req, res) => {
        res.locals.sudden_active = true;
        res.render('sudden.html', {partials});
    });
};
