console.log('Debris sparks script loaded!');

// Function to get color under mouse cursor
function getColorUnderMouse(x, y) {
    const elementUnderMouse = document.elementFromPoint(x, y);
    
    if (elementUnderMouse) {
        console.log('Element under mouse:', elementUnderMouse.tagName, elementUnderMouse.className);
        const computedStyle = window.getComputedStyle(elementUnderMouse);
        
        // Special handling for links - prefer body/page background over link colors
        if (elementUnderMouse.tagName === 'A' || elementUnderMouse.closest('a')) {
            console.log('Clicked near/on a link, using page background');
            const bodyStyle = window.getComputedStyle(document.body);
            if (bodyStyle.backgroundColor && 
                bodyStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' && 
                bodyStyle.backgroundColor !== 'transparent') {
                console.log('Using body background:', bodyStyle.backgroundColor);
                return bodyStyle.backgroundColor;
            }
            // If body has no background, try html element
            const htmlStyle = window.getComputedStyle(document.documentElement);
            if (htmlStyle.backgroundColor && 
                htmlStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' && 
                htmlStyle.backgroundColor !== 'transparent') {
                console.log('Using html background:', htmlStyle.backgroundColor);
                return htmlStyle.backgroundColor;
            }
            // Fallback to white for links
            console.log('Using white fallback for link area');
            return '#FFFFFF';
        }
        
        // Check multiple color sources in priority order
        const colorSources = [
            computedStyle.backgroundColor,
            computedStyle.borderColor,
            computedStyle.color,
            computedStyle.outlineColor
        ];
        
        console.log('Color sources:', colorSources);
        
        for (let color of colorSources) {
            if (color && 
                color !== 'rgba(0, 0, 0, 0)' && 
                color !== 'transparent' && 
                color !== 'initial' && 
                color !== 'inherit' &&
                !color.includes('rgba(0, 0, 0, 0)')) {
                console.log('Using color:', color);
                return color;
            }
        }
        
        // If element has a background image, use a complementary color
        if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
            console.log('Found background image, using blue');
            return '#4ECDC4';
        }
        
        // Check parent elements for color, but skip link parents
        let parent = elementUnderMouse.parentElement;
        while (parent && parent !== document.body) {
            // Skip if parent is a link
            if (parent.tagName === 'A') {
                parent = parent.parentElement;
                continue;
            }
            
            const parentStyle = window.getComputedStyle(parent);
            if (parentStyle.backgroundColor && 
                parentStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' && 
                parentStyle.backgroundColor !== 'transparent') {
                console.log('Using parent color:', parentStyle.backgroundColor);
                return parentStyle.backgroundColor;
            }
            parent = parent.parentElement;
        }
        
        // Try body background as final attempt
        const bodyStyle = window.getComputedStyle(document.body);
        if (bodyStyle.backgroundColor && 
            bodyStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' && 
            bodyStyle.backgroundColor !== 'transparent') {
            console.log('Using body background as fallback:', bodyStyle.backgroundColor);
            return bodyStyle.backgroundColor;
        }
    }
    
    // Enhanced fallback: create more interesting colors based on position and time
    const hue = ((x * 0.5 + y * 0.3 + Date.now() * 0.001) * 137.5) % 360;
    const saturation = 60 + (x % 40);
    const lightness = 45 + (y % 30);
    const fallbackColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    console.log('Using fallback color:', fallbackColor);
    return fallbackColor;
}

