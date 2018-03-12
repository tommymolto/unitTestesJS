cd tesUnitarios/
npm -g install qunit istanbul
npm init
npm --save install qunit istanbul
npm --save instal node-qunit
qunit -c app.js -t testes.js --cov

TP3:
Dada a funcao valida email
* Vamos otimiza-la, para que tenham metodos que só facam uma unica funcao
* Criemos testes unitarios para cada uma delas
* Criemos um teste unitario final para o metodo principal
