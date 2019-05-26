var express = require ('express');

var app = new express();

app.get('/',function (req,res) {

    console.log('req.query',req.query);

    var formula = req.query;

    console.log(formula.key);

    var result = eval(formula.key);

    console.log(result);

    console.log(formula.key+'='+result);

    res.end(formula.key+'='+result);
});

app.listen(3000);