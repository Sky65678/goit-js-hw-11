

function imageTemplate({comments, downloads, views, likes, largeImageURL, tags, webformatURL}) {
      return `<li class="gallery-item">
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" class="gallery-img">
      </a>
      <div class="info">
      <div class="info-container">
        <p class="key">Likes</p>
        <p class="value">${likes}</p>
      <div class="info-container">
        <p class="key">Views</p>
        <p class="value">${views
}</p>
      </div>
      <div class="info-container">
        <p class="key">Comments</p>
        <p class="value">${comments}</p>
      </div>
      <div class="info-container">
        <p class="key">Downloads</p>
        <p class="value">${downloads}</p>
      </div>
      </div>
    </li>`
}

export function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}