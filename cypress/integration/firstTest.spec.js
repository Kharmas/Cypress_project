///<reference types="Cypress" />
import {mobileReplenishment} from "../support/pages/mobileReplenishment";
import {transfers} from "../support/pages/transfers";
import {basePage} from "../support/pages/basePage";

it.skip('Replanishment of Ukraine mobile phone number', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    mobileReplenishment.typePhoneNumber('665424680')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(2000)
    basePage.submitPayment()
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkDebitAmountAndComission('2')
    mobileReplenishment.checkReceiverAmount('1')
    mobileReplenishment.checkPaymentCurrency('UAH')

});

it.skip('Money transfer between foreign cards', () => {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell')
    transfers.typeReceiverCard('5309233034765085')
    transfers.typeReceiverNameAndSurname('Juliana', 'Janssen')
    basePage.typeAmount('300')
    transfers.typeComment('Cypress test')
    cy.wait(500)
    basePage.submitPayment()
    transfers.checkDebitAndReceiverCards('* 8217', '* 5085')
    transfers.checkDebitAmountAndTotalAmount('300 UAH', '388.87')
    transfers.checkDebitCommission('88.87 UAH')
    transfers.checkTotalCurrency('UAH')
    transfers.checkComment('Cypress test')

});

it('Example sending the GET request ', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log( response);
        })
});

it('Example sending the POST request ', () => {

    const requestBody = {
        "action": "add",
        "phone": "+380665424680",
        "amount": 50,
        "currency": "UAH",
        "cardCvv": "111",
        "card": "4552331448138217",
        "cardExp": "0524",
        "operator": "Vodafone",
        "operatorId": "601",
        "xref": "55f35b2b009418c605376329ab6f85e1",
        "_": 1618920013762
    }

    const headersData = {
        cookie: '_ga=GA1.2.1820646181.1617815081; _gid=GA1.2.1008443824.1618907457; pubkey=6bd0904811f91bb86bd249e4002e8daf; lfp=4/7/2021, 8:04:52 PM; pa=1618488695347.19480.35855118792213325next.privat24.ua0.7345577283405427+10; fp=40'
    }




    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    }).then((response) => {
            console.log(response);
            console.log(response.body);
            const some = response.headers;
            console.log(some)

        })
});

