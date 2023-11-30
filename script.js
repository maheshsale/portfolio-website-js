const navLinks = document.querySelectorAll('.nav-options ul li');

navLinks.forEach( (link) => {
      link.addEventListener('click', function(){
            document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
      });
});