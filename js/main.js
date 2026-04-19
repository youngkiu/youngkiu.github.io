document.addEventListener('DOMContentLoaded', function() {
    // ===========================
    // Smooth scrolling for anchor links
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // Header scroll effect
    // ===========================
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.pageYOffset > 50);
    });

    // ===========================
    // Bottom nav active state
    // ===========================
    const sections = document.querySelectorAll('section[id]');
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item[href^="#"]');

    if (sections.length && bottomNavItems.length) {
        const navObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    bottomNavItems.forEach(item => {
                        item.classList.toggle('active', item.getAttribute('href') === '#' + id);
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => navObserver.observe(section));
    }

    // ===========================
    // Category tab filtering
    // ===========================
    const categoryTabs = document.querySelectorAll('.category-tab');
    const appCategories = document.querySelectorAll('.app-category');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const cat = this.dataset.category;
            appCategories.forEach(section => {
                section.style.display = (cat === 'all' || section.dataset.category === cat) ? '' : 'none';
            });
        });
    });

    // ===========================
    // Scroll animations (IntersectionObserver)
    // ===========================
    const animObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.app-card, .section-title, .about-content, .category-title').forEach(el => {
        el.classList.add('animate-on-scroll');
        animObserver.observe(el);
    });
});
