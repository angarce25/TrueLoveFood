describe ("App", () => {
    beforeEach(() => {
     cy.visit("http://localhost:3000/login");
    });  
  
    it("Should display the login form", () => {
      // cy.get("h1").contains ("My React App")
      cy.get('.card-body')
    })
  });
  