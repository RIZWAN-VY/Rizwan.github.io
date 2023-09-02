document.addEventListener("DOMContentLoaded", function () {
    // Select the "contact" link element
    const contactLink = document.querySelector('a[href="#contact_section"]');
  
    // Add a click event listener to the link
    contactLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default behavior of the link
  
      // Get the target section's offsetTop
      const targetSection = document.querySelector("#contact_section");
      const targetOffset = targetSection.offsetTop;
  
      // Scroll smoothly to the target section
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    });
  });
  