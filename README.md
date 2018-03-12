cd tesUnitarios/
npm -g install qunit istanbul
npm init
npm --save install qunit istanbul
qunit -c app.js -t testes.js --cov
git add --all .
git commit -a -m "inicio"
git remote add origin https://github.com/tommymolto/unitTestesJS
dit push
vi README.md
history 
