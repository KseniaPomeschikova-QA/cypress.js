describe('Автотесты для формы логина и пароля', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); //нажали кнопку
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик
    })
   it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').click(); //нажали Забыли пароль
        cy.get('#forgotForm > .header').should('be.visible'); //видим надпись
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //совпадение текста
        cy.get('#mailForgot').type('german2@dolnikov.ru'); //ввели логин
        cy.get('#restoreEmailButton').click(); //нажали кнопку
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик
    })
   it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
        cy.get('#pass').type('iLoveqastudio3'); //ввели неверный пароль
        cy.get('#loginButton').click(); //нажали кнопку
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик
    })
   it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('germaааааааn@dolnikov.ru'); //ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); //нажали кнопку
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик
    })
  it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); //нажали кнопку
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //совпадение текста
    })
   it('Приведение к строчным буквам в логине', function () { //тест должен упасть
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); //нажали кнопку
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик
    })




})
