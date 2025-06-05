const platforms = [
  { id: 'pc', name: 'PC', icon: '💻' },
  { id: 'playstation', name: 'PlayStation', icon: '🎮' },
  { id: 'xbox', name: 'Xbox', icon: '🎯' },
  { id: 'nintendo', name: 'Nintendo', icon: '🎨' },
]

const games = {
  pc: [
    { id: 'cyberpunk', name: 'Cyberpunk 2077', rating: 8.5, year: 2020 },
    { id: 'valorant', name: 'Valorant', rating: 9.2, year: 2020 },
    { id: 'cs2', name: 'Counter-Strike 2', rating: 8.8, year: 2023 },
  ],
  playstation: [
    { id: 'spiderman', name: 'Spider-Man', rating: 9.7, year: 2018 },
    { id: 'god-of-war', name: 'God of War', rating: 9.8, year: 2018 },
    { id: 'last-of-us', name: 'The Last of Us Part II', rating: 9.4, year: 2020 },
  ],
  xbox: [
    { id: 'halo-infinite', name: 'Halo Infinite', rating: 8.7, year: 2021 },
    { id: 'forza-horizon', name: 'Forza Horizon 5', rating: 9.1, year: 2021 },
    { id: 'gears-5', name: 'Gears 5', rating: 8.4, year: 2019 },
  ],
  nintendo: [
    { id: 'zelda-breath', name: 'Zelda: Breath of the Wild', rating: 9.9, year: 2017 },
    { id: 'mario-odyssey', name: 'Super Mario Odyssey', rating: 9.6, year: 2017 },
    { id: 'smash-ultimate', name: 'Super Smash Bros. Ultimate', rating: 9.3, year: 2018 },
  ],
}

export { platforms, games }
