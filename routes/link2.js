module.exports = (app) => {
    app.get('/link2', (req, res) => {
        res.locals.link2_active = true;
        res.render('link2.html');
    });
};
