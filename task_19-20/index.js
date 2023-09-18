const API_VERSION = '5.131';
const ACCESS_TOKEN = 'b30871acb30871acb30871acf6b01dfda1bb308b30871acd7f0044ffd0695f368178a0f';
const PUBLIC_ID = '31417540';
const MAX_CACHE_SIZE = 5000000; // Максимальный размер кэша в байтах
let offset = 0; // Смещение для загрузки новых постов

// Функция для создания скрипта JSONP
function createJsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = 'jsonpCallback_' + Date.now();
    window[callbackName] = function(data) {
      resolve(data);
      delete window[callbackName];
      script.parentNode.removeChild(script);
    };

    const script = document.createElement('script');
    script.src = url + '&callback=' + callbackName;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Функция для получения размера строки в байтах
function getSizeInBytes(string) {
  return new Blob([string]).size;
}

// Функция для получения списка постов из паблика ВКонтакте
async function getPostsFromVK() {
  try {
    const url = `https://api.vk.com/method/wall.get?owner_id=-${PUBLIC_ID}&count=100&offset=${offset}&access_token=${ACCESS_TOKEN}&v=${API_VERSION}&extended=1`;
    const response = await createJsonp(url);
    const posts = response.response.items;

    // Получаем текущий кэш
    const cachedPosts = JSON.parse(localStorage.getItem('vkPosts')) || [];

    // Добавляем новые посты в начало кэша
    const newCache = cachedPosts.concat(posts);

    // Преобразуем кэш обратно в строку
    let cacheString = JSON.stringify(newCache);

    // Если кэш слишком большой, удаляем последние элементы, пока он не станет подходящего размера
    while (getSizeInBytes(cacheString) > MAX_CACHE_SIZE) {
      newCache.shift();
      cacheString = JSON.stringify(newCache);
    }

    // Сохраняем новый кэш
    localStorage.setItem('vkPosts', cacheString);

    offset += 100; // Увеличиваем смещение для следующей загрузки постов

    return newCache;
  } catch (error) {
    console.log('Error:', error);
    return [];
  }
}

// Функция для отображения списка постов
function renderPosts(posts) {
  // Получаем контейнер для отображения постов
  const container = document.getElementById('post-container');
  container.innerHTML = '';

  posts.forEach(post => {
    if (post.attachments && post.attachments.length > 0) {
      const hasImage = post.attachments.some(attachment => attachment.type === 'photo');
      if (!hasImage) {
        return; 
      }
    } else {
      return; 
    }


    const postElement = document.createElement('div');
    postElement.classList.add('container');
    postElement.innerHTML = `
      <h3 class="post_name">${post.text}</h3>
      <p class="post_comments">Количество лайков: ${post.likes.count}</p>
      <p class="post_likes">Количество комментариев: ${post.comments.count}</p>
    `;

    const attachmentsContainer = document.createElement('div');
    attachmentsContainer.classList.add('attachments-container');

    post.attachments.forEach(attachment => {
      if (attachment.type === 'photo') {
        const photoElement = document.createElement('img');
        photoElement.classList.add('photo');
        photoElement.src = attachment.photo.sizes[3].url;
        attachmentsContainer.appendChild(photoElement);
      }
    });

    postElement.appendChild(attachmentsContainer);
    container.appendChild(postElement);
  });
}

// Вызываем функцию для получения и отображения списка постов при загрузке страницы
window.onload = async function() {
  const posts = await getPostsFromVK();
  renderPosts(posts);

  // Добавляем обработчик события прокрутки
  window.onscroll = async function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const newPosts = await getPostsFromVK();
      renderPosts(newPosts);
    }
  };
};




// 20 ЗАДАЧА




function printMemoryUsage() {
  const memory = performance.memory;
  console.log('Максимальный размер: ' + (memory.totalJSHeapSize / (1024 * 1024)).toFixed(2) + ' MB');
  console.log('Занятая память: ' + (memory.usedJSHeapSize / (1024 * 1024)).toFixed(2) + ' MB');
}
printMemoryUsage()