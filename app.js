const express = require('express');

var app = express();
app.use(require('body-parser').json());
app.use(require('compression')());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('hogan-express'));

app.locals.partials = {
    header: 'partials/header',
    footer: 'partials/footer'
};

require('./routes')(app);

app.listen(8000, () => {
    console.info('Listening port 8000');
});

