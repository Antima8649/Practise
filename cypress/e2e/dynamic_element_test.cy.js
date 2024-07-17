describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.yatra.com/', {
      headers: {
        "Accept-Encoding": "gzip, deflate"
      }
    })
    cy.wait(2000)
    cy.get(".inp-focus").click().clear()
  })
})
