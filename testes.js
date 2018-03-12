var objeto = require("./app.js");
let teste = new objeto();

QUnit.test("TamanhoUsuario", (validador) =>{
    validador.ok(teste.tamanhoUsuario("ii.ii") == true , "ii.ii@gmail.com valido");
    validador.notOk(teste.tamanhoUsuario("ni") == false, "ni nao valido ");
     validador.ok(teste.tamanhoUsuario("oi@globo.com") == true , "oi@globo.com VALIDO");
    validador.notOk(teste.tamanhoUsuario("oi@g.c") == false, "oi@g nao valido");
    }
)
QUnit.test("ValidaEmail", (validador) =>{
    validador.ok(teste.validaEmail("ii.ii@gmail.com") == true , "ii.ii@gmail.com valido");
    validador.notOk(teste.validaEmail("ni") == false, "ni nao valido ");
     validador.ok(teste.validaEmail("oi@globo.com") == true , "oi@globo.com VALIDO");
    validador.notOk(teste.validaEmail("oi@g.c") == false, "oi@g nao valido");
    }
)
QUnit.test("TamanhoDominio", (validador) =>{
    validador.ok(teste.tamanhoDominio("globo.com") == true , "oi@globo.com VALIDO");
    validador.notOk(teste.tamanhoDominio("g") == false, "oi@g nao valido");
    }
)