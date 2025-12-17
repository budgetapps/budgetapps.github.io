// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data
      initMobileMenu()
    })

  // Load footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data
    })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#") {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all app cards and feature cards
  document.querySelectorAll(".app-card, .feature-card, .stat-card").forEach((card) => {
    observer.observe(card)
  })

  // Header scroll effect
  let lastScroll = 0
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset
    const header = document.querySelector(".header")

    if (header) {
      if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = "translateY(-100%)"
      } else {
        header.style.transform = "translateY(0)"
      }

      if (currentScroll > 50) {
        header.style.boxShadow = "0 2px 16px rgba(0,0,0,0.08)"
      } else {
        header.style.boxShadow = "none"
      }
    }

    lastScroll = currentScroll
  })
})

// Initialize mobile menu
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle")
  const menu = document.querySelector(".nav-menu")

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active")

      // Animate hamburger icon
      const spans = toggle.querySelectorAll("span")
      if (menu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translateY(8px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translateY(-8px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!toggle.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove("active")
        const spans = toggle.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }
}

// Add loading animation for images
document.querySelectorAll(".app-icon img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1"
  })
})
