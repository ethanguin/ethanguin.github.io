document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    // Track mouse
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseover', e => {
    if (e.target.matches('a, button, .landing-links a, nav a, .site-nav a')) {
        cursor.classList.add('cursor-hover');
    }
    });

    document.addEventListener('mouseout', e => {
    if (e.target.matches('a, button, .landing-links a, nav a, .site-nav a')) {
        cursor.classList.remove('cursor-hover');
    }
    });


    // Select all links + buttons (including nav)
    const hoverElements = document.querySelectorAll('a, button, .landing-links a, nav a, .site-nav a');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            console.log("hovering:", el.textContent); // debug
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

    // Click effect
    document.addEventListener('mousedown', () => cursor.classList.add('cursor-click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('cursor-click'));
});
