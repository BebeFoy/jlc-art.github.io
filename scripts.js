// Collections and Entries Data Structure
const collections = [
  {
    title: "Collection 1",
    entries: [
      {
        image: "image1.jpg",
        text: "Entry 1 for Collection 1. This is the first paragraph of text providing a brief description.",
        subText: "Second paragraph with more details, insight, and context about the collection entry."
      },
      {
        image: "image2.jpg",
        text: "Entry 2 for Collection 1. Another descriptive text goes here for this entry.",
        subText: "Further elaboration on the themes and artistic vision behind this entry."
      }
      // Add up to 5 entries here for each collection
    ]
  },
  {
    title: "Collection 2",
    entries: [
      {
        image: "image3.jpg",
        text: "Entry 1 for Collection 2.",
        subText: "More detailed text description for this entry."
      }
      // Add more entries here
    ]
  }
  // Add more collections as needed
];

// Dynamically Render Collections and Entries
const collectionList = document.getElementById('collectionList');

collections.forEach((collection, index) => {
  const collectionItem = document.createElement('li');
  collectionItem.className = 'collection';

  const collectionTitle = document.createElement('h2');
  collectionTitle.textContent = collection.title;
  collectionItem.appendChild(collectionTitle);

  collection.entries.forEach(entry => {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'collection-entry';

    const entryImage = document.createElement('img');
    entryImage.src = entry.image;
    entryImage.alt = `${collection.title} entry image`;
    entryDiv.appendChild(entryImage);

    const entryText = document.createElement('p');
    entryText.textContent = entry.text;
    entryDiv.appendChild(entryText);

    const entrySubText = document.createElement('p');
    entrySubText.textContent = entry.subText;
    entryDiv.appendChild(entrySubText);

    collectionItem.appendChild(entryDiv);
  });

  collectionList.appendChild(collectionItem);
});

// File and Text Upload Handling (Backend Simulation)
const uploadForm = document.getElementById('uploadForm');
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const imageFiles = document.getElementById('imageUpload').files;
  const textEntry = document.getElementById('textUpload').value;

  if (imageFiles.length > 0 && textEntry) {
    alert('Images and Text submitted successfully! This is just a simulation for backend integration.');
  } else {
    alert('Please upload images and enter some text.');
  }
});

// Social Media Icons Toggle
const socialIcons = {
  twitter: document.getElementById('twitterIcon'),
  instagram: document.getElementById('instagramIcon'),
  github: document.getElementById('githubIcon'),
  discord: document.getElementById('discordIcon'),
  youtube: document.getElementById('youtubeIcon')
};

// Activate icons based on user preferences (simulated)
function activateSocialIcons(iconsToActivate) {
  iconsToActivate.forEach(icon => {
    socialIcons[icon].style.display = 'inline';
  });
}

// Example: Activate Twitter and Instagram icons
activateSocialIcons(['twitter', 'instagram']);
