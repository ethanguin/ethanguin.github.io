// Load the header first
fetch('/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-header').innerHTML = data;

    // Now that header exists, add scroll listener
    const header = document.querySelector("header");

    const updateShadow = () => {
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    // Initial check in case page is loaded scrolled down
    updateShadow();

    window.addEventListener("scroll", updateShadow);
  })
  .catch(err => console.error('Header load failed:', err));
