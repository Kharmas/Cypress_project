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

it.skip('Example sending the GET request ', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response);
        })
});

it.skip('Example sending the POST request ', () => {

    const requestBody = {
        "action": "info",
        "phone": "+380665424680",
        "amount": 50,
        "currency": "UAH",
        "cardCvv": "444",
        "card": "4552331448138217",
        "cardExp": "0524",
        "xref": "ba9d22f2a188919041ad2de3f86c21dd",
        "_": 1621515089743
    }

    const headersData = {
        cookie: '_ga=GA1.2.1820646181.1617815081; _gid=GA1.2.2027916834.1621514661; pubkey=863589768c148cec1d34aca44497fe50; _gat_gtag_UA_29683426_11=1; fp=43; lfp=4/7/2021, 8:04:52 PM; pa=1621515071621.71630.24772195076598913next.privat24.ua0.6283673238138388+1'
    }


    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    }).then((response) => {
        console.log(response.body);
    })
});

it.skip('Test POST', ()=>{

    const testBody = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    const testHeaderData = {
        'Content-type': 'application/json; charset=UTF-8',
    }

    cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: testBody,
        headers: testHeaderData
    }).then((responce) => {
        console.log(responce.body)
    })

})

it('Test update', ()=>{

    const testHeader = {
        'Content-type': 'application/json; charset=UTF-8'
    }

    const testBody = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    cy.request({
        method: 'PUT',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        body: testBody,
        headers: testHeader
    }).then((responce) =>{
        console.log(responce.body)
    })
})

