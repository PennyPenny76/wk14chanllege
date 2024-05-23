
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dashboard/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document.getElementById('new-post-btn').addEventListener('click', () => {
  window.location.href = '/dashboard/newpost';
});

document.querySelectorAll('[id^="btn-delete-"]').forEach(button => {
  button.addEventListener('click', delButtonHandler);
});

document.querySelectorAll('[id^="btn-update-"]').forEach(button => {
  button.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id');
    window.location.href = `/dashboard/editpost/${id}`;
  });
});


