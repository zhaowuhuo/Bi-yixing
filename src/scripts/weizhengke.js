function toggleCat(id, row) {
  const body = document.getElementById(id);
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  row.classList.toggle('open', !isOpen);
}

function toggleGroup(id, row) {
  const body = document.getElementById(id);
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  row.classList.toggle('open', !isOpen);
}

function toggleNavGroup(btn) {
  const group = btn.closest('.nav-group');
  const isCollapsed = group.classList.contains('collapsed');
  group.classList.toggle('collapsed', !isCollapsed);
  btn.querySelector('.nav-toggle').textContent = isCollapsed ? '-' : '+';
}

window.toggleCat = toggleCat;
window.toggleGroup = toggleGroup;
window.toggleNavGroup = toggleNavGroup;
