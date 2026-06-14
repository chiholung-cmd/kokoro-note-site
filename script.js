async function loadTests(){
  const res = await fetch('data.json');
  const data = await res.json();
  const grid = document.querySelector('#test-grid');
  if(!grid) return;
  grid.innerHTML = data.tests.map(test => `<a class="test-card" href="${test.url}">
    <img src="${test.image}" alt="${test.title}のイメージ画像" width="800" height="600" loading="lazy">
    <div class="test-card-content"><span class="tag">${test.category}</span><h3>${test.title}</h3><p>${test.description}</p></div>
  </a>`).join('');
}
loadTests();
