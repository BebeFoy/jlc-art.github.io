// Collection data for the main page
const collections = [
  {
    id: 1,
    title: 'Ephemeral Echoes',
    description: 'Exploring fleeting moments through conceptual imagery.',
    image: 'images/ephemeral_echoes.jpg',
    year: 2023
  },
  {
    id: 2,
    title: 'Celestial Observations',
    description: 'A celestial journey through stars and cosmic forces.',
    image: 'images/celestial_observations.jpg',
    year: 2022
  },
  {
    id: 3,
    title: 'Historical Shadows',
    description: 'Unveiling forgotten history through ancient relics.',
    image: 'images/historical_shadows.jpg',
    year: 2021
  },
  {
    id: 4,
    title: 'Silent Echoes',
    description: 'The art of stillness and reflection in modern landscapes.',
    image: 'images/silent_echoes.jpg',
    year: 2020
  },
  {
    id: 5,
    title: 'Dreamscapes',
    description: 'Abstract interpretations of dream-like visions.',
    image: 'images/dreamscapes.jpg',
    year: 2019
  }
];

// Collection Journal for the archive page
const archiveEntries = [
  {
    title: 'Ephemeral Echoes',
    dateTime: '2023 - Spring',
    description: 'This collection captures fleeting moments, turning them into conceptual art that mirrors the temporal nature of life.',
    image: 'images/ephemeral_echoes.jpg'
  },
  {
    title: 'Celestial Observations',
    dateTime: '2022 - Summer',
    description: 'A journey through stars and celestial forces, blending scientific observations with artistic expression.',
    image: 'images/celestial_observations.jpg'
  },
  {
    title: 'Historical Shadows',
    dateTime: '2021 - Fall',
    description: 'An exploration of ancient relics, untold stories, and forgotten shadows from history.',
    image: 'images/historical_shadows.jpg'
  },
  {
    title: 'Silent Echoes',
    dateTime: '2020 - Winter',
    description: 'A collection exploring the silent echoes of solitude and reflective landscapes.',
    image: 'images/silent_echoes.jpg'
  },
  {
    title: 'Dreamscapes',
    dateTime: '2019 - Fall',
    description: 'This collection explores abstract visions drawn from the deep recesses of the mind, portraying the beauty of dream-like states.',
    image: 'images/dreamscapes.jpg'
  }
];

// Render collections for the main page
const collectionGrid = document.getElementById('collectionGrid');

function createCollectionItem(collection) {
  const collectionItem = document.createElement('div');
  collectionItem.classList.add('collection-item');

  collectionItem.innerHTML = `
    <img src
