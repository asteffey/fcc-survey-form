function hasFccTest() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.has('fcc-test');
}

if (hasFccTest()) {
  const script = document.createElement('script');
  script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';

  localStorage.setItem('project_selector', 'survey-form');
  document.body.appendChild(script);

}
