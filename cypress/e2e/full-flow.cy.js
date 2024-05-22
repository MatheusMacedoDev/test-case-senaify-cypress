describe('Fluxo do Usuário na Aplicação de Música', () => {
  before(() => {
    cy.visit('/');
  });

  it('Visualizar playlists e executar uma música', () => {
    const titleHead = cy.get("[aria-label='header-title'"); 

    titleHead.should('be.visible')
    titleHead.should('contain', 'Good morning')

    cy.wait(2000);

    const playlists = cy.get("[aria-label='playlist-item']");
    playlists.should('have.length.greaterThan', 0);

    const playlist = playlists.first();
    playlist.click();

    const music = cy.get("[aria-label='music-item']").contains('Ana');
    music.click();

    cy.wait(3000);
  })

  it('Navegar entre playlists e executar outra música', () => {
    cy.wait(1000)

    const exitButton = cy.get('[aria-label="exit-playlist-button"]')
    exitButton.click();

    const playlists = cy.get("[aria-label='playlist-item']");
    playlists.should('have.length.greaterThan', 0);

    const secondPlaylist = playlists.eq(2);
    secondPlaylist.click();

    const music = cy.get("[aria-label='music-item']").first();
    music.click();

    cy.wait(3000);
  });

  it('Procurar e favoritar uma música', () => {
    cy.get('[href="/Search"]').click();

    const searchText = 'Dentro da hilux';

    cy.get('[data-testid="campo-busca"]').type(searchText);

    const musicList = cy.get('[aria-label="music-item"')
    musicList.should('have.length.greaterThan', 0);

    const firstSearchedMusic = cy.get('[aria-label="music-item"]').contains(new RegExp(`^(${searchText})$`, 'i'))
    firstSearchedMusic.click()

    cy.wait(1000)

    const musicItem = cy.get('[aria-label="music-item"]').contains(new RegExp(`^(${searchText})$`, 'i')).closest('[aria-label="music-item"]');
    const buttonIcon = musicItem.find('[data-testid="icon-button"]');

    buttonIcon.click();

    cy.wait(3000);
  });

  it('Verificar música favoritada na tela de Favoritos', () => {
    cy.get('[href="/Favorites"]').click();

    cy.wait(1500);

    cy.get('[aria-label="music-item-favorite"]').first().click();
  });
})