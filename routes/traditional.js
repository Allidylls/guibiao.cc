module.exports = (app, partials) => {
    app.get('/traditional', (req, res) => {
        res.locals.traditional_active = true;
        res.render('traditional.html', {partials});
    });
};
