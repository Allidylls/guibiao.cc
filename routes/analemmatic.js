module.exports = (app) => {
    app.get('/analemmatic', (req, res) => {
        res.locals.analemmatic_active = true;
        res.render('analemmatic.html');
    });
};
