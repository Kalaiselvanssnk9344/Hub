


function search_animal() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('animals');

    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}

let lists = document.querySelector("#list");
let searchbar = document.getElementById("searchbar");

function show() {
    lists.style.display = "block";
}

searchbar.addEventListener("click", show);

// Function to hide the list
function hide() {
    lists.style.display = "none";
}

// Adjusted event listener for hiding the list when clicking outside the search bar and the list itself
document.addEventListener("mousedown", function(event) {
    // Check if the click was outside the search bar and not on an anchor tag within the list
    if (!searchbar.contains(event.target) && !lists.contains(event.target)) {
        hide();
    }
});

// Prevent default action for anchor tags within the list
let anchors = document.querySelectorAll('#list .animals a');
anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevents navigation
        window.location.href = this.getAttribute('href'); // Manually navigates to the URL
    });
});











// unavailable and censure container 

let censure_container = document.getElementById("censure_container");
let censure_mechanism = document.querySelector("#censure_mechanism");
let blackmarkeee = document.getElementById("blackmarkeee");
function cense(){
    censure_mechanism.style.display = 'flex';
    blackmarkeee.textContent = '1';
    blackmarkeee.style.paddingLeft='1rem';
    rite_img_container.style.display='none';
    rong_img_container.style.display='flex';
}

censure_container.addEventListener("click", cense);


let unava_container = document.getElementById("unava_container");
let rite_img_container = document.querySelector("#rite_img_container");
let rong_img_container = document.querySelector("#rong_img_container");
function wrongee(){
    rite_img_container.style.display='none';
    rong_img_container.style.display='flex';
}

unava_container.addEventListener("click", wrongee)


// deliverables image uploader 
document.getElementById('img_upload_containerr').addEventListener('change', function(event) {
    let img_show = document.getElementById("previeww");

    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = document.getElementById('previeww');
        image.src = e.target.result;
        img_show.style.display="block";
        document.getElementById('certificate_previeww').style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
  

// side pop up for connect 
let connect_containerr = document.getElementById("connect_containerr");
let connect_popup_container = document.querySelector("#connect_popup_container");
function poppeup(){
    connect_popup_container.style.animationPlayState='running';
    connect_popup_container.style.display = 'block';
    // connect_popup_container.style.backgroundColor='red';

}

connect_containerr.addEventListener("click", poppeup);


// deliverables image uploader 
document.getElementById('img_upload_containerr3').addEventListener('change', function(event) {
    let img_show = document.getElementById("previeww3");

    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = document.getElementById('previeww3');
        image.src = e.target.result;
        img_show.style.display="block";
        document.getElementById('certificate_previeww3').style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });



