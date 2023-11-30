const aboutLink = document.getElementById('about-link');
const skillsLink = document.getElementById('skills-link');
const experienceLink = document.getElementById('experience-link');
const projectsLink = document.getElementById('projects-link');
const contactLink = document.getElementById('contact-link');

const contactInfo = document.getElementById('contact-info');

aboutLink.addEventListener('click', function(){
      document.getElementById('about-me-heading').scrollIntoView({behavior: 'smooth'});
});

skillsLink.addEventListener('click', function(){
      document.getElementById('skills-heading').scrollIntoView({behavior: 'smooth'});
});

experienceLink.addEventListener('click', function(){
      document.getElementById('skills-heading').scrollIntoView({behavior: 'smooth'});
});

projectsLink.addEventListener('click', function(){
      document.getElementById('projects-heading').scrollIntoView({behavior: 'smooth'});
});

contactLink.addEventListener('click', function(){
      document.getElementById('contact-me-heading').scrollIntoView({behavior: 'smooth'});
});


contactInfo.addEventListener('click', function(){
      document.getElementById('contact-me-heading').scrollIntoView({behavior: 'smooth'});
});