// Create different chunk shapes
function createChunkElement(type, size, color) {
    const chunk = document.createElement('div');
    chunk.className = 'debris-chunk';
    
    const baseStyles = {
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: '999',
        background: color,
        boxShadow: `0 2px 4px rgba(0,0,0,0.3), 0 0 4px ${color}`,
        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))'
    };
    
    switch(type) {
        case 'square':
            Object.assign(chunk.style, baseStyles, {
                width: size + 'px',
                height: size + 'px',
                borderRadius: '2px'
            });
            break;
            
        case 'triangle':
            Object.assign(chunk.style, baseStyles, {
                width: '0',
                height: '0',
                background: 'transparent',
                borderLeft: (size/2) + 'px solid transparent',
                borderRight: (size/2) + 'px solid transparent',
                borderBottom: size + 'px solid ' + color,
                boxShadow: 'none', // Remove conflicting box-shadow for triangles
                filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.4))'
            });
            break;
            
        case 'rectangle':
            const width = size * (0.6 + Math.random() * 0.8);
            const height = size * (0.3 + Math.random() * 0.4);
            Object.assign(chunk.style, baseStyles, {
                width: width + 'px',
                height: height + 'px',
                borderRadius: '1px'
            });
            break;
            
        case 'diamond':
            Object.assign(chunk.style, baseStyles, {
                width: size + 'px',
                height: size + 'px',
                borderRadius: '2px',
                transform: 'rotate(45deg)',
                transformOrigin: 'center'
            });
            break;
    }
    
    return chunk;
}

