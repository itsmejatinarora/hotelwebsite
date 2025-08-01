// navbar
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// home
function scrollToimageslider() {
  document.getElementById("imageslider").scrollIntoView({ behavior: "smooth" });
}

// restaurant & dinning section 
function scrollToReservation() {
  document.getElementById("reservation").scrollIntoView({ behavior: "smooth" });
}

// gallery section 
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// aboutus section 
function toggleText() {
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    btn.textContent = "Read Less";
  } else {
    moreText.classList.add("hidden");
    btn.textContent = "Read More";
  }
}
//booking section
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  alert(`Thanks ${name}! Your booking at GrandVista has been submitted.`);
  this.reset();
});

// location section 
function openInMaps() {
  window.open("https://www.google.com/maps?q=GrandVista+Hotel", "_blank");
}

// contact us section 
// Toggle FAQ answers
function toggleFAQ(el) {
  const answer = el.nextElementSibling;
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();

  if (!name || !email) {
    alert("Please fill out all required fields.");
    return;
  }

  alert(`Thank you ${name}, we'll get back to you soon!`);
  this.reset();
});

// footer section 
// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Set current year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});


