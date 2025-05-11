const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls'); 
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content'); // Changed to select the single main-content element


function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            // Remove 'active-btn' class from all buttons
            let currentBtn = document.querySelectorAll('.active-btn');
            if (currentBtn.length > 0) {
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            }
            this.className += ' active-btn';

            // Get the ID of the section to show
            const sectionId = this.dataset.id;

            // Hide all sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            // Show the selected section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');

                // Change the body background color to match the section
                document.body.style.backgroundColor = window.getComputedStyle(targetSection).backgroundColor;
            }
        });
    }
}

// Section click active class
allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // Remove 'active' class from all buttons
        sectBtn.forEach((btn) => {
            btn.classList.remove('active');
        });
        // Add 'active' class to the clicked button
        e.target.classList.add('active');
        
        // Hide all sections
        sections.forEach((section) => {
            section.classList.remove('active');
        });

        // Show the selected section
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});

// script.js
// set up text to print, each item in array is new line
var aText = new Array(
    "NISMA'S PORTFOLIO", 
    "Welcome to my website ^|^"
    
    );
    var iSpeed = 150; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("message");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
document.getElementById('tablet').addEventListener('click', function() {
    this.classList.toggle('zoomed');
    typewriter()
});


// -------------------------------------------------------------------------Particle effect-----------------------------------------------------------------------------------------

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 2,
          "color": ""
        },
        "polygon": {
          "nb_sides": 6
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
  }

);


// modal function: to call modals when bitton clicked instead of creating separate modal in the html file!
function showModal(modalId, title, body, videoUrl) {
  let modalTemplate = document.getElementById('exampleModal').cloneNode(true);
  modalTemplate.id = modalId;
  modalTemplate.querySelector('.modal-title').innerText = title;

  // Replace newline characters with <br> tags for proper line breaks
  let formattedBody = body.replace(/\n/g, '<br>');

  // Set the body content
  let modalBodyContent = `<p>${formattedBody}</p>`;

  // If a video URL is provided, embed the YouTube video
  if (videoUrl) {
    modalBodyContent += `
      <div class="video-container">
        <iframe 
          width="100%" 
          height="315" 
          src="${videoUrl}" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ; fullscreen">
        </iframe>
      </div>`;
  }

  modalTemplate.querySelector('.modal-body').innerHTML = modalBodyContent;

  document.body.appendChild(modalTemplate);

  let myModal = new bootstrap.Modal(modalTemplate);
  myModal.show();

  modalTemplate.addEventListener('hidden.bs.modal', function () {
  
    modalTemplate.remove();
  });
}




PageTransitions();



