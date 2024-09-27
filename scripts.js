// Collection data
const collections = [
  {
    id: 1,
    title: 'Ephemeral Echoes',
    year: 2023,
    entries: [
      {
        date: '2023-03-21',
        title: 'Conceptual Seeds',
        description: 'As the first buds of spring emerge, so too does my vision for "Ephemeral Echoes"...',
        image: 'images/path_to_image1.jpg'
      },
      // ... other entries
    ]
  },
  {
    id: 2,
    title: 'Celestial Observations',
    year: 2022,
    entries: [
      {
        date: '2022-10-05',
        title: 'Stellar Seeds',
        description: 'A deep dive into the cosmic influences...',
        image: 'images/path_to_image2.jpg'
      },
      // ... other entries
    ]
  },
  {
    id: 3,
    title: 'Historical Shadows',
    year: 2021,
    entries: [
      {
        date: '2021-12-11',
        title: 'Fading Monuments',
        description: 'Exploring the lost stories through artifacts...',
        image: 'images/path_to_image3.jpg'
      },
      // ... other entries
    ]
  },
  // More collections can be added
];

// Populate the collection list on index.html
const collectionList = document.getElementById('collectionList');
collections.forEach((collection) => {
  const collectionItem = document.createElement('li');
  collectionItem.innerHTML = `
    <a href="collection.html?id=${collection.id}">
      ${collection.title} <span class="year">(${collection.year})</span>
    </a>
  `;
  collectionList.appendChild(collectionItem);
});

// Handle newsletter form submission
document.getElementById('newsletterForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('emailInput').value;
  if (validateEmail(email)) {
    alert('Thank you for subscribing!');
    document.getElementById('emailInput').value = ''; // Clear input
  } else {
    alert('Please enter a valid email address.');
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Function to load collection entries on collection.html
function loadCollection(id) {
  const collection = collections.find(c => c.id == id);
  if (collection) {
    const collectionPage = document.getElementById('collectionPage');
    collection.entries.forEach(entry => {
      const entryElement = document.createElement('div');
      entryElement.classList.add('collection-entry');
      entryElement.innerHTML = `
        <img src="${entry.image}" alt="${entry.title}">
        <div class="details">
          <h3>${entry.title}</h3>
          <p>Date: ${entry.date}</p>
          <
