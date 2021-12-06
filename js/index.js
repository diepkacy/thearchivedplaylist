// associated javascript file for index.html
const container = document.querySelector('.tunes');


const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts';

    const res = await fetch(uri);
    const posts = await res.json();

    // for testing purposes
    console.log(posts);

    let template = '';
    posts.forEach(post => {

        var embedTrack = "https://open.spotify.com/embed/track/";
        var trackURI = post.spotifyURI;
        trackURI = trackURI.replace("https://open.spotify.com/track/", "");
        trackURI = trackURI.split('?');
        embedTrack += trackURI[0];

        // for testing purposes
        console.log(embedTrack);

        template += `
            <div class="card" style="background-color: #000000; border-color: #757575; margin-top: 4%; margin-bottom: 4%; padding-left:2%; padding-right: 2%; padding-top: 4%; padding-bottom: 4%">
                <div class="container-fluid">
                
                    <div class="row align-items-start">
                        <div class="col-md-6">
                            <iframe src=${embedTrack} width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        
                        <br><br>

                        <div class="col-md-6">
                            ${post.body}
                            <br><br>
                            <em>${post.postedAt}</em>
                        </div>
                    </div>

                </div>        
            </div>
        `
    })

    container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => renderPosts());