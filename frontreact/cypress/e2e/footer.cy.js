describe ("App", () => {
    beforeEach(() => {
     cy.visit("http://localhost:3000");
    });  
  
    it("Should display the footer", () => {
      // cy.get("h1").contains ("My React App")
      cy.get('footer')
    })
  });