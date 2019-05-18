const PageState = function() {
    let currentState = new homeState(this); // This stands for this function this pagestate

    this.init = function() {
        // This.change is another function we gonna create, and it is going to change the currentState from above
        // When we call initialize it is just gonna load the homestate
        this.change(new homeState);
    } 

    this.change = function(state) {
        currentState = state;
    }
};
// Now we just have to create the different states and decide what to happen inside of them

// Home State:
const homeState = function(page) {
    // We want to modify the UI depending on the state were in 
    document.querySelector('#heading').textContent = null; // null because we dont want a heading
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    `;
};

// About State:
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'ABout Us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
`;
};

// Contact State:
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
    <form>
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
`;
};

// Instantiate the pageState
const page = new PageState();

// Initialize the first state:
page.init();

// So when we click on the links in the UI we want to call eventlisteners that will change the state:

// UI Variables:
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home
// Add event listeners:
// click event, function that takes in a event parameter, (arrow function)
home.addEventListener('click', (e) => {
    // page.change from above, and we want the homestate
    page.change(new homeState);

    // Prevent default behavior of the click link:
    e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
    page.change(new aboutState);

    e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
    page.change(new contactState);

    e.preventDefault();
});

// As you can see we didnt have to create an about.html or contact.html it is all in our javascript.



