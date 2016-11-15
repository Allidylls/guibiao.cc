module.exports = (app, partials) => {
    app.get('/guibiao', (req, res) => {
        res.locals.guibiao_active = true;
        res.render('guibiao.html', {partials});
    });
};
