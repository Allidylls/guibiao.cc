module.exports = (app) => {
    app.get('/link4', (req, res) => {
        res.locals.link4_active = true;
        res.render('link4.html');
    });
};
