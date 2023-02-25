var sections = document.querySelectorAll('section');
console.log(sections);

window.addEventListener('scroll', checkSections);

checkSections();

function checkSections() {
  var trigger = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    var sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < trigger) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  })
};
