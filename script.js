const icons = [
    // Row 1
    [
        { name: 'html', img: '<img class="icon logos-img" src="https://api.iconify.design/devicon:html5.svg" alt="HTML5">' },
        { name: 'css', img: '<img class="icon logos-img" src="https://api.iconify.design/devicon:css3.svg" alt="CSS3">' },
        { name: 'javascript', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:javascript.svg" alt="JavaScript">' },
        { name: 'typescript', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:typescript-icon.svg" alt="TypeScript">' },
        { name: 'react', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:react.svg" alt="React">' },
        { name: 'next', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:nextjs-icon.svg" alt="Next.js">' }
    ],
    // Row 2
    [
        { name: 'node', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:nodejs-icon.svg" alt="Node.js">' },
        { name: 'npm', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:npm-icon.svg" alt="npm">' },
        { name: 'mongo', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:mongodb-icon.svg" alt="MongoDB">' },
        { name: 'postgres', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:postgresql.svg" alt="PostgreSQL">' },
        { name: 'docker', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:docker-icon.svg" alt="Docker">' },
        { name: 'figma', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:figma.svg" alt="Figma">' }
    ],
    // Row 3
    [
        { name: 'git', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:git-icon.svg" alt="Git">' },
        { name: 'github', img: '<img class="logos-img" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub">' },
        { name: 'gitlab', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:gitlab-icon.svg" alt="GitLab">' },
        { name: 'terminal', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:bash-icon.svg" alt="Terminal">' },
        { name: 'vite', img: '<img class="icon vite-img" src="https://api.iconify.design/logos:vitejs.svg" alt="Vite logo">' },
        { name: 'mysql', img: '<img class="icon logos-img" src="https://api.iconify.design/logos:mysql-icon.svg" alt="MySQL">' }
    ]
];

function renderGrid() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    const squareSize = 100; // Desired square size in pixels
    const gap = 12;
    const padding = 40; // Total horizontal padding
    
    // Calculate number of columns that fit
    const availableWidth = window.innerWidth - padding;
    let cols = Math.floor(availableWidth / (squareSize + gap));
    
    // Ensure minimum columns to fit content
    if (cols < 6) cols = 6;

    // Update grid style
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    const contentWidth = 6;
    const startCol = Math.floor((cols - contentWidth) / 2);

    // Generate rows
    icons.forEach((rowIcons, rowIndex) => {
        for (let c = 0; c < cols; c++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');

            // Check if this cell should contain an icon
            if (c >= startCol && c < startCol + contentWidth) {
                const iconIndex = c - startCol;
                const iconData = rowIcons[iconIndex];
                if (iconData) {
                    div.classList.add(iconData.name);
                    div.innerHTML = iconData.img;
                } else {
                    div.classList.add('empty');
                }
            } else {
                div.classList.add('empty');
            }
            gridContainer.appendChild(div);
        }
    });
}

// Initial render
renderGrid();

// Re-render on resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(renderGrid, 100);
});
