document.getElementById('btn-new-comment').addEventListener('click', (event) => {
  const id = event.target.getAttribute('data-id');
  window.location.href = `/post/${id}/newcomment`;
});