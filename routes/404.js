module.exports = (app, partials) => {
    app.get('/:slug', (req, res) => {
        res.status(404).render('404.html', {partials});
    });
};
