var UsuariosC = require('../controladores/usuariosController.js').usuarios

app.post('/Suma',function(request,response){
    var a = parseInt(request.body.a)
    var b = parseInt(request.body.b)
    var c = a+b

    response.json({Mensaje:'El resultado es' + ' = ' + c})

})

app.post('/Resta',function(request,response){
    var a = parseInt(request.body.a)
    var b = parseInt(request.body.b)
    var c = a-b

    response.json({Mensaje:'El resultado es' + ' = ' + c})

})

app.post('/Multiplicacion',function(request,response){
    var a = parseInt(request.body.a)
    var b = parseInt(request.body.b)
    var c = a*b

    response.json({Mensaje:'El resultado es' + ' = ' + c})

})

app.post('/Divicion',function(request,response){
    var a = parseInt(request.body.a)
    var b = parseInt(request.body.b)
    var c = a/b

    response.json({Mensaje:'El resultado es' + ' = ' + c})

})



