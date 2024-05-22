describe('template spec', () => {
  before(() => {
    cy.visit('/');
  })

  it('header is visible', () => {
    const titleHead = cy.get("[aria-label='header-title'"); 

    titleHead.should('be.visible')
    titleHead.should('contain', 'Good morning')
  })

  it('have any playlist', () => {
    cy.wait(2000);

    const playlists = cy.get("[aria-label='playlist-item']");
    playlists.should('have.length.greaterThan', 0);
  })
  
  it('click in the first playlist', () => {
    const playlist = cy.get("[aria-label='playlist-item']").first();
    playlist.click();

    const music = cy.get("[aria-label='music-item']").contains('Ana');
    music.click();
  })
})