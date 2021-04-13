///<reference types="Cypress" />

// it('By id', ()=>{
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// })
//
// it('By Class', ()=>{
//     cy.visit("https://docs.cypress.io/api/commands/blur")
//     cy.get(".DocSearch-Button-Placeholder")
// })
//
// it('By Tag', ()=>{
//     cy.visit("https://docs.cypress.io/api/commands/blur")
//     cy.get("nav")
// })
//
// it('By Tag value', ()=>{
//     cy.visit("https://facebook.com")
//     cy.get('[name="pass"]')
// })
//
// it('By different Tag ', ()=>{
//     cy.visit("https://facebook.com")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// })
//
// it('By different Types ', ()=>{
//     cy.visit("https://facebook.com")
//     cy.get('button[type="submit"][name="login"]')
// })
//
// it.only('By contains name', ()=>{
//     cy.visit("https://next.privat24.ua/")
//     cy.get('*[class^="card"]')
// })

// it('By id', ()=>{
//      cy.visit("http://test.operf.io/#home")
//      cy.get('#subscribe-email')
//  })
//
// it('By Class', ()=>{
//     cy.visit("http://test.operf.io/#home")
//     cy.get('.flex col aic jcc minw-320 padding')
// })
//
// it('By Tag', ()=>{
//     cy.visit("http://test.operf.io/#home ")
//     cy.get("footer")
// })
//
// it('By Tag value', ()=>{
//     cy.visit("http://test.operf.io/#home")
//     cy.get('[type="text"]')
// })
//
// it('By different Tag ', ()=>{
//     cy.visit("http://test.operf.io/#home")
//     cy.get('[data-name="keyboard_arrow_up"][data-color="var(--primary)"]')
// })
//
// it('By different Types ', ()=>{
//     cy.visit("http://test.operf.io/#home")
//     cy.get('button[type="submit"]')
// })
//
// it.only('By contains name', ()=>{
//     cy.visit("http://test.operf.io/#home")
//     cy.get('*[class^="flex"]*[class$="minw-320"]')
// })

it('Using Get with Find and Eq', ()=>{
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

it.only('Using Get with Find and Eq', ()=>{
    cy.viewport(1800, 700)
    cy.visit("https://docs.cypress.io/api/commands/eq#Syntax")
    cy.get('nav').find('ul').find('li').find('a').eq(118 )
})


