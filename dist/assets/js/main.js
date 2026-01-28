// Header Scroll Detection
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Active Page Detection
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    const linkHref = link.getAttribute('href');
    
    // Remove active class first
    link.classList.remove('active');
    
    // Check if current path matches link path
    if (currentPath === linkPath || 
        (currentPath === '/' && (linkHref === '/' || linkHref.includes('index'))) ||
        (linkPath === '/' && currentPath.includes('index')) ||
        (currentPath.endsWith(linkPath) && linkPath !== '/') ||
        (linkPath !== '/' && currentPath.includes(linkPath.replace(/^\//, '').replace(/\.html$/, '')))) {
      link.classList.add('active');
    }
  });
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  let isMenuOpen = false;
  
  if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
    mobileMenuButton.addEventListener('click', function() {
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        mobileMenu.style.display = 'block';
        // Trigger animation
        setTimeout(() => {
          mobileMenu.classList.add('open');
        }, 10);
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        // Trigger close animation
        mobileMenu.classList.remove('open');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        setTimeout(() => {
          mobileMenu.style.display = 'none';
        }, 300); // Match transition duration
      }
    });
    
    // Close mobile menu when clicking on a navigation link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-phone-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Close menu
        isMenuOpen = false;
        mobileMenu.classList.remove('open');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        setTimeout(() => {
          mobileMenu.style.display = 'none';
        }, 300);
      });
    });
  }
  
  // Set active nav link on page load
  setActiveNavLink();

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // Collection Tabs
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Here you would filter the collection items
      // For static site, we'll just update the visual state
    });
  });

  // Smooth scroll for anchor links
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


  // Scroll to Top Button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
      } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
      }
    });

    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Set current year in footer
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // About page scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Animate value cards
  const valueCards = document.querySelectorAll('.about-value-card');
  valueCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Animate testimonial cards
  const testimonialCards = document.querySelectorAll('.about-testimonial-card');
  testimonialCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
  });

  // Collection page tab filtering
  const collectionTabs = document.querySelectorAll('.collection-tab-button');
  const collectionCategories = document.querySelectorAll('.collection-category-card');
  
  if (collectionTabs.length > 0 && collectionCategories.length > 0) {
    collectionTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active tab styling
        collectionTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Filter categories
        collectionCategories.forEach(category => {
          const categoryType = category.getAttribute('data-category');
          
          if (filter === 'all' || categoryType === filter) {
            category.classList.remove('hidden');
            // Smooth reveal
            setTimeout(() => {
              category.style.opacity = '1';
            }, 10);
          } else {
            category.style.opacity = '0';
            setTimeout(() => {
              category.classList.add('hidden');
            }, 300);
          }
        });
      });
    });
  }

  // Contact page form validation and submission
  const contactForm = document.getElementById('contact-form');
  const contactSuccessMessage = document.getElementById('contact-success-message');
  const contactResetButton = document.getElementById('contact-reset-button');
  
  if (contactForm) {
    // Update reply-to field from email input
    const emailInput = contactForm.querySelector('input[name="email"]');
    const replyToField = contactForm.querySelector('input[name="_replyto"]');
    
    if (emailInput && replyToField) {
      emailInput.addEventListener('input', function() {
        replyToField.value = this.value;
      });
    }
    
    // Validation rules
    const validators = {
      name: (value) => {
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name can only contain letters and spaces';
        return '';
      },
      email: (value) => {
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        return '';
      },
      phone: (value) => {
        if (!value.trim()) return 'Phone number is required';
        const digits = value.replace(/\D/g, '');
        if (digits.length < 10) return 'Phone number must be at least 10 digits';
        return '';
      },
      message: (value) => {
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      }
    };

    // Show error
    function showError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const errorElement = document.getElementById(fieldId + '-error');
      
      if (field) field.classList.add('error');
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
      }
    }

    // Clear error
    function clearError(fieldId) {
      const field = document.getElementById(fieldId);
      const errorElement = document.getElementById(fieldId + '-error');
      
      if (field) field.classList.remove('error');
      if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
      }
    }

    // Validate field
    function validateField(fieldId) {
      const field = document.getElementById(fieldId);
      if (!field) return true;
      
      const validator = validators[fieldId];
      if (!validator) return true;
      
      const error = validator(field.value);
      if (error) {
        showError(fieldId, error);
        return false;
      } else {
        clearError(fieldId);
        return true;
      }
    }

    // Clear errors on input
    ['name', 'email', 'phone', 'message'].forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener('input', () => clearError(fieldId));
        field.addEventListener('blur', () => validateField(fieldId));
      }
    });

    // Form submission
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Validate all fields
      let isValid = true;
      ['name', 'email', 'phone', 'message'].forEach(fieldId => {
        if (!validateField(fieldId)) {
          isValid = false;
        }
      });

      if (!isValid) {
        // Focus first error field
        const firstError = contactForm.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      // Disable submit button and show loading
      const submitButton = document.getElementById('contact-submit-button');
      const submitText = submitButton.querySelector('.contact-submit-text');
      const submitIcon = submitButton.querySelector('.contact-submit-icon');
      
      submitButton.disabled = true;
      submitText.textContent = 'Sending...';
      submitIcon.style.display = 'none';

      // Submit to Formspree
      try {
        const formData = new FormData(contactForm);
        
        // Set reply-to from email field
        const emailValue = formData.get('email');
        if (emailValue) {
          formData.set('_replyto', emailValue);
        }
        
        // Submit to Formspree
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Hide form, show success message
          contactForm.style.display = 'none';
          contactSuccessMessage.style.display = 'block';
          
          // Reset form for next use
          contactForm.reset();
        } else {
          const data = await response.json();
          if (data.errors) {
            throw new Error(data.errors.map(err => err.message).join(', '));
          }
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Handle error
        console.error('Form submission error:', error);
        alert('Something went wrong. Please try again or call us at (615) 624-6928.');
        submitButton.disabled = false;
        submitText.textContent = 'Send Message';
        submitIcon.style.display = 'block';
      }
    });

    // Reset button
    if (contactResetButton) {
      contactResetButton.addEventListener('click', function() {
        contactSuccessMessage.style.display = 'none';
        contactForm.style.display = 'flex';
        contactForm.reset();
        
        // Clear all errors
        ['name', 'email', 'phone', 'message'].forEach(fieldId => {
          clearError(fieldId);
        });
      });
    }
  }

  // Store hours status
  function updateStoreHoursStatus() {
    const statusDot = document.getElementById('contact-status-dot');
    const statusText = document.getElementById('contact-status-text');
    
    if (!statusDot || !statusText) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;

    let isOpen = false;

    if (day === 0) {
      // Sunday: 10 AM - 11 PM (10:00 - 22:59)
      isOpen = currentTime >= 600 && currentTime < 1379;
    } else {
      // Monday-Saturday: 8 AM - 11 PM (8:00 - 22:59)
      isOpen = currentTime >= 480 && currentTime < 1379;
    }

    if (isOpen) {
      statusDot.classList.remove('closed');
      statusText.textContent = 'Open Now';
    } else {
      statusDot.classList.add('closed');
      statusText.textContent = 'Currently Closed';
    }
  }

  // Update store hours status on load and every minute
  updateStoreHoursStatus();
  setInterval(updateStoreHoursStatus, 60000); // Update every minute

  // Home page store hours status
  function updateHomeStoreHoursStatus() {
    const statusDot = document.getElementById('home-status-dot');
    const statusText = document.getElementById('home-status-text');
    
    if (!statusDot || !statusText) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;

    let isOpen = false;

    if (day === 0) {
      // Sunday: 10 AM - 11 PM (10:00 - 22:59)
      isOpen = currentTime >= 600 && currentTime < 1379;
    } else {
      // Monday-Saturday: 8 AM - 11 PM (8:00 - 22:59)
      isOpen = currentTime >= 480 && currentTime < 1379;
    }

    if (isOpen) {
      statusDot.classList.remove('closed');
      statusText.textContent = 'Open Now';
    } else {
      statusDot.classList.add('closed');
      statusText.textContent = 'Closed';
    }
  }

  // Update home store hours status on load and every minute
  updateHomeStoreHoursStatus();
  setInterval(updateHomeStoreHoursStatus, 60000);

  // Home page FAQ accordion
  function initFAQ() {
    const homeFaqItems = document.querySelectorAll('.home-faq-item');
    
    if (homeFaqItems.length > 0) {
      homeFaqItems.forEach((item, index) => {
        const question = item.querySelector('.home-faq-question');
        const answer = item.querySelector('.home-faq-answer');
        
        if (question && answer) {
          // Set initial state
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
          answer.style.paddingTop = '0';
          answer.style.paddingBottom = '0';
          
          question.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items first
            homeFaqItems.forEach(faqItem => {
              const faqAnswer = faqItem.querySelector('.home-faq-answer');
              const faqQuestion = faqItem.querySelector('.home-faq-question');
              
              if (faqItem !== item) {
                faqItem.classList.remove('active');
                if (faqAnswer) {
                  faqAnswer.style.maxHeight = '0px';
                  faqAnswer.style.opacity = '0';
                  faqAnswer.style.paddingTop = '0';
                  faqAnswer.style.paddingBottom = '0';
                }
                if (faqQuestion) {
                  faqQuestion.setAttribute('aria-expanded', 'false');
                }
              }
            });
            
            // Toggle clicked item
            if (isActive) {
              // Close it
              item.classList.remove('active');
              answer.style.maxHeight = '0px';
              answer.style.opacity = '0';
              answer.style.paddingTop = '0';
              answer.style.paddingBottom = '0';
              question.setAttribute('aria-expanded', 'false');
            } else {
              // Open it
              item.classList.add('active');
              question.setAttribute('aria-expanded', 'true');
              
              // Get the actual height
              answer.style.maxHeight = 'none';
              answer.style.opacity = '1';
              answer.style.paddingTop = '0';
              answer.style.paddingBottom = '0';
              const height = answer.scrollHeight;
              
              // Reset and animate
              answer.style.maxHeight = '0px';
              answer.style.opacity = '0';
              
              // Force reflow
              void answer.offsetHeight;
              
              // Animate to full height
              requestAnimationFrame(() => {
                answer.style.maxHeight = height + 'px';
                answer.style.opacity = '1';
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '1.25rem';
              });
            }
          });
        }
      });
    }
  }
  
  // Initialize FAQ
  initFAQ();
});
