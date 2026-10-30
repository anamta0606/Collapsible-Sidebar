
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const pageContent = document.getElementById("pageContent");

const navLinks = document.querySelectorAll(".nav-link");

// Collapse and expand sidebar
toggleBtn.addEventListener("click", function () {
    if (window.innerWidth <= 600) {
        sidebar.classList.remove("mobile-open");
        overlay.classList.remove("show");
    } else {
        sidebar.classList.toggle("collapsed");
    }
});

// Open sidebar on mobile
mobileMenu.addEventListener("click", function () {
    sidebar.classList.toggle("mobile-open");
    overlay.classList.toggle("show");
});

// Close sidebar by clicking overlay
overlay.addEventListener("click", function () {
    sidebar.classList.remove("mobile-open");
    overlay.classList.remove("show");
});

// Content for each link
const pages = {
    Home: `
        <h1>Dashboard</h1>
        <p class="welcome">Welcome to your dashboard!</p>
        <section class="welcome-card">
            <h2>Hello, User!</h2>
            <p>Welcome to your dashboard. Select an option from the sidebar.</p>
        </section>
    `,

    Products: `
        <h1>Products</h1>
        <p class="welcome">Manage your products here.</p>
        <section class="welcome-card">
            <h2>My Products</h2>
            <p>Your product information will appear here.</p>
        </section>
    `,

    Analytics: `
        <h1>Analytics</h1>
        <p class="welcome">View your dashboard statistics.</p>
        <section class="welcome-card">
            <h2>Dashboard Statistics</h2>
            <p>Your analytics information will appear here.</p>
        </section>
    `,

    Settings: `
        <h1>Settings</h1>
        <p class="welcome">Customize your preferences.</p>
        <section class="welcome-card">
            <h2>General Settings</h2>
            <p>Manage your dashboard preferences here.</p>
        </section>
    `,

    Profile: `
        <h1>My Profile</h1>
        <p class="welcome">View your profile information.</p>
        <section class="welcome-card">
            <h2>User Profile</h2>
            <p>Your profile information will appear here.</p>
        </section>
    `
};

// Handle sidebar link clicks
navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const name = link.querySelector(".link-text")
            .textContent.trim();

        if (pages[name]) {
            pageContent.innerHTML = pages[name];
        }

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Close mobile sidebar after selection
        if (window.innerWidth <= 600) {
            sidebar.classList.remove("mobile-open");
            overlay.classList.remove("show");
        }
    });
});
