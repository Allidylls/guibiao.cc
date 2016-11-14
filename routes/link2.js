module.exports = (app, partials) => {
    app.get('/link2', (req, res) => {
        res.locals.link_2_active = true;
        res.render('link2.html', {partials});
    });
};
