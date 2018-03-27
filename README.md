cd unitTestesJS/ <br />
npm -g install qunit istanbul node-qunit<br />
npm init<br />
npm --save install qunit istanbul<br />
npm --save install node-qunit<br />
qunit -c app.js -t testes.js --cov<br />

TP3:
Dada a funcao valida email
* Vamos otimiza-la, para que tenham metodos que só facam uma unica funcao
* Criemos testes unitarios para cada uma delas
* Criemos um teste unitario final para o metodo principal
