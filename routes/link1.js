module.exports = (app, partials) => {
    app.get('/link1', (req, res) => {
        res.locals.link_1_active = true;
        res.render('link1.html', {partials});
    });
};
