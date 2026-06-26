const fs = require('fs');
const path = require('path');

const root = __dirname;
const dataDir = path.join(root, 'data');
const outputPortfolioDir = path.join(root, 'portfolio');

function readJSON(filename) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, filename), 'utf8'));
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function createHead(title) {
  return `<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <link rel="stylesheet" href="css/input.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cairo:wght@200..1000&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="icon" type="image/x-icon" href="/images/icon-white.png">
  <script>
    /*to prevent Firefox FOUC, this must be here*/
    let FF_FOUC_FIX;
  </script>
</head>
<body>
`;
}

function createNav() {
  return `  <nav>
    <a href="index.html" class="navHome"><img src="images/icon.png" class="navIcon"></a>
    <ul>
      <li class="roundedBorder navButton"><a href="index.html"><span>home</span></a></li>
      <li class="roundedBorder navButton"><a href="contact.html"><span>contact</span></a></li>
      <li onmouseenter="showNavDropdown()" onmouseleave="hideNavDropdown()" class="roundedBorder navButton" id="navDropdown">
        <span>my work</span>
        <img src="/images/right-down.png">
        <ul class="navDropdown hidden" id="navResumeHover">
          <li><a href="work-history.html"><span>Work History</span></a></li>
          <li><a href="portfolio.html"><span>Portfolio</span></a></li>
          <li><a href="gallery.html"><span>Gallery</span></a></li>
        </ul>
      </li>
    </ul>
    <a class="nav-resume-link" href="https://www.canva.com/design/DAGGsK8M3-U/0Xf7XVwtH6o743Ho4LMOGA/view?utm_content=DAGGsK8M3-U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h947a04a415" target="_blank">
      <div class="nav-resume-dl">
        <span>download resume</span>
        <img src="images/downloadicon.png" class="resume-icon">
        <img src="images/downloadicon-white.png" class="resume-icon-white resume-icon">
      </div>
    </a>
  </nav>
`;
}

function createFooter() {
  return `  <footer>
    <div class="block center fit flex justify-space-evenly">
      <div>
        <h1 class="block-header no-y-margin">I look forward to us working together!</h1>
        <h2 class="block-header2">feel free to contact me through my socials below.</h2>
      </div>
      <div>
        <h2 class="highlight-header">NAVIGATION</h2>
        <div class="horizontal-line"></div>
        <ul class="footer-list">
          <li><a href="index.html">Home.</a></li>
          <li><a href="contact.html">Contact.</a></li>
          <li><a href="work-history.html">Work History.</a></li>
          <li><a href="portfolio.html">Portfolio.</a></li>
          <li><a href="gallery.html">Gallery.</a></li>
        </ul>
      </div>
      <div>
        <h2 class="highlight-header">INFORMATION</h2>
        <div class="horizontal-line"></div>
        <ul class="footer-list">
          <li><span class="footer-info-title">Name: </span><span class="footer-info-information">Stanley Buenaventura</span></li>
          <li><span class="footer-info-title">Date of birth: </span><span class="footer-info-information">19.11.2004</span></li>
          <li><span class="footer-info-title">Email: </span><span class="footer-info-information">sg.buenaventura04@gmail.com</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-line center"></div>
    <div class="block center flex justify-space-between" id="footer-attribution">
      <h2 class="highlight-header">© Created by Stanley Buenaventura</h2>
      <h2 class="highlight-header">All rights Reserved</h2>
    </div>
  </footer>
`;
}

function createWorkHistoryPage(groups) {
  const sections = groups.map(group => {
    const itemsHtml = group.items.map(item => `      <div class="flex inline justify-space-evenly center work-history-div">
        <div class="work-history-margin work-history-info">
          <h2 class="highlight-header no-y-margin work-history-highlight">${item.company}</h2>
          <h2 class="highlight-header no-y-margin work-history-date work-history-highlight">${item.date}</h2>
        </div>
        <div class="flex flex-flow-column work-history-point">
          <div class="work-history-top-cap"></div>
          <div class="work-history-line"></div>
        </div>
        <div class="work-history-body work-history-margin">
          <h1 class="work-history-title no-y-margin">${item.title}</h1>
          <h2 class="block-header2 text-justify">${item.description}</h2>
        </div>
      </div>`).join('\r\n');
    return `      <div class="work-history-segment-title center flex">
        <h1 class="fit work-history-header font-a text-color-a uppercase">${group.title}.</h1>
        <div class="work-history-segment-line"></div>
      </div>
${itemsHtml}`;
  }).join('\r\n');

  return `${createHead('Personal Website | Work History')}
${createNav()}
  <div id="content">
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="blockRibbon font-b text-color-d">
${sections}
    </div>
  </div>
${createFooter()}
  <!--Scripts-->
  <script src="https://unpkg.com/typeit/dist/index.umd.js"></script>
  <script src="js/index.js"></script>
  <script src="js/nav.js"></script>
</body>
</html>
`;
}

