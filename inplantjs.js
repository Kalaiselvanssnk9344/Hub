
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


// update and upload posters 


let getinvalue = document.getElementById("getinvalue");
let getinvalue2 = document.getElementById("getinvalue2");
let getinvalue3 = document.getElementById("getinvalue3");
let getinvalue4 = document.getElementById("getinvalue4");
let textplace = document.getElementById("textplace");

let update_post_value = document.getElementById("update_post_value");

function updatevalues(){
    let inputvalues = getinvalue.value;
    getinvalue.textContent = inputvalues;
    getinvalue.style.border='none';
    getinvalue.style.backgroundColor='transparent';

    let inputvalues2 = getinvalue2.value;
    getinvalue2.textContent = inputvalues2;
    getinvalue2.style.border='none';
    getinvalue2.style.backgroundColor='transparent';

    let inputvalues3 = getinvalue3.value;
    getinvalue3.textContent = inputvalues3;
    getinvalue3.style.border='none';
    getinvalue3.style.backgroundColor='transparent';

    let inputvalues4 = getinvalue4.value;
    getinvalue4.textContent = inputvalues4;
    getinvalue4.style.border='none';
    getinvalue4.style.backgroundColor='transparent';

    let areatext = textplace.value;
    textplace.textContent = areatext;
    textplace.style.border='none';
    textplace.style.backgroundColor='transparent';
}


update_post_value.addEventListener("click", updatevalues);



// week2 image uploader 
document.getElementById('img_upload_container2').addEventListener('change', function(event) {
    let img_show = document.getElementById("previeww2");

    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = document.getElementById('previeww2');
        image.src = e.target.result;
        img_show.style.display="block";
        document.getElementById('certificate_previeww2').style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
  


