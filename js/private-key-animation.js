document.addEventListener('DOMContentLoaded', function() {
    const privateKeyContainer = document.getElementById('private-key-animation');
    
    if (privateKeyContainer) {
        const animationOptions = {
            container: privateKeyContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../Animations/PrivateKey.json'
        };
        
        const privateKeyAnimation = lottie.loadAnimation(animationOptions);
    }
});
