const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

// Hamburger button, logo and menu:
const menuBtn = document.getElementById('menu-btn');
const logo = document.getElementById('logo');
const menu = document.getElementById('menu');

// Tabs menu event listener
tabs.forEach((tab) => {
  tab.addEventListener('click', onTabClick);
});

menuBtn.addEventListener('click', navToggle);

function navToggle() {
  menuBtn.classList.toggle('open');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    menu.classList.add('hidden');
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
}

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    );
  });

  // Hide all panels
  panels.forEach((panel) => {
    panel.classList.add('hidden');
  });

  // Activate a new tab and panel based on the target
  e.target.classList.add('border-softRed', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden');
}
