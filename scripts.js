// Collection data - Now using an array of objects to populate the collection dynamically
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
  }
];

// Render collections dynamically into the grid
const collectionGrid = document.getElementById('collectionGrid');

function createCollectionItem(collection) {
  const collectionItem = document.createElement('div');
  collectionItem.classList.add('collection-item');

  collectionItem.innerHTML = `
    <img src="${collection.image}" alt="${collection.title}" class="collection-image">
    <h3 class="collection-title">${collection.title} (${collection.year})</h3>
    <p class="collection-description">${collection.description}</p>
  `;

  return collectionItem;
}

collections.forEach(collection => {
  collectionGrid.appendChild(createCollectionItem(collection));
});

// Newsletter form submission
document.getElementById('newsletterForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('emailInput').value;
  if (validateEmail(email)) {
    alert('Thank you for subscribing!');
    document.getElementById('emailInput').value = ''; // Clear the input field
  } else {
    alert('Please enter a valid email address.');
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
