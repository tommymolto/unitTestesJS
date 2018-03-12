var x = require("./app.js");
let teste = new x();
QUnit.test("NomeUser", (validador) =>{
    validador.ok(teste.validaEmail("ii.ii@gmail.com") == true , "ii.ii@gmail.com valido");
    validador.notOk(teste.validaEmail("ni") == false, "ni nao valido ");
     validador.ok(teste.validaEmail("oi@globo.com") == true , "oi@globo.com VALIDO");
    validador.notOk(teste.validaEmail("oi@g.c") == false, "oi@g nao valido");
    }
)
QUnit.test("Dominio", (validador) =>{
    validador.ok(teste.validaEmail("oi@globo.com") == true , "oi@globo.com VALIDO");
    validador.notOk(teste.validaEmail("oi@g") == false, "oi@g nao valido");
    }
)