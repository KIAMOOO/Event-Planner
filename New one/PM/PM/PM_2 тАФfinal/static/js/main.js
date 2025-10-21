// Toy Planner - Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Add smooth entrance animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe venue cards for animation
    const venueCards = document.querySelectorAll('.venue-main-card');
    venueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Add floating animation to hero elements
    const heroElements = document.querySelectorAll('.hero-main h1, .hero-main p');
    heroElements.forEach((el, index) => {
        el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s both`;
    });

    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn-quick-request, .btn-contact, .btn-details');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
    });

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle (if needed in future)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Form validation helpers
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    });

    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.opacity = '0';
            setTimeout(() => {
                alert.remove();
            }, 300);
        }, 5000);
    });

    // Number formatting for prices
    const priceElements = document.querySelectorAll('.price, .venue-price');
    priceElements.forEach(element => {
        const price = element.textContent.replace(/[^\d]/g, '');
        if (price) {
            element.textContent = parseInt(price).toLocaleString() + ' KZT';
        }
    });

    // Venue card hover effects
    const venueCards = document.querySelectorAll('.venue-card, .event-card');
    venueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Initialize date picker with minimum date
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
    });

    // Guest count validation for venue capacity
    const guestCountInputs = document.querySelectorAll('#guest_count');
    guestCountInputs.forEach(input => {
        const min = input.getAttribute('min');
        const max = input.getAttribute('max');
        
        input.addEventListener('input', function() {
            const value = parseInt(this.value);
            if (min && value < parseInt(min)) {
                this.setCustomValidity(`Minimum capacity is ${min} guests`);
            } else if (max && value > parseInt(max)) {
                this.setCustomValidity(`Maximum capacity is ${max} guests`);
            } else {
                this.setCustomValidity('');
            }
        });
    });

    // Phone number formatting
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.startsWith('7')) {
                value = '+7 ' + value.substring(1);
            } else if (value.startsWith('8')) {
                value = '+7 ' + value.substring(1);
            }
            
            // Format as +7 XXX XXX XXXX
            if (value.length > 2) {
                value = value.substring(0, 2) + ' ' + value.substring(2);
            }
            if (value.length > 6) {
                value = value.substring(0, 6) + ' ' + value.substring(6);
            }
            if (value.length > 10) {
                value = value.substring(0, 10) + ' ' + value.substring(10, 14);
            }
            
            this.value = value;
        });
    });

    // Loading states for buttons
    const submitButtons = document.querySelectorAll('button[type="submit"]');
    submitButtons.forEach(button => {
        const form = button.closest('form');
        if (form) {
            form.addEventListener('submit', function() {
                button.innerHTML = '<span style="display: inline-block; animation: spin 1s linear infinite;">⏳</span> Processing...';
                button.disabled = true;
            });
        }
    });

    // Venue search suggestions
    const searchInputs = document.querySelectorAll('.venue-search');
    searchInputs.forEach(input => {
        let timeout;
        input.addEventListener('input', function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                // Implement search suggestions here if needed
            }, 300);
        });
    });

    // Initialize tooltips if any
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Filter tabs functionality - Enhanced version
    function initializeFilters() {
        const filterTabs = document.querySelectorAll('.tab-btn');
        const venuesGrid = document.querySelector('.venues-main-grid');
        
        if (!venuesGrid) {
            console.log('Venues grid not found, retrying in 100ms...');
            setTimeout(initializeFilters, 100);
            return;
        }
        
        let allVenues = Array.from(venuesGrid.querySelectorAll('.venue-main-card'));
        
        if (allVenues.length === 0) {
            console.log('No venue cards found, retrying in 100ms...');
            setTimeout(initializeFilters, 100);
            return;
        }
        
        console.log(`Found ${allVenues.length} venue cards for filtering`);
        
        // Debug: Log venue data attributes
        allVenues.forEach((venue, index) => {
            const price = venue.dataset.price;
            const capacity = venue.dataset.capacity;
            const district = venue.dataset.district;
            const eventTypes = venue.dataset.eventTypes;
            console.log(`Venue ${index + 1}:`, { price, capacity, district, eventTypes });
        });
        
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Get filter type
                const filterType = this.dataset.filter;
                console.log(`Applying filter: ${filterType}`);
                
                // Handle different filter types
                switch(filterType) {
                    case 'featured':
                        showAllVenues();
                        break;
                    case 'date':
                        showDateFilter();
                        break;
                    case 'price':
                        sortVenuesByPrice();
                        break;
                    case 'capacity':
                        sortVenuesByCapacity();
                        break;
                    case 'location':
                        showLocationFilter();
                        break;
                    case 'event_type':
                        showEventTypeFilter();
                        break;
                    case 'features':
                        showFeaturesFilter();
                        break;
                    default:
                        console.log(`Unknown filter type: ${filterType}`);
                }
            });
        });
        
        // Helper functions for filtering and sorting
        function showAllVenues() {
            const venuesGrid = document.querySelector('.venues-main-grid');
            allVenues = Array.from(document.querySelectorAll('.venue-main-card')); // Refresh the list
            
            // Clear current venues
            venuesGrid.innerHTML = '';
            
            // Show all venues in original order
            allVenues.forEach(venue => {
                venuesGrid.appendChild(venue);
            });
            
            // Re-attach event listeners
            reattachEventListeners();
            showFilterFeedback('Showing all venues');
        }

        function sortVenuesByPrice() {
            const venuesGrid = document.querySelector('.venues-main-grid');
            const venues = Array.from(venuesGrid.querySelectorAll('.venue-main-card'));
            
            venues.sort((a, b) => {
                const priceA = parseInt(a.dataset.price) || 0;
                const priceB = parseInt(b.dataset.price) || 0;
                return priceA - priceB; // Sort from lowest to highest
            });
            
            // Clear and re-append sorted venues
            venuesGrid.innerHTML = '';
            venues.forEach(venue => {
                venuesGrid.appendChild(venue);
            });
            
            // Re-attach event listeners
            reattachEventListeners();
            
            // Show feedback
            showFilterFeedback('Venues sorted by price (lowest to highest)');
        }

        function sortVenuesByCapacity() {
            const venuesGrid = document.querySelector('.venues-main-grid');
            const venues = Array.from(venuesGrid.querySelectorAll('.venue-main-card'));
            
            venues.sort((a, b) => {
                const capacityA = parseInt(a.dataset.capacity) || 0;
                const capacityB = parseInt(b.dataset.capacity) || 0;
                return capacityB - capacityA; // Sort by largest capacity first
            });
            
            // Clear and re-append sorted venues
            venuesGrid.innerHTML = '';
            venues.forEach(venue => {
                venuesGrid.appendChild(venue);
            });
            
            // Re-attach event listeners
            reattachEventListeners();
            
            // Show feedback
            showFilterFeedback('Venues sorted by capacity (largest to smallest)');
        }

        function showLocationFilter() {
            const venuesGrid = document.querySelector('.venues-main-grid');
            const venues = Array.from(venuesGrid.querySelectorAll('.venue-main-card'));
            
            // Group by district
            const districts = {};
            venues.forEach(venue => {
                const district = venue.dataset.district || 'Unknown';
                if (!districts[district]) {
                    districts[district] = [];
                }
                districts[district].push(venue);
            });
            
            // Sort districts alphabetically and re-arrange venues
            const sortedDistricts = Object.keys(districts).sort();
            venuesGrid.innerHTML = '';
            
            sortedDistricts.forEach(district => {
                districts[district].forEach(venue => {
                    venuesGrid.appendChild(venue);
                });
            });
            
            // Re-attach event listeners
            reattachEventListeners();
            
            // Show feedback
            showFilterFeedback(`Venues grouped by location (${sortedDistricts.join(', ')})`);
        }

        function showEventTypeFilter() {
            const venuesGrid = document.querySelector('.venues-main-grid');
            const venues = Array.from(venuesGrid.querySelectorAll('.venue-main-card'));
            
            // Filter venues that support weddings first
            const weddingVenues = venues.filter(venue => {
                const eventTypes = venue.dataset.eventTypes || '';
                return eventTypes.includes('wedding');
            });
            
            const otherVenues = venues.filter(venue => {
                const eventTypes = venue.dataset.eventTypes || '';
                return !eventTypes.includes('wedding');
            });
            
            // Clear and show wedding venues first
            venuesGrid.innerHTML = '';
            [...weddingVenues, ...otherVenues].forEach(venue => {
                venuesGrid.appendChild(venue);
            });
            
            // Re-attach event listeners
            reattachEventListeners();
            
            // Show feedback
            showFilterFeedback('Wedding venues shown first, then other event types');
        }

        function showFeaturesFilter() {
            const venuesGrid = document.querySelector('.venues-main-grid');
            const venues = Array.from(venuesGrid.querySelectorAll('.venue-main-card'));
            
            // Sort by price (premium venues first)
            venues.sort((a, b) => {
                const priceA = parseInt(a.dataset.price) || 0;
                const priceB = parseInt(b.dataset.price) || 0;
                return priceB - priceA; // Sort from highest to lowest (premium first)
            });
            
            // Clear and re-append sorted venues
            venuesGrid.innerHTML = '';
            venues.forEach(venue => {
                venuesGrid.appendChild(venue);
            });
            
            // Re-attach event listeners
            reattachEventListeners();
            
            // Show feedback
            showFilterFeedback('Premium venues with best features shown first');
        }

        function showDateFilter() {
            // For now, just show a message
            showFilterFeedback('Date filtering: Please use the booking page to check venue availability for specific dates');
        }

        function showFilterFeedback(message) {
            // Remove existing feedback
            const existingFeedback = document.querySelector('.filter-feedback');
            if (existingFeedback) {
                existingFeedback.remove();
            }
            
            // Create feedback element
            const feedback = document.createElement('div');
            feedback.className = 'filter-feedback';
            feedback.textContent = message;
            feedback.style.cssText = `
                background: linear-gradient(135deg, var(--accent-green) 0%, #3A6B1F 100%);
                color: white;
                padding: 1rem 2rem;
                border-radius: 50px;
                margin-bottom: 2rem;
                text-align: center;
                font-weight: 600;
                box-shadow: 0 10px 30px rgba(45, 80, 22, 0.3);
                animation: fadeInUp 0.5s ease-out;
            `;
            
            // Insert before venues grid
            const venuesGrid = document.querySelector('.venues-main-grid');
            venuesGrid.parentNode.insertBefore(feedback, venuesGrid);
            
            // Auto-remove after 4 seconds
            setTimeout(() => {
                if (feedback.parentNode) {
                    feedback.style.opacity = '0';
                    feedback.style.transform = 'translateY(-20px)';
                    setTimeout(() => feedback.remove(), 300);
                }
            }, 4000);
        }

        function reattachEventListeners() {
            // Re-attach quick request functionality
            const quickRequestBtns = document.querySelectorAll('.btn-quick-request');
            quickRequestBtns.forEach(btn => {
                btn.replaceWith(btn.cloneNode(true));
            });
            
            const newQuickRequestBtns = document.querySelectorAll('.btn-quick-request');
            newQuickRequestBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const venueCard = this.closest('.venue-main-card');
                    const venueName = venueCard.querySelector('.venue-main-title').textContent;
                    alert(`Quick request sent for ${venueName}! We'll contact you within 2 hours.`);
                });
            });

            // Re-attach contact buttons functionality
            const contactBtns = document.querySelectorAll('.btn-contact');
            contactBtns.forEach(btn => {
                btn.replaceWith(btn.cloneNode(true));
            });
            
            const newContactBtns = document.querySelectorAll('.btn-contact');
            newContactBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const venueCard = this.closest('.venue-main-card');
                    const venueName = venueCard.querySelector('.venue-main-title').textContent;
                    alert(`Contact information for ${venueName}:\nPhone: +7 727 XXX XXXX\nEmail: info@venue.kz`);
                });
            });
            
            // Re-attach ripple effects
            const allButtons = document.querySelectorAll('.btn-quick-request, .btn-contact, .btn-details');
            allButtons.forEach(button => {
                button.addEventListener('click', createRipple);
            });
        }
    }
    
    // Initialize filters when DOM is ready
    initializeFilters();

    // Quick request functionality
    const quickRequestBtns = document.querySelectorAll('.btn-quick-request');
    quickRequestBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Get venue name from the card
            const venueCard = this.closest('.venue-main-card');
            const venueName = venueCard.querySelector('.venue-main-title').textContent;
            
            // Simple alert for now (can be replaced with modal)
            alert(`Quick request sent for ${venueName}! We'll contact you within 2 hours.`);
        });
    });

    // Contact buttons functionality
    const contactBtns = document.querySelectorAll('.btn-contact');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Get venue info
            const venueCard = this.closest('.venue-main-card');
            const venueName = venueCard.querySelector('.venue-main-title').textContent;
            
            // Show contact info (can be enhanced with actual contact details)
            alert(`Contact information for ${venueName}:\nPhone: +7 727 XXX XXXX\nEmail: info@venue.kz`);
        });
    });

    // Load more venues functionality
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.innerHTML = '<span style="display: inline-block; animation: spin 1s linear infinite;">⏳</span> Loading...';
            
            // Simulate loading more venues
            setTimeout(() => {
                this.textContent = 'Show More Venues';
                // In real implementation, this would load more venues via AJAX
            }, 1000);
        });
    }

    // Initialize feedback functionality
    initializeFeedbackSystem();

    console.log('🎭 Toy Planner initialized successfully!');
});

