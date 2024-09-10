// // JavaScript code

// function search_animal() {
//     let input = document.getElementById('searchbar').value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('animals');
  
//     for (i = 0; i < x.length; i++) {
//       if (!x[i].innerHTML.toLowerCase().includes(input)) {
//         x[i].style.display = "none";
//       }
//       else {
//         x[i].style.display = "list-item";
//       }
//     }
//   }
  
// let lists = document.querySelector("#list");
// let searchbar = document.getElementById("searchbar");
// function show(){
//     lists.style.display = "block";
// }

// searchbar.addEventListener("click", show);
// // Function to hide the list
// function hide() {
//     lists.style.display = "none";
// }
// // Event listener for hiding the list when clicking outside the search bar
// document.addEventListener("mousedown", function(event) {
//     // Check if the click was outside the search bar
//     if (!searchbar.contains(event.target)) {
//         hide();
//     }
// });

// JavaScript code

// function search_animal() {
//     let input = document.getElementById('searchbar').value;
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('animals');

//     for (let i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         } else {
//             x[i].style.display = "list-item";
//         }
//     }
// }

// let lists = document.querySelector("#list");
// let searchbar = document.getElementById("searchbar");

// function show() {
//     lists.style.display = "block";
// }

// searchbar.addEventListener("click", show);

// // Function to hide the list
// function hide() {
//     lists.style.display = "none";
// }

// // Adjusted event listener for hiding the list when clicking outside the search bar
// document.addEventListener("mousedown", function(event) {
//     // Check if the click was outside the search bar and not on an anchor tag
//     if (!searchbar.contains(event.target) && !Array.from(x).some(item => item.contains(event.target))) {
//         hide();
//     }
// });

// // Prevent default action for anchor tags within the list
// let anchors = document.querySelectorAll('#list .animals a');
// anchors.forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault(); // Prevents navigation
//         window.location.href = this.getAttribute('href'); // Manually navigates to the URL
//     });
// });

// JavaScript code

// search bar


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


// progresss bar 

let progresss = document.getElementById("circle_progress_overall_container_week1");
let percent = document.getElementById("percent11");

let navbar_fullfill_container11 = document.getElementById("navbar_fullfill_container11");
let navbar_fullfill_container2 = document.getElementById("navbar_fullfill_container2");
let navbar_fullfill_container3 = document.getElementById("navbar_fullfill_container3");
let navbar_fullfill_container4 = document.getElementById("navbar_fullfill_container4");
let tick_img_holder = document.querySelector("#tick_img_holder");
let tick_img_holder2 = document.querySelector("#tick_img_holder2");
let tick_img_holder3 = document.querySelector("#tick_img_holder3");
let tick_img_holder4 = document.querySelector("#tick_img_holder4");
function firstcall(){
  progresss.style.borderTop='1.5rem solid #00B9C4';
  percent.textContent = "25%";
}
function secondcall(){
  progresss.style.borderRight='1.5rem solid #00B9C4';
  percent.textContent = "50%";
}

function thirdcall(){
  progresss.style.borderBottom='1.5rem solid #00B9C4';
  percent.textContent = "75%";
}

function fourthcall(){
  progresss.style.borderLeft='1.5rem solid #00B9C4';
  percent.textContent = "100%";
}

function showdaa1(){
    tick_img_holder.style.display= "block";
}
function showdaa2(){
    tick_img_holder2.style.display= "block";
}
function showdaa3(){
    tick_img_holder3.style.display= "block";
}
function showdaa4(){
    tick_img_holder4.style.display= "block";
}


navbar_fullfill_container11.addEventListener("click", showdaa1);
// console.log(navbar_fullfill_container);
navbar_fullfill_container2.addEventListener("click", showdaa2);
navbar_fullfill_container3.addEventListener("click", showdaa3);
navbar_fullfill_container4.addEventListener("click", showdaa4);



// create new week bar 

let create_new_week_container = document.getElementById("create_new_week_container");
let status_update_holderre2 = document.querySelector("#status_update_holderre2");
console.log(create_new_week_container); // Should not be null
console.log(status_update_holderre2); // Should not be null
function newcontainercreate(){
    status_update_holderre2.style.display = "block";
}

create_new_week_container.addEventListener("click", newcontainercreate);


let progresss21 = document.getElementById("circle_progress_overall_container_week12");
let progresss13 = document.getElementById("circle_progress_overall_container13");
let percent12 = document.getElementById("percent12");
let percent13 = document.getElementById("percent13");
function firstcall21(){
  progresss21.style.borderTop='1.5rem solid #00B9C4';
  percent12.textContent = "25%";
}
function secondcall22(){
  progresss21.style.borderRight='1.5rem solid #00B9C4';
  percent12.textContent = "50%";
}

function thirdcall23(){
  progresss21.style.borderBottom='1.5rem solid #00B9C4';
  percent12.textContent = "75%";
}

function fourthcall24(){
  progresss21.style.borderLeft='1.5rem solid #00B9C4';
  percent12.textContent = "100%";
  progresss13.style.borderRight='1.5rem solid #00B9C4';
  percent13.textContent = "50%";
}

let navbar_fullfill_container21 = document.getElementById("navbar_fullfill_container21");
let navbar_fullfill_container22 = document.getElementById("navbar_fullfill_container22");
let navbar_fullfill_container23 = document.getElementById("navbar_fullfill_container23");
let navbar_fullfill_container24 = document.getElementById("navbar_fullfill_container24");
let tick_img_holder21 = document.querySelector("#tick_img_holder21");
let tick_img_holder22 = document.querySelector("#tick_img_holder22");
let tick_img_holder23 = document.querySelector("#tick_img_holder23");
let tick_img_holder24 = document.querySelector("#tick_img_holder24");

function showdaa21(){
    tick_img_holder21.style.display= "block";
}
function showdaa22(){
    tick_img_holder22.style.display= "block";
}
function showdaa23(){
    tick_img_holder23.style.display= "block";
}
function showdaa24(){
    tick_img_holder24.style.display= "block";
}
navbar_fullfill_container21.addEventListener("click", showdaa21);
navbar_fullfill_container22.addEventListener("click", showdaa22);
navbar_fullfill_container23.addEventListener("click", showdaa23);
navbar_fullfill_container24.addEventListener("click", showdaa24);





// week2 image uploader 
document.getElementById('img_upload_container').addEventListener('change', function(event) {
    let img_show = document.getElementById("preview");

    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = document.getElementById('preview');
        image.src = e.target.result;
        img_show.style.display="block";
        document.getElementById('certificate_preview').style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
  


// post support slide popup 

let submit_form_button = document.getElementById("submit_form_button");
let connect_popup_container_for_postsupport = document.querySelector("#connect_popup_container_for_postsupport");
function poppeup_for_post_support(){
  connect_popup_container_for_postsupport.style.animationPlayState='running';
  connect_popup_container_for_postsupport.style.display = 'block';
    // connect_popup_container_for_postsupport.style.backgroundColor='red';

}

submit_form_button.addEventListener("click", poppeup_for_post_support);
