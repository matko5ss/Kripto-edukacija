document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const header = document.querySelector('header .container');
    const nav = document.querySelector('header nav');
    
    if (header && nav) {
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        
        // Create hamburger icon
        for (let i = 0; i < 3; i++) {
            const span = document.createElement('span');
            mobileMenuBtn.appendChild(span);
        }
        
        // Insert button before nav
        header.insertBefore(mobileMenuBtn, nav);
        
        // Toggle menu on button click
        mobileMenuBtn.addEventListener('click', function() {
            const navMenu = nav.querySelector('ul');
            navMenu.classList.toggle('show');
            
            // Toggle aria-expanded attribute
            const isExpanded = navMenu.classList.contains('show');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
            
            // Toggle hamburger animation
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const navMenu = nav.querySelector('ul');
            if (navMenu.classList.contains('show') && 
                !nav.contains(event.target) && 
                !mobileMenuBtn.contains(event.target)) {
                navMenu.classList.remove('show');
                mobileMenuBtn.setAttribute('aria-expanded', false);
                mobileMenuBtn.classList.remove('active');
            }
        });
        
        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            const navMenu = nav.querySelector('ul');
            if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                mobileMenuBtn.setAttribute('aria-expanded', false);
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
});
