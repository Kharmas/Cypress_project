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

//Example sending the GET request
it.skip('Example sending the GET request ', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response);
        })
});


//Example HTTP POST request with expect verification of response
it.skip('Example sending the POST request', () => {

    const requestBody = {
        "action": "info",
        "phone": "+380665424680",
        "amount": 50,
        "currency": "UAH",
        "cardCvv": "444",
        "card": "4552331448138217",
        "cardExp": "0524",
        "xref": "7c84bf31d46c9404e88cdde35922d10c",
        "_": 1621515089743
    }

    const headersData = {
        cookie: '_ga=GA1.2.1820646181.1617815081; pubkey=297eea6e70355d6fe8a9605e5e521fbc; _gid=GA1.2.1511398724.1622035664; fp=45; lfp=4/7/2021, 8:04:52 PM; pa=1622035674890.95210.5813687559414678next.privat24.ua0.8260377293358108+1'
    }


    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    }).then((response) => {
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.equal('50.0')
        console.log(response);
    })
});

//Example HTTP POST request with should verification of response
it('Example sending the POST request', () => {

    const requestBody = {
        "action": "info",
        "phone": "+380665424680",
        "amount": 50,
        "currency": "UAH",
        "cardCvv": "444",
        "card": "4552331448138217",
        "cardExp": "0524",
        "xref": "66af4bf14289216afd85e5a5211d22ca",
        "_": 1621515089743
    }

    const headersData = {
        cookie: '_ga=GA1.2.1820646181.1617815081; _gid=GA1.2.1511398724.1622035664; pubkey=52f24d2a023abe84933c355a7b0237a1; _gat_gtag_UA_29683426_11=1; fp=48; lfp=4/7/2021, 8:04:52 PM; pa=1622035674890.95210.5813687559414678next.privat24.ua0.8260377293358108+3'
    }


    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })
});


