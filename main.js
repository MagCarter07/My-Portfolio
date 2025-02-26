const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const sidemenu = document.getElementById("side-menu");

// Function to switch tabs when clicked
const openTab = (tabname, event) => {
    // Remove active classes from all tab links
    tabLinks.forEach(tablink => tablink.classList.remove("active-link"));

    // Remove active classes from all tab contents
    tabContents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    // Add active class to clicked tab link
    event.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
};

// Function to collapse and open side menu
const openMenu = () => {
    sidemenu.style.right = 0;
};

const closeMenu = () => {
    sidemenu.style.right = "-200px";
};

// Attach event listeners to each tab title
tabLinks.forEach(tab => {
    tab.addEventListener("click", (event) => {
        const tabname = event.currentTarget.textContent.toLowerCase().trim(); // Get tab name from text
        openTab(tabname, event);

        if (window.innerWidth < 768) {
           sidemenu.style.right = "-200px";
        }
    });
});

// Event listeners for open and close menu
document.getElementById("open-menu").addEventListener("click", openMenu);
document.getElementById("close-menu").addEventListener("click", closeMenu);

// Contact forms
const scriptURL = 'https://script.google.com/macros/s/AKfycbyl1caGS4bFMEFffbOIsUWugPYrYfufgKSSioDlcBCTbQgQyruTd8kvBRuzAt8l_sMzRg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.textContent = "Message sent successfully"
        setTimeout(() => {
            msg.textContent = "";
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })