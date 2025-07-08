let brandRules = {};

document.addEventListener('DOMContentLoaded', () => {
  fetch('brand-rules.json')
    .then(r => r.json())
    .then(data => {
      brandRules = data;
      new BrandComplianceChecker();
      new GlossaryManager();
    })
    .catch(err => {
      console.error('Failed to load brand rules:', err);
    });
});

