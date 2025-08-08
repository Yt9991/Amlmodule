// Document ready function
$(document).ready(function() {
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 80,
            },
            500,
            'linear'
        );
    });
    
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500, 'linear');
        return false;
    });
    
    // Mobile menu toggle
    $('.mobile-menu-toggle').click(function() {
        $('.navbar-collapse').toggleClass('show');
    });
    
    // Dashboard sidebar toggle for mobile
    $('.sidebar-toggle').click(function() {
        $('.dashboard-sidebar').toggleClass('active');
    });
    
    // Simulate form submission
    $('.demo-form').submit(function(e) {
        e.preventDefault();
        var form = $(this);
        var submitBtn = form.find('button[type="submit"]');
        
        // Show loading state
        submitBtn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...');
        submitBtn.prop('disabled', true);
        
        // Simulate API call
        setTimeout(function() {
            // Show success message
            form.find('.form-content').hide();
            form.find('.success-message').show();
            
            // Reset form after 3 seconds
            setTimeout(function() {
                form.trigger('reset');
                form.find('.form-content').show();
                form.find('.success-message').hide();
                submitBtn.html('Submit');
                submitBtn.prop('disabled', false);
            }, 3000);
        }, 1500);
    });
    
    // Initialize any carousels
    $('.carousel').carousel({
        interval: 5000,
        pause: 'hover'
    });
    
    // Animation on scroll
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position) {
                $(this).addClass('animated');
            }
        });
    }
    
    // Run on load and scroll
    animateOnScroll();
    $(window).scroll(function() {
        animateOnScroll();
    });
    
    // Theme switcher (for dashboard)
    $('.theme-switcher').click(function() {
        $('body').toggleClass('dark-theme');
        localStorage.setItem('theme', $('body').hasClass('dark-theme') ? 'dark' : 'light');
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-theme');
    }
    
    // Dashboard chart simulation (would be replaced with actual chart library in production)
    if ($('#complianceChart').length) {
        // In a real implementation, this would initialize a chart using Chart.js or similar
        console.log('Compliance chart would be initialized here');
    }
});

// Google Sign-In simulation
function simulateLogin(role) {
    // Show loading state
    $('.btn-google').addClass('disabled');
    $('.btn-google span').text('Signing in...');
    
    // Simulate Google Sign-In delay
    setTimeout(function() {
        if (role === 'agency') {
            window.location.href = 'agency-dashboard.html';
        } else {
            window.location.href = 'sales-dashboard.html';
        }
    }, 1500);
}

// Traditional login function
function traditionalLogin() {
    const username = $('#username').val();
    const password = $('#password').val();
    
    if (username === 'agency' && password === 'password') {
        window.location.href = 'agency-dashboard.html';
    } else if (username === 'sales' && password === 'password') {
        window.location.href = 'sales-dashboard.html';
    } else {
        alert('Invalid credentials. Please try again or use the demo credentials provided.');
    }
}