module.exports = (app, partials) => {
    app.get('/analemmatic', (req, res) => {
        res.locals.analemmatic_active = true;
        res.render('analemmatic.html', {partials});
    });
};
