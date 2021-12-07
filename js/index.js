// associated javascript file for index.html
const container = document.querySelector('.tunes');


const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts?_sort=postedAt&_order=desc';

    const res = await fetch(uri);
    const posts = await res.json();

    // for testing purposes
    console.log(posts);

    let template = '';
    posts.forEach(post => {

        // display/embed spotify media player
        var embedTrack = "https://open.spotify.com/embed/track/";
        var trackURI = post.spotifyURI;
        trackURI = trackURI.replace("https://open.spotify.com/track/", "");
        trackURI = trackURI.split('?');
        embedTrack += trackURI[0];

        // for testing purposes
        console.log(embedTrack);


        // display date added (i.e. Added less than a day ago)
        var currentDate = new Date();
        var dateAdded = new Date(post.postedAt);

        var timeElapsed = 0;

        // one day is measured in (hours*minutes*seconds*milliseconds)
        timeElapsed = Math.floor((currentDate - dateAdded) / (24 * 60 * 60 * 1000)); 
        var timeElapsedStr = "";

        if (timeElapsed <= 1) {
            timeElapsedStr += "Added less than a day ago"
        }
        else {
            timeElapsedStr += "Added " + timeElapsed + " days ago"
        }



        template += `
            <div class="card">
                <div class="container-fluid">
                
                    <div class="row align-items-start">
                        <div class="col-md-6">
                            <div style="border-radius: 5px; overflow: hidden;">
                                <iframe src=${embedTrack} width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>        
                        </div>
                        
                        <br><br>

                        <div class="col-md-6">
                            ${post.body}
                            <br><br>
                            <em>${timeElapsedStr}</em>
                        </div>
                    </div>

                </div>        
            </div>
        `
    })

    container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => renderPosts());