function getPrimaryImage(item) {
  return Array.isArray(item.images) && item.images.length > 0 ? item.images[0] : item.image;
}

function createProjectOverlay(item) {
  const images = Array.isArray(item.images) && item.images.length > 0 ? item.images : [item.image];
  const slides = images.map((image, idx) => `            <div class="carousel-slide${idx === 0 ? ' active' : ''}">
              <img src="${image}" alt="${item.title} image ${idx + 1}">
            </div>`).join('\r\n');

  return `        <div class="gallery-view gallery-layer gallery-hidden" id="project-${item.slug}" onclick="closeProject('project-${item.slug}')">
          <div class="gallery-view-block" onclick="event.stopPropagation()">
            <button class="gallery-back-button" type="button" onclick="closeProject('project-${item.slug}')">×</button>
            <div class="carousel-container">
${slides}
              <button class="carousel-button carousel-prev" onclick="changeSlide('project-${item.slug}', -1)">&#10094;</button>
              <button class="carousel-button carousel-next" onclick="changeSlide('project-${item.slug}', 1)">&#10095;</button>
            </div>
            <h2 class="block-header2 font-a text-center">${item.title}</h2>
          </div>
        </div>`;
}

function createGalleryPage(items) {
  const galleryItems = items.map(item => {
    const thumb = getPrimaryImage(item);
    return `        <div class="gallery-block">
          <img class="gallery-image" src="${thumb}" alt="${item.title}" onclick="openProject('project-${item.slug}')">
          <h2 class="block-header2 font-a text-center">${item.title}</h2>
        </div>`;
  }).join('\r\n');

  const overlays = items.map(item => createProjectOverlay(item)).join('\r\n');

  return `${createHead('Personal Website | Gallery')}
${createNav()}
  <div id="content">
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="block center">
      <h1 class="center fit block-header font-a">gallery.</h1>
      <h2 class="center fit block-header2 font-a">here are a collection of projects from the portfolio.</h2>
      <div class="flex-wrap-gallery center gallery flex justify-space-evenly">
${galleryItems}
      </div>
    </div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
  </div>
${overlays}
${createFooter()}
  <!--Scripts-->
  <script src="https://unpkg.com/typeit/dist/index.umd.js"></script>
  <script src="js/index.js"></script>
  <script src="js/nav.js"></script>
  <script src="js/gallery.js"></script>
</body>
</html>
`;
}

function createPortfolioCard(item, idx) {
  const thumb = getPrimaryImage(item);
  const layout = idx % 2 === 0 ? 'slide-left' : 'slide-right';
  const justifyClass = idx % 2 === 0 ? 'justify-right' : 'justify-left';
  const lineClass = idx % 2 === 0 ? 'portfolio-right-margin' : 'portfolio-left-margin';
  const linkHtml = item.link ? `<a class="portfolio-view-project highlight-header ${idx % 2 === 0 ? 'float-right' : ''}" href="${item.link}" target="_blank">> View Project</a>` : '';
  return `      <div class="portfolio-item ${layout}">
        <div class="flex inline">
          ${idx % 2 === 0 ? `<div class="portfolio-line ${lineClass} no-y-margin"></div>` : ''}
          <h1 class="portfolio-header font-b lower-case no-y-margin">${item.title}</h1>
          ${idx % 2 !== 0 ? `<div class="portfolio-line ${lineClass} no-y-margin"></div>` : ''}
        </div>
        <div class="portfolio-image flex ${justifyClass}">
          ${idx % 2 !== 0 ? `<img src="${thumb}" alt="${item.title}" onclick="openProject('project-${item.slug}')">` : ''}
          <div>
            <h2 class="${idx % 2 === 0 ? 'right-margin text-right' : 'left-margin text-left'} highlight-header font-c">${item.year}</h2>
            <h2 class="${idx % 2 === 0 ? 'right-margin text-right' : 'left-margin text-left'} highlight-header font-c">${item.roles.join(', ')}</h2>
            <h2 class="font-a text-color-d ${idx % 2 === 0 ? 'right-margin text-right' : 'left-margin text-left'} block-header2 font-c portfolio-text">${item.description}</h2>
            ${linkHtml}
          </div>
          ${idx % 2 === 0 ? `<img src="${thumb}" alt="${item.title}" onclick="openProject('project-${item.slug}')">` : ''}
        </div>
      </div>`;
}

