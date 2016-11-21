$(function() {

// enable search in site
$('#gb-navigation input').keypress((e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        var txt = e.target.value;
        txt && window.open('https://www.baidu.com/s?&wd=' + txt + '%20site:nohexboot.website');
    }
});

});
