const apiUrl = 'http://localhost:3000/api/posts';

async function fetchPosts() {
  const res = await fetch(apiUrl);
  const posts = await res.json();
  const postsList = document.getElementById('posts');
  postsList.innerHTML = '';

  posts.forEach(post => {
    const li = document.createElement('li');

    // Title
    const titleEl = document.createElement('strong');
    titleEl.textContent = post.title;
    li.appendChild(titleEl);

    // Content text
    const textNode = document.createTextNode(`: ${post.content} `);
    li.appendChild(textNode);

    // Delete button with real JS handler
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.addEventListener('click', () => deletePost(post.id));
    li.appendChild(deleteBtn);

    postsList.appendChild(li);
  });
}

async function deletePost(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  fetchPosts();
}

document
  .getElementById('post-form')
  .addEventListener('submit', async e => {
    e.preventDefault();
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleInput.value,
        content: contentInput.value
      })
    });

    titleInput.value = '';
    contentInput.value = '';
    fetchPosts();
  });

// Initial load
fetchPosts();