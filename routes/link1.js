module.exports = (app) => {
    app.get('/link1', (req, res) => {
        res.locals.link1_active = true;
        res.render('link1.html');
    });
};
