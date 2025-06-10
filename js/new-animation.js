/**
 * New Animation Implementation
 * Displays the animation from Animations folder with RARA text below
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get the logo container
  const logoDiv = document.querySelector("header .logo");
  if (!logoDiv) return;
  
  // Clear existing content
  logoDiv.innerHTML = "";
  
  // Create link to homepage
  const homeLink = document.createElement('a');
  homeLink.href = 'index.html';
  homeLink.className = 'home-link';
  homeLink.title = 'Povratak na početnu stranicu';
  
  // Create container for animation and text
  const logoContainer = document.createElement('div');
  logoContainer.className = 'logo-container';
  
  // Create animation container
  const animationContainer = document.createElement('div');
  animationContainer.id = 'lottie-container';
  animationContainer.className = 'lottie-container';
  
  // Create text element
  const logoText = document.createElement('div');
  logoText.className = 'logo-text';
  logoText.textContent = 'RARA';
  
  // Add elements to the page
  logoContainer.appendChild(animationContainer);
  logoContainer.appendChild(logoText);
  homeLink.appendChild(logoContainer);
  logoDiv.appendChild(homeLink);
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .home-link {
      text-decoration: none;
      cursor: pointer;
      transition: transform 0.2s ease;
      display: block;
    }
    
    .home-link:hover {
      transform: scale(1.05);
    }
    
    .home-link:active {
      transform: scale(0.98);
    }
    
    .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .lottie-container {
      width: 80px;
      height: 80px;
      margin-bottom: 5px;
      overflow: visible;
    }
    
    .logo-text {
      font-size: 18px;
      font-weight: bold;
      color: var(--primary-color);
      letter-spacing: 1px;
    }
  `;
  document.head.appendChild(style);
  
  // Load the Lottie script
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.6/lottie.min.js';
  script.onload = function() {
    // Initialize the animation after the script is loaded
    const animation = bodymovin.loadAnimation({
      container: document.getElementById('lottie-container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'Animations/Animation - 1749551213760.json'
    });
    
    // Log success or failure
    animation.addEventListener('DOMLoaded', function() {
      console.log('Animation loaded successfully');
    });
    
    animation.addEventListener('error', function(error) {
      console.error('Animation failed to load:', error);
    });
  };
  
  document.body.appendChild(script);
});