function createPortfolioPage(items) {
  const games = items.filter(item => item.type === 'games');
  const web = items.filter(item => item.type === 'web');
  const gamesHtml = games.map((item, idx) => createPortfolioCard(item, idx)).join('\r\n');
  const webHtml = web.map((item, idx) => createPortfolioCard(item, idx)).join('\r\n');
  const overlays = items.map(item => createProjectOverlay(item)).join('\r\n');

  return `${createHead('Personal Website | Portfolio')}
${createNav()}
  <div id="content">
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="block fit center">
      <h1 class="center fit block-header font-a">games portfolio.</h1>
      <h2 class="center fit block-header2 font-a">here are my favorite game projects that i've worked on in the past.</h2>
    </div>
    <div class="spacer"></div>
    <div class="block center portfolio-div">
${gamesHtml}
    </div>
    <div class="spacer"></div>
    <div class="block fit center">
      <h1 class="center fit block-header font-a">website portfolio.</h1>
      <h2 class="center fit block-header2 font-a">here are my website projects that i've worked on in the past.</h2>
    </div>
    <div class="spacer"></div>
    <div class="block center portfolio-div">
${webHtml}
    </div>
    <div class="spacer"></div>
    <div class="spacer"></div>
  </div>
${overlays}
${createFooter()}
  <!--Scripts-->
  <script src="https://unpkg.com/typeit/dist/index.umd.js"></script>
  <script src="js/index.js"></script>
  <script src="js/nav.js"></script>
  <script src="js/gallery.js"></script>
</body>
</html>
`;
}

function createProjectPage(item) {
  const rolesHtml = item.roles.map(role => `<li>${role}</li>`).join('');
  const linkHtml = item.link ? `<a class="portfolio-view-project highlight-header" href="${item.link}" target="_blank">> View Project</a>` : '';
  return `${createHead(`${item.title} | Portfolio`)}
${createNav()}
  <div id="content">
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="block center portfolio-div">
      <div class="portfolio-item slide-left">
        <div class="flex inline">
          <div class="portfolio-line portfolio-right-margin no-y-margin"></div>
          <h1 class="portfolio-header font-b lower-case no-y-margin">${item.title}</h1>
        </div>
        <div class="portfolio-image flex justify-right">
          <div>
            <h2 class="right-margin text-right highlight-header font-c">${item.year}</h2>
            <h2 class="right-margin text-right highlight-header font-c">${item.roles.join(', ')}</h2>
            <h2 class="font-a text-color-d right-margin text-right block-header2 font-c portfolio-text">${item.description}</h2>
            ${linkHtml}
            <a class="portfolio-view-project highlight-header" href="../portfolio.html">> Back to Portfolio</a>
          </div>
          <img src="${item.image}" alt="${item.title}">
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="spacer"></div>
  </div>
${createFooter()}
  <script src="https://unpkg.com/typeit/dist/index.umd.js"></script>
  <script src="js/index.js"></script>
  <script src="js/nav.js"></script>
</body>
</html>
`;
}

function ensureOutputDirectories() {
  if (!fs.existsSync(outputPortfolioDir)) {
    fs.mkdirSync(outputPortfolioDir, { recursive: true });
  }
}

function generate() {
  const portfolioData = readJSON('portfolio.json');
  const workHistoryData = readJSON('work-history.json');

  const galleryHtml = createGalleryPage(portfolioData);
  const portfolioHtml = createPortfolioPage(portfolioData);
  const workHistoryHtml = createWorkHistoryPage(workHistoryData);

  ensureOutputDirectories();

  writeFile(path.join(root, 'gallery.html'), galleryHtml);
  writeFile(path.join(root, 'portfolio.html'), portfolioHtml);
  writeFile(path.join(root, 'work-history.html'), workHistoryHtml);

  portfolioData.forEach(item => {
    const outputPath = path.join(outputPortfolioDir, `${item.slug}.html`);
    writeFile(outputPath, createProjectPage(item));
  });

  console.log('Static pages generated: gallery.html, portfolio.html, work-history.html, and individual portfolio pages in portfolio/');
}

generate();
