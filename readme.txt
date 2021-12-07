** Readme doc for A5 **

Author: Kacy Diep
Email: kacyd@uci.edu
UCI id: 23751516

1. How many assignment points do you believe you completed?
- 13/20 

- 7/7 : A functional web application
- 0/5 : The ability to control the web app with basic gestures
- 0/2 : The ability to control the web app with custom gestures
- 2/2 : Following good principles of UI design
- 2/2 : Creating a compelling app
- 2/2 : A readme and demo video which explains how these features were implemented and their design rationale



2. How long, in hours, did it take you to complete this assignment?
- Roughly 40-45 hours (spread across a week) for design ideation & development

3. What online resources did you consuly when completing this assignment?
- Running a JSON server: https://www.youtube.com/watch?v=mAqYJF-yxO8&list=TLPQMDExMjIwMjFWWvFeglD0Vg&index=2 ; https://www.youtube.com/watch?v=VF3TI4Pj_kM
- Fade-in effect page load (css): https://www.geeksforgeeks.org/how-to-create-fade-in-effect-on-page-load-using-css/ 
- HTML iframe tag: https://www.w3schools.com/tags/tag_iframe.ASP 
- Bootstrap grid inside card: https://www.codeply.com/go/vE2EdNPQwV 
- CSS border-width property: https://www.w3schools.com/cssref/pr_border-width.asp
- CSS border-color property: https://www.w3schools.com/cssref/pr_border-color.asp
- Character count in textarea: https://www.codeply.com/go/s0F9Iz38yn/bootstrap-textarea-with-character-count-_-bootstrap-3
- HTML input type=submit: https://www.w3schools.com/tags/att_input_type_submit.asp
- HTML forms: https://www.w3schools.com/html/html_forms.asp
- addEventListener (submit): https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
- create a stacked form: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_stacked_form
- addEventListener on form submit: https://stackoverflow.com/questions/21338476/addeventlistener-on-form-submit
- using fetch() with JSON: https://dmitripavlutin.com/fetch-with-json/
- JSON server tutorial: https://zetcode.com/javascript/jsonserver/ 
- implementing typing animation (typing.js) in html: https://www.youtube.com/watch?v=J7QZ0rK0w78
- typing.js library: http://mattboldt.github.io/typed.js/
- Spotify URI codes: https://community.spotify.com/t5/Desktop-Windows/URI-Codes/td-p/4479486
- URI code no longer an option on Spotify: https://community.spotify.com/t5/Desktop-Mac/URI-no-longer-a-share-option/td-p/5179876
- Embed Spotify songs, albums, and playlists: https://developer.spotify.com/documentation/widgets/generate/embed/
- Add spacing between vertical columns when stacking: https://stackoverflow.com/questions/19822127/vertical-space-when-stacking-columns-in-bootstrap-3
- Date object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
- set custom validation message (form required attributes): https://stackoverflow.com/questions/5272433/html5-form-required-attribute-set-custom-validation-message
- Client-side form validation: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- input type (url): https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url
- url/website validation: https://stackoverflow.com/questions/42618872/regex-for-website-or-url-validation/42619368
- pattern matching to validate Spotifu embeds: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match 
- rounded corners on a iframe: https://stackoverflow.com/questions/5738985/is-it-possible-to-have-css-rounded-corners-on-an-iframe
- onclick function: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
- N/A; Did not discuss with anyone and worked on this without a partner


5. Is there anything special we need to know in order to run your code?
- Download the package "json server" by running the command in your terminal or command prompt window: `npm install -g json-server`(simulates a backend REST API service that allows the front-end to dynamically get & post data)
- Before starting up the web app, enter the following command in your Powershell: `json-server --watch data/db.json` (starts the JSON server, watches for file changes, and updates the exposed API accordingly)
- To start up the web app, open index.html with the Live Server in VS Code (alternatively, if not using VS Code, run `npm install --global http-server` in your command prompt) to open a server (this way is NOT recommended because I found that it was slow to reflect real-time changes)


DESIGN DECISIONS & RATIONALES:
- What is the purpose of the application?
    - A music sharing application that allows people to share (anonymously) what they're currently listening to (or their favorite tunes). 
        Given that a single song evokes different thoughts and emotions for every person, individuals can also share their thoughts about the tune that they are sharing.
        This is a way of discovering and exploring new music, with little algorithmic bias that is evidently present in music streaming platforms. 
        It is to help audiences build more meaningful connections with the music that they may or may not be familiar with.

- Did you design your app with a particular type of user in mind? If so, whom?
    - Niche listeners who are looking to discover and connect with new areas of music
    - Individuals who have a genuine passion for music and are looking to build more meaningful music streaming experiences 
    - Emerging, independent artists who are building their platform on Spotify and are looking to streamline their work to potential audiences by sharing the stories behind their work 

- How does your app implement or follow principles of good design?
    - Considered (&passed) web accessibility standards (ensured satisfactory color contrast when implementing dark mode)
    - Useful initial view: users are first presented with a brief overview of what the general purpose of the application is, 
        followed by a primary button that invites them to complete a task/goal (i.e. add to playlist)
    - Established a clear visual and information hierachy on all pages; content and user interactions are kept to a minimum on each page, in efforts to reduce cognitive overload
    - Designed a clickable logo to allow for easier navigation through pages (logo redirects to the home page)
    - Consistent design through the use of an aesthetic color palette and uniform card & button designs throughout the application
    - When submitting a form (in "add to playlist"), proper error prevention measures are put in place to reduce user mistakes, including:
        - if a user forgets to fill out a required field, they will not be able to submit the form and modals will pop up to remind them to fill out the appropriate fields
        - if a user inputs an invalid URL (i.e. it is not a Spotify track URL), then the user will be informed of incorrect URL formatting via when they try to submit the form
        - the text description attached to a form is limited to 270 characters and if a user tries to go over this limit, the dynamic character counter will display that this is not possible 
        - before submitting a form, users can check if they have pasted the desired spotify track URL by clicking "show preview for spotify embed" so that they can make the appropriate modifications to their form submission, if necessary
    - implemented responsive web design
    - visibility of system status (nielson heuristic): every time a user submits a form to add a song to the "archived playlist", they are auto-directed to a new window that displays all of recently submitted forms, which informs them of whether they inputted what they intended
    