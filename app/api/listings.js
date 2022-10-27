import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();

  const config = {
    onUploadProgress: progressEvent => {
      const {loaded, total} = progressEvent;

      onUploadProgress(loaded /total);
    }
  }

  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) => {
    data.append('images', {
      name: `image${index}`,
      type: 'image/jpeg',
      uri: image,
    })
  })

  if (listing.location) {
    data.append('location', JSON.stringify(listing.location));
  }

  return client.post(endpoint, data, config)
}

export default {
  addListing,
  getListings,
}