document.addEventListener('click', function(e) {
    console.log('Creating debris and sparks at:', e.pageX, e.pageY);
    
    // Get color from under mouse
    const sampledColor = getColorUnderMouse(e.clientX, e.clientY);
    console.log('Sampled color:', sampledColor);
    
    // Spark colors
    const sparkColors = ['#FFD700', '#eea826ff', '#f8ce59ff', '#a7d145ff'];
    
    // Debris chunk types
    const chunkTypes = ['square', 'triangle', 'rectangle', 'diamond'];
    
    // Offset values
    const offsetX = 15;
    const offsetY = 15;
    
    // Create sparks (existing code)
    const numSparks = 8;
    for (let i = 0; i < numSparks; i++) {
        const spark = document.createElement('div');
        const color = sparkColors[Math.floor(Math.random() * sparkColors.length)];
        const angle = (Math.PI * 2 * i) / numSparks + Math.random() * 0.5;
        const initialSpeed = Math.random() * 3 + 2;
        const size = Math.random() * 3 + 2;
        const lifetime = 80;
        
        let velocityX = Math.cos(angle) * initialSpeed;
        let velocityY = Math.sin(angle) * initialSpeed - 1;
        const gravity = 0.12;
        const friction = 0.99;
        
        let posX = e.pageX - size/2 + offsetX;
        let posY = e.pageY - size/2 + offsetY;
        
        spark.style.position = 'absolute';
        spark.style.left = posX + 'px';
        spark.style.top = posY + 'px';
        spark.style.width = size + 'px';
        spark.style.height = size + 'px';
        spark.style.borderRadius = '50%';
        spark.style.boxShadow = `0 0 6px ${color}`;
        spark.style.background = color;
        spark.style.borderRadius = '50%';
        spark.style.pointerEvents = 'none';
        spark.style.zIndex = '1000';
        spark.style.opacity = '1';
        
        document.body.appendChild(spark);
        
        let frame = 0;
        function animateSpark() {
            frame++;
            velocityY += gravity;
            velocityX *= friction;
            velocityY *= friction;
            
            posX += velocityX;
            posY += velocityY;

            // Check boundaries relative to document, not just viewport
            const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const buffer = -10;

            // Calculate visible document bounds
            const leftBound = scrollX - buffer;
            const rightBound = scrollX + windowWidth + buffer;
            const topBound = scrollY - buffer;
            const bottomBound = scrollY + windowHeight + buffer;

            if (posX < leftBound || posX > rightBound || 
                posY < topBound || posY > bottomBound) {
                if (spark.parentNode) { // or chunk.parentNode for chunks
                    spark.parentNode.removeChild(spark);
                }
                return;
            }
            
            spark.style.left = posX + 'px';
            spark.style.top = posY + 'px';
            
            spark.style.left = posX + 'px';
            spark.style.top = posY + 'px';

            // Update comet tail based on current velocity
            const trailLength = 15; // Start with a small value and adjust
            spark.style.boxShadow = `
                0 0 6px ${color}, 
                ${-velocityX * trailLength}px ${-velocityY * trailLength}px 8px ${color},
                ${-velocityX * trailLength * 2}px ${-velocityY * trailLength * 2}px 12px rgba(${color.replace('#', '').match(/.{1,2}/g).map(hex => parseInt(hex, 16)).join(',')}, 0.5)
            `;
            
            const opacity = Math.max(0, 1 - (frame / lifetime));
            spark.style.opacity = opacity;
            const scale = Math.max(0.1, 1 - (frame / lifetime));
            spark.style.transform = `scale(${scale})`;
            
            if (frame < lifetime && opacity > 0) {
                requestAnimationFrame(animateSpark);
            } else {
                if (spark.parentNode) {
                    spark.parentNode.removeChild(spark);
                }
            }
        }
        requestAnimationFrame(animateSpark);
    }
    
    // Create debris chunks
    const numChunks = 6;
    for (let i = 0; i < numChunks; i++) {
        const chunkType = chunkTypes[Math.floor(Math.random() * chunkTypes.length)];
        const size = Math.random() * 8 + 4;
        const mass = size * 0.3; // mass affects physics
        const chunk = createChunkElement(chunkType, size, sampledColor);
        
        const angle = (Math.PI * 2 * i) / numChunks + Math.random() * 1;
        const initialSpeed = Math.random() * 2 + 1;
        const lifetime = 120; // chunks last longer
        
        let velocityX = Math.cos(angle) * initialSpeed;
        let velocityY = Math.sin(angle) * initialSpeed - 0.5;
        
        // Physics based on mass
        const gravity = 0.06 * mass; // heavier chunks fall faster
        const airResistance = 0.98 - (mass * 0.01); // heavier chunks have less air resistance
        
        let posX = e.pageX + offsetX;
        let posY = e.pageY + offsetY;
        let rotation = Math.random() * 360;
        let rotationSpeed = (Math.random() - 0.5) * 10;
        
        // Position chunk
        if (chunkType === 'triangle') {
            chunk.style.left = (posX - size/2) + 'px';
            chunk.style.top = (posY - size) + 'px';
        } else {
            chunk.style.left = (posX - size/2) + 'px';
            chunk.style.top = (posY - size/2) + 'px';
        }
        
        document.body.appendChild(chunk);
        
        let frame = 0;
        function animateChunk() {
            frame++;
            
            // Apply physics
            velocityY += gravity;
            velocityX *= airResistance;
            velocityY *= airResistance;
            
            // Update position
            posX += velocityX;
            posY += velocityY;

            // Check boundaries relative to document, not just viewport
            const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const buffer = -10;

            // Calculate visible document bounds
            const leftBound = scrollX - buffer;
            const rightBound = scrollX + windowWidth + buffer;
            const topBound = scrollY - buffer;
            const bottomBound = scrollY + windowHeight + buffer;

            if (posX < leftBound || posX > rightBound || 
                posY < topBound || posY > bottomBound) {
                if (chunk.parentNode) { // or chunk.parentNode for chunks
                    chunk.parentNode.removeChild(chunk);
                }
                return;
            }

            rotation += rotationSpeed;
            
            // Update DOM
            chunk.style.left = (posX - size/2) + 'px';
            chunk.style.top = (posY - size/2) + 'px';
            
            // Apply rotation (except for triangles which look weird)
            if (chunkType !== 'triangle') {
                chunk.style.transform = `rotate(${rotation}deg)`;
            } else if (chunkType === 'diamond') {
                chunk.style.transform = `rotate(${45 + rotation}deg)`;
            }
            
            // Fade out
            const opacity = Math.max(0, 1 - (frame / lifetime));
            chunk.style.opacity = opacity;
            
            // Continue or cleanup
            if (frame < lifetime && opacity > 0) {
                requestAnimationFrame(animateChunk);
            } else {
                if (chunk.parentNode) {
                    chunk.parentNode.removeChild(chunk);
                }
            }
        }
        requestAnimationFrame(animateChunk);
    }
});

