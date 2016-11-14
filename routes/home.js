module.exports = (app, partials) => {
    app.get('/', (req, res) => {
        res.render('index.html', {partials});
    });
};
