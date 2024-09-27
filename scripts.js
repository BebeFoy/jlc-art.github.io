// Collection data for the main page
const collections = [
  {
    id: 1,
    title: 'Ephemeral Echoes',
    year: 2023,
    link: 'collections.html#ephemeral-echoes'
  },
  {
    id: 2,
    title: 'Celestial Observations',
    year: 2022,
    link: 'collections.html#celestial-observations'
  },
  {
    id: 3,
    title: 'Historical Shadows',
    year: 2021,
    link: 'collections.html#historical-shadows'
  },
  {
    id: 4,
    title: 'Silent Echoes',
    year: 2020,
    link: 'collections.html#silent-echoes'
  },
  {
    id: 5,
    title: 'Dreamscapes',
    year: 2019,
    link: 'collections.html#dreamscapes'
  }
];

// Render collections for the main page
const collectionList = document.getElementById('collectionGrid');

function createCollectionItem(collection) {
  const collectionItem = document.createElement('a');
  collectionItem.classList.add('collection-item');
  collectionItem.href = collection.link;
  collectionItem.innerHTML = `${collection.title} (${collection.year})`;

  return collectionItem;
}

collections.forEach((collection) => {
  collectionList.appendChild(createCollectionItem(collection));
});
