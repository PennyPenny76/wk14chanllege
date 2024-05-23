const editPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#edit-post-title').value.trim();
  const content = document.querySelector('#edit-post-content').value.trim();
  const post_id = event.target.getAttribute('data-id');
  console.log(post_id,"post_id")

  if (post_id && title && content) {
    const response = await fetch(`/api/editpost/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to edit post');
    }
  }
};

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editPostHandler);


