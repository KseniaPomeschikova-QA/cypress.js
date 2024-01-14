describe('Автотест для Покемонов', function () {
   it('Тест на покупку нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/'); //зашли на сайт
        cy.get(':nth-child(1) > .auth__input').type('Pomechshikova1995@yandex.ru'); //ввели логин
        cy.get('#password').type('07071997SG'); //ввели пароль
        cy.get('.auth__button').click(); //нажали Войти
        cy.get('.header__btns > [href="/shop"]').click(); //Нажали Магазин
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); //выбор всех элементов <li> без класса feature-empty, вибираем кнопку Купить по определенному индексу в массиве элементов и нажимаем
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); //ввели номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1226'); //ввели срок карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //ввели код карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Pomeschikova Ksenia'); //ввели имя владельца
        cy.get('.pay-btn').click(); //нажали Оплатить
        cy.get('#cardnumber').type('56456'); //ввели код из смс
        cy.get('.payment__submit-button').click(); //нажали Отправить
        cy.get('.payment__font-for-success').should('be.visible'); //текст виден
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //совпадение текста
    })
   })
