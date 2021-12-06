// javascript for addtoplaylist.html

const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    const doc = {
        postedAt: new Date().toISOString(),
        body: form.note.value,
        spotifyURI: form.tuneURL.value
    }

    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });

    window.location.replace('/index.html');
}

form.addEventListener('submit', createPost);
