describe ("App", () => {
  beforeEach(() => {
   cy.visit("http://localhost:3000");
  });  

  it("Should display the navbar", () => {
    // cy.get("h1").contains ("My React App")
    cy.get('.navbar')
  })
});

