const newCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#new-comment').value.trim();
  const post_id = event.target.getAttribute('data-id');

  if (content) {
    const response = await fetch(`/api/newcomment`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);


