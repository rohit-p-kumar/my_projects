// Sidebar toggle variables
const menuToggler = document.querySelector(".menu-toggler");
const sideBar = document.querySelector(".side-bar");

// Page navigation variables
const navItemLinks = document.querySelectorAll(".nav li a");
const pages = document.querySelectorAll(".page");  

// Variables for filtering
const filterBtn = document.querySelectorAll(".filter-item");
const itemCategory = document.querySelectorAll(".item-category");

// Toggling sidebar in mobile
menuToggler.addEventListener("click", function() {
    sideBar.classList.toggle("active");
})

// Page navigation functionality
for(let i = 0; i < navItemLinks.length; i++) {

    // Onclick event for nav links
    navItemLinks[i].addEventListener("click", function() {

        // Collected nav links innertext
        const itemLinkText = this.textContent.toLowerCase();

        // Defined page and add active class
        for(let i = 0; i < pages.length; i++) {

            // Defining page condition
            if(pages[i].classList.contains(itemLinkText)) { 
                // Add active class on current page
                pages[i].classList.add("active");
                // Add active class on clicked nav link
                navItemLinks[i].classList.add("active");
            } else {
                // Remove active classes from other pages
                pages[i].classList.remove("active");
                // Remove active class from other nav links
                navItemLinks[i].classList.remove("active");
            }
        }
    });  
}


// Added eventlistener in filter buttons

for(let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function() {

        // Remove all active classes from filter button

        for(let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].classList.remove("active");
        }
        // Added active class on filter button clicked
        this.classList.add("active");

        // Show item based on filter button click
        for(let i = 0; i < itemCategory.length; i++) {
            const itemCategoryText = itemCategory[i].textContent;
            switch(this.textContent) {
                case itemCategoryText:
                    itemCategory[i].parentElement.classList.add("active");
                    break;
                    case 'All':
                        itemCategory[i].parentElement.classList.add("active");
                        break;
                        default:
                            itemCategory[i].parentElement.classList.remove("active");
            }
        }
    })
}