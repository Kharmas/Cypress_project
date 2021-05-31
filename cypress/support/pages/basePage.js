export class BasePage {

    open(url){
        cy.visit(url)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeDebitCardData(cardNumber,expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    submitPayment(){
        cy.get('button[type="submit"]')
            .click()
    }
    getCookies(){
        cy.getCookie('session_id')
    }


}

export const  basePage = new BasePage()