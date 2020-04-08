# CypressTest
Тесты с использованием Cypress

Запуск выполняется через команду:

.\node_modules\.bin\cypress open (эквивалент npx cypree open)

или

.\node_modules\.bin\cypress run --reporter mochawesome --browser chrome (запуск в автономном режиме)

Необходимые расширения для Visual Studio Code:
1) ext install msjsdiag.debugger-for-chrome - присоединение отладчика к браузеру 
2) Open Cypress - запуск одного теста с cypress.

Для отладки нужно:
1) Запустить cypress командой npm run cypr ("cypr" - команда в файле package.json вида: "cross-env CYPRESS_REMOTE_DEBUGGING_PORT=9222 npx cypress open")
2) Запустить Visual Studio в режиме - присоединение к chrome
3) Запустить нужный тест.
Остановка будет только на debugger;