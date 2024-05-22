describe('search screen tests', () => {
  before(() => {
    cy.visit('/')
  })

  it('Redirect to search screen', () => {
    cy.get('[href="/Search"]').click();
  })

  it('Search a music', () => {
    const searchText = 'Dentro da hilux';

    cy.get('[data-testid="campo-busca"]').type(searchText);
    cy.get('[aria-label="music-item"').contains(new RegExp(`^(${searchText})$`, 'i')).click()
  });

  it('Click in like button', () => {
    const searchText = 'Dentro da hilux';

    const musicItem = cy.get('[aria-label="music-item"]').contains(new RegExp(`^(${searchText})$`, 'i')).closest('[aria-label="music-item"]');
    const buttonIcon = musicItem.find('[data-testid="icon-button"]');

    buttonIcon.click();
  });

})