/* Generate random stars
function generateStars() {
    const numStars = 100; // Adjust the number of stars
    const starContainer = document.querySelector('.star-background');

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`; // Adjust animation delay
        starContainer.appendChild(star);
    }
}


// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateStars);

*/


// CONTENT OF TYPED.NOTES

document.addEventListener("DOMContentLoaded", function() {
    const topicTitles = document.querySelectorAll('.topic-title');

    topicTitles.forEach(title => {
        title.addEventListener('click', function() {
            const subTopics = this.nextElementSibling;

            if (subTopics.style.display === 'block') {
                subTopics.style.display = 'none';
            } else {
                subTopics.style.display = 'block';
            }
        });
    });

    const subTopicLinks = document.querySelectorAll('.sub-topics li a');

    subTopicLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const title = this.getAttribute('data-title');
            const content = this.getAttribute('data-content');
            showContent(title, content);
        });
    });
});

function showContent(title, content) {
    const heading = document.getElementById('content-heading');
    const paragraph = document.getElementById('content-text');

    heading.innerText = title;
    paragraph.innerText = content;
}



/*   TIPS.JS   */
document.addEventListener("DOMContentLoaded", function() {
    const tipInput = document.getElementById("tip-input");
    const addTipBtn = document.getElementById("add-tip-btn");
    const tipsList = document.getElementById("tips-list");

    // Load tips from local storage
    loadTips();

    addTipBtn.addEventListener("click", function() {
        const tipText = tipInput.value.trim();

        if (tipText !== "") {
            // Create a new tip object
            const newTip = {
                id: Date.now(),
                text: tipText
            };

            // Add the new tip to the tips array
            addTip(newTip);

            // Display the new tip in the UI
            displayTip(newTip);

            // Clear the input field after adding the tip
            tipInput.value = "";
        }
    });

    function loadTips() {
        const savedTips = JSON.parse(localStorage.getItem("tips")) || [];
        savedTips.forEach(tip => {
            displayTip(tip);
        });
    }

    function addTip(newTip) {
        const savedTips = JSON.parse(localStorage.getItem("tips")) || [];
        savedTips.push(newTip);
        localStorage.setItem("tips", JSON.stringify(savedTips));
    }

    function displayTip(tip) {
        const tipItem = document.createElement("li");
        tipItem.innerHTML = `
            <span class="tip-text">${tip.text}</span>
            <div>
                <button class="edit-tip-btn">Edit</button>
                <button class="delete-tip-btn">Delete</button>
            </div>
        `;
        tipsList.appendChild(tipItem);

        const deleteBtn = tipItem.querySelector(".delete-tip-btn");
        deleteBtn.addEventListener("click", function() {
            deleteTip(tip.id);
            tipItem.remove();
        });

        const editBtn = tipItem.querySelector(".edit-tip-btn");
        editBtn.addEventListener("click", function() {
            const newTipText = prompt("Edit your tip:", tip.text);
            if (newTipText !== null && newTipText.trim() !== "") {
                tip.text = newTipText.trim();
                updateTip(tip);
                tipItem.querySelector(".tip-text").innerText = newTipText.trim();
            }
        });
    }

    function deleteTip(tipId) {
        const savedTips = JSON.parse(localStorage.getItem("tips")) || [];
        const updatedTips = savedTips.filter(tip => tip.id !== tipId);
        localStorage.setItem("tips", JSON.stringify(updatedTips));
    }

    function updateTip(updatedTip) {
        const savedTips = JSON.parse(localStorage.getItem("tips")) || [];
        const tipIndex = savedTips.findIndex(tip => tip.id === updatedTip.id);
        if (tipIndex > -1) {
            savedTips[tipIndex] = updatedTip;
            localStorage.setItem("tips", JSON.stringify(savedTips));
        }
    }
});



/*PROJECT JS*/


document.addEventListener("DOMContentLoaded", function () {
    const projectForm = document.getElementById('projectForm');
    const projectName = document.getElementById('projectName');
    const projectDescription = document.getElementById('projectDescription');
    const projectPrice = document.getElementById('projectPrice');
    const projectsList = document.getElementById('projects');

    const prewrittenProjects = [
        {
            name: "Weather App",
            description: "A simple weather forecasting app.",
            price: 1500
        },
        {
            name: "ToDo List",
            description: "An application to manage daily tasks.",
            price: 1200
        }
    ];

    prewrittenProjects.forEach(project => addProjectToDOM(project.name, project.description, project.price));

    projectForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = projectName.value;
        const description = projectDescription.value;
        const price = projectPrice.value;

        if (name && description && price) {
            addProjectToDOM(name, description, price);
            projectName.value = '';
            projectDescription.value = '';
            projectPrice.value = '';
        }
    });

    function addProjectToDOM(name, description, price) {
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-item');
        
        const projectDetails = document.createElement('div');
        projectDetails.classList.add('project-details');
        projectDetails.innerHTML = `<h4>${name}</h4><p>${description}</p><p>Price: ₹${price}</p>`;
        
        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Buy';
        
        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.textContent = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';

        projectItem.appendChild(projectDetails);
        projectItem.appendChild(buyButton);
        projectItem.appendChild(editButton);
        projectItem.appendChild(deleteButton);
        projectsList.appendChild(projectItem);

        deleteButton.addEventListener('click', function () {
            projectsList.removeChild(projectItem);
        });

        editButton.addEventListener('click', function () {
            projectName.value = name;
            projectDescription.value = description;
            projectPrice.value = price;
            projectsList.removeChild(projectItem);
        });
    }
});


// Function to handle click on "Semester 1"
function redirectToSemester1() {
    window.location.href = 'semester1.html';
}

// Event listener for "Semester 1"
document.addEventListener('DOMContentLoaded', function() {
    const semester1Link = document.querySelector('.small-box[data-semester="1"]');
    semester1Link.addEventListener('click', redirectToSemester1);
});


/*SEARCH BAR*/ 


      const searchContent = {
        "notes": "notes.html",
        "projects": "projects.html",
        "tips": "tips.html",
        "handwritten notes": "handwritten-notes.html",
        "typed notes": "typed-notes.html"
      };

      function performSearch() {
        const input = document.getElementById('search-input').value.toLowerCase().trim();
        const resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = ''; // Clear previous results

        if (searchContent[input]) {
          resultsDiv.innerHTML = `<p>Result found: <a href="${searchContent[input]}">${input}</a></p>`;
        } else {
          resultsDiv.innerHTML = `<p style="color: red;">Nothing found for "${input}". Please try again.</p>`;
        }
      }
    

    