// Feedback Modal Functions
function openFeedbackModal() {
    document.getElementById('feedbackModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeFeedbackModal() {
    document.getElementById('feedbackModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function initializeFeedbackSystem() {
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const feedbackModal = document.getElementById('feedbackModal');
        const successModal = document.getElementById('successModal');
        
        if (event.target === feedbackModal) {
            closeFeedbackModal();
        }
        if (event.target === successModal) {
            closeSuccessModal();
        }
    });

    // Handle form submission
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate required fields
            const name = document.getElementById('feedback-name').value.trim();
            const email = document.getElementById('feedback-email').value.trim();
            const feedbackType = document.getElementById('feedback-type').value;
            const rating = document.querySelector('input[name="rating"]:checked');
            const message = document.getElementById('feedback-message').value.trim();
            
            if (!name || !email || !feedbackType || !rating || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span style="display: inline-block; animation: spin 1s linear infinite;">⏳</span> Submitting...';
            submitBtn.disabled = true;
            
            // Submit the form
            const formData = new FormData(this);
            
            fetch(this.action, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Close feedback modal and show success modal
                    closeFeedbackModal();
                    document.getElementById('successModal').style.display = 'block';
                    
                    // Reset form
                    this.reset();
                    updateRatingText();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your feedback. Please try again.');
            })
            .finally(() => {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }

    // Handle star rating
    const starInputs = document.querySelectorAll('input[name="rating"]');
    const ratingText = document.querySelector('.rating-text');
    
    starInputs.forEach(input => {
        input.addEventListener('change', updateRatingText);
    });
    
    function updateRatingText() {
        const selectedRating = document.querySelector('input[name="rating"]:checked');
        if (selectedRating && ratingText) {
            const value = selectedRating.value;
            const texts = {
                '1': 'Poor',
                '2': 'Fair', 
                '3': 'Good',
                '4': 'Very Good',
                '5': 'Excellent'
            };
            ratingText.textContent = `${value} star${value > 1 ? 's' : ''} - ${texts[value]}`;
        } else if (ratingText) {
            ratingText.textContent = 'Click to rate';
        }
    }

    // Check for success hash in URL
    if (window.location.hash === '#feedback-success') {
        document.getElementById('successModal').style.display = 'block';
        // Remove the hash from URL
        history.replaceState(null, null, window.location.pathname);
    }
}

// Make functions globally available
window.openFeedbackModal = openFeedbackModal;
window.closeFeedbackModal = closeFeedbackModal;
window.closeSuccessModal = closeSuccessModal;

// CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
