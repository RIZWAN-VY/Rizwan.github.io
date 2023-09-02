document.addEventListener("DOMContentLoaded", function () {
    // Select the "Project" link element
    const projectLink = document.querySelector('a[href="#project_section"]');
  
    // Add a click event listener to the link
    projectLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default behavior of the link
  
      // Get the target section's offsetTop
      const targetSection = document.querySelector("#project_section");
      const targetOffset = targetSection.offsetTop;
  
      // Scroll smoothly to the target section
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    });
  });
  