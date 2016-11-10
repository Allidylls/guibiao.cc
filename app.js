const express = require('express');

var app = express();
app.use(require('body-parser').json());
app.use(require('compression')());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('hogan-express'));

var partials = {
    header: 'partials/header',
    footer: 'partials/footer'
};

require('./routes')(app, partials);

app.listion(80, () => {
    console.info('Listening port %s', app.get('port'));
});

