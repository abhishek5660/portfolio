document.addEventListener('DOMContentLoaded', function() {
  // Handle social media icon clicks
  const socialMediaLinks = document.querySelectorAll('.foot .item a');

  socialMediaLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const socialMedia = link.querySelector('img').alt;
          alert(`You clicked on ${socialMedia}`);
          window.open(link.href, '_blank');
      });
  });

  // Handle "View More" button click in Projects section
  const viewMoreButton = document.querySelector('.project .btn button');

  viewMoreButton.addEventListener('click', function() {
      alert('View more projects coming soon!');
  });
});

function toggleMenu() {
  const navItems = document.getElementById('nav-items');
  navItems.style.display = navItems.style.display === 'flex' ? 'none' : 'flex';
}
    function toggleMenu() {
        const navItems = document.getElementById('nav-items');
        navItems.classList.toggle('active');
    }

    const nameInput = document.getElementById("name-Input");
    const msgInput = document.getElementById("message-input");
    const callBtn = document.getElementById("call-btn");
    const mailBtn = document.getElementById("mail-btn");
    const chatBtn = document.getElementById("chat-btn");
    
    callBtn.addEventListener("click", () => {
      window.location.href = "tel:+918219472136";
    });
    
    mailBtn.addEventListener("click", () => {
      window.location.href = `mailto:abhishekkatoch50@gmail.com?body=${msgInput.value}`;
    });
    
    chatBtn.addEventListener("click", () => {
      window.location.href = `https://wa.me/+918219472136?text=${msgInput.value}`;
    });
