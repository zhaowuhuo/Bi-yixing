function switchTab(btn, dept, tab) {
  const card = btn.closest('.alert-card');
  card.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  ['p','d','a'].forEach(t => {
    const el = document.getElementById(dept + '-' + t);
    if (el) el.style.display = (t === tab) ? 'block' : 'none';
  });
}

function toggleList(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('show');
  const row = el.previousElementSibling;
  if (row) {
    const unit = row.querySelector('.tier-unit');
    if (unit) unit.textContent = el.classList.contains('show') ? '款 · 收起 ↑' : '款 · 展开 ↓';
  }
}

function toggleNavGroup(btn) {
  const group = btn.closest('.nav-group');
  if (!group) return;
  group.classList.toggle('collapsed');
  const icon = btn.querySelector('.nav-toggle');
  if (icon) icon.textContent = group.classList.contains('collapsed') ? '+' : '-';
}

function toggleAI() {
  document.getElementById('aiPanel').classList.toggle('show');
}

window.switchTab = switchTab;
window.toggleList = toggleList;
window.toggleNavGroup = toggleNavGroup;
window.toggleAI = toggleAI;
