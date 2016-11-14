module.exports = (app, partials) => {
    app.get(['/', '/index.html', '/home.html'] , (req, res) => {
        res.render('home.html', {partials});
    });
};
