// Collection data
const collections = [
  {
    id: 1,
    title: 'Ephemeral Echoes',
    year: 2023,
    description: 'A delicate exploration of fleeting moments and eternal concepts.',
    image: 'images/ephemeral_echoes.jpg',
  },
  {
    id: 2,
    title: 'Celestial Observations',
    year: 2022,
    description: 'A series dedicated to the mysteries of the stars and the human condition.',
    image: 'images/celestial_observations.jpg',
  },
  {
    id: 3,
    title: 'Historical Shadows',
    year: 2021,
    description: 'An introspective journey through historical artifacts and forgotten memories.',
    image: 'images/historical_shadows.jpg',
  },
  {
    id: 4,
    title: 'Urban Legends',
    year: 2020,
    description: 'The intersection of myth, folklore, and the urban environment.',
    image: 'images/urban_legends.jpg',
  },
  // More collections here...
];

// Function to generate the collection HTML
function generateCollections() {
  const collectionList = document.getElementById('collectionList');

  collections.forEach((collection) => {
    const collectionItem = document.createElement('li');
    collectionItem.innerHTML = `
      <img src="${collection.image}" alt="${collection.title}">
      <div class="info">
        <h3>${collection.title}</h3>
        <p>${collection.description}</p>
        <small>Year: ${collection.year}</small>
      </div>
    `;
    collectionList.appendChild(collectionItem);
  });
}

// Initialize the collection rendering
document.addEventListener('DOMContentLoaded', generateCollections);
