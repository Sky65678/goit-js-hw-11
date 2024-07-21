import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '44691348-434c97a8e5e51442929a69f01',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  },
});

export async function getImage(image, currentPage) {
  const res = await axios.get('', {
    params: {
      q: image,
      page: currentPage,
    }
  });
  return res.data;
}

