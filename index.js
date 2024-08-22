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
