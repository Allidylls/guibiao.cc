module.exports = (app) => {
    app.get('/link3', (req, res) => {
        res.locals.link3_active = true;
        res.render('link3.html');
    });
};
