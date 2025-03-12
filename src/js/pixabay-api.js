import axios from 'axios';

export function getImages(input) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49254828-2c532cb2bf49660d4021e7362',
        q: encodeURIComponent(input),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      return [];
    });
}
