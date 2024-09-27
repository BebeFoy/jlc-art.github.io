// Collection data
const collections = [
  { id: 1, title: 'Ephemeral Echoes', year: 2023 },
  // Add more collections as needed
];

// Render collections dynamically
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

