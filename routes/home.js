module.exports = (app) => {
    app.get(['/', '/index.html', '/home.html'] , (req, res) => {
        res.render('home.html');
    });
};
