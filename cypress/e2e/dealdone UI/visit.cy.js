
describe("visit dealdone ui web",()=>{
    it("should be visit on  the landing page of dealdone",()=>{
        cy.visit("https://dealdone.com.bd/");
        cy.get(".nav-link").eq(1).click();
        cy.wait(2000);
        cy.get(".nav-link").eq(2).click();
        cy.wait(2000);
        cy.get(".nav-link").eq(3).click();
        cy.wait(2000);
        cy.get(".nav-link").eq(4).click();
        cy.wait(2000);
        
        cy.get(".trial__button").eq(0).click({force:true});


    });
});