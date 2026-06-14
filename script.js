async function loadHome(){
  const res = await fetch('data.json');
  const data = await res.json();
  const hero = document.querySelector('#hero-banners');
  const grid = document.querySelector('#test-grid');
  if(hero){
    hero.innerHTML = data.heroBanners.map(item => `
      <a class="hero-banner" href="${item.url}">
        <img src="${item.image}" alt="${item.title}" width="1200" height="900" loading="eager">
      </a>
    `).join('');
  }
  if(grid){
    grid.innerHTML = data.tests.map((test, i) => {
      const badgeClass = test.badge === '人気' ? 'popular' : test.badge === '新着' ? 'new' : test.badge === '急上昇' ? 'rise' : 'recommend';
      return `<a class="test-card" href="${test.url}">
        <div class="test-thumb"><span class="card-rank">${i+1}</span><img src="${test.image}" alt="${test.title}のイメージ画像" width="800" height="600" loading="lazy"></div>
        <div class="test-card-content"><div class="meta-row"><span class="badge ${badgeClass}">${test.badge}</span><span class="category-label">${test.category}</span><span class="views">${test.views}</span></div><h3>${test.title}</h3><p>${test.description}</p></div>
      </a>`;
    }).join('');
  }
}
loadHome();
