describe('Busca em Manaus', () => {
  it('Acessa o site, pesquisa por Manaus e ordena a pesquisa', () => {
    cy.visit('/');
    cy.get('[placeholder="Para onde?"]').click();
    cy.get('[data-testid="search-form-destination"]').type('Manaus');
    cy.contains('Manaus').click();
    cy.get('[data-testid="search-button-with-loader"]').focus().click();
    cy.wait(50000);
    cy.get('button[title="Sugestões"]').focus().click();
    cy.wait(5000);
    cy.get('[data-testid="refinement-row-active-popover"]')
      .should('be.visible');
      cy.wait(5000);
    cy.contains('Avaliação e sugestões').click();
    cy.get('[data-testid="filters-popover-apply-button"]').focus().click();
    cy.get('[data-testid="accommodation-list-element"]').first().click();
    cy.get('[itemprop="ratingValue"]').first().invoke('text').then((rating) => {
      cy.log('Avaliação:', rating);
    });
  });
});