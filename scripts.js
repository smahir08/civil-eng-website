// Theme data
const themes = [
   {
     id: "ai-digital",
     title: "AI and Digital Transformation in Engineering",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V7h-2v-.27A2 2 0 0 0 7 5a2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V11a1 1 0 0 0 1 1h3v1.27A2 2 0 0 0 8 15a2 2 0 0 0 2 2c.74 0 1.39-.4 1.73-1H13a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V8.73A2 2 0 0 0 19 7a2 2 0 0 0-2-2c-.74 0-1.39.4-1.73 1H15V5a1 1 0 0 0-1-1h-1.73A2 2 0 0 0 12 2z"></path><path d="M2 2v20h20"></path></svg>',
     description:
       "Exploring the integration of artificial intelligence and digital technologies in engineering practices.",
   },
   {
     id: "green-construction",
     title: "Sustainable and Green Construction",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22a8 8 0 0 1 8-8h12c0-4.4-3.6-8-8-8h-4c-4.4 0-8 3.6-8 8v8Z"></path><path d="M2 22h12a8 8 0 0 0 8-8"></path><path d="M9 10V6c0-1.7 1.3-3 3-3s3 1.3 3 3v4"></path></svg>',
     description: "Innovative approaches to sustainable building practices and green construction methodologies.",
   },
   {
     id: "circular-economy",
     title: "Circular Economy in Construction",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12c0 6-4.39 10-9.806 10C7.792 22 4.24 19.665 3 16"></path><path d="M2 12C2 6 6.39 2 11.806 2 16.209 2 19.76 4.335 21 8"></path><path d="M7 17l-4-1-1 4"></path><path d="M17 7l4 1 1-4"></path></svg>',
     description:
       "Implementing circular economy principles in construction to reduce waste and improve resource efficiency.",
   },
   {
     id: "education",
     title: "Engineering Education and Industry Mitigation",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>',
     description: "Bridging the gap between engineering education and industry needs for future professionals.",
   },
   {
     id: "risk-assessment",
     title: "Risk Assessment and Mitigation Strategies",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
     description:
       "Developing effective risk assessment methodologies and mitigation strategies for engineering projects.",
   },
   {
     id: "smart-transportation",
     title: "Smart Cities and Intelligent Transportation Systems",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>',
     description: "Integrating smart technologies in urban planning and transportation systems for sustainable cities.",
   },
   {
     id: "resilience",
     title: "Resilience and Resilient Transport Networks",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>',
     description:
       "Building resilient infrastructure and transportation networks to withstand natural disasters and climate change.",
   },
   {
     id: "materials",
     title: "Advanced Materials and Emerging Technologies",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
     description: "Exploring cutting-edge materials and technologies for next-generation engineering applications.",
   },
   {
     id: "ev",
     title: "Electric Vehicle (EV) Infrastructure and Smart Charging Networks",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>',
     description:
       "Developing infrastructure for electric vehicles and smart charging networks for sustainable transportation.",
   },
   {
     id: "water",
     title: "Smart Wastewater Treatment Solutions",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a8 8 0 0 0 8-8c0-3.5-2-6.5-5-7.5C15 6.5 16 7 16 8c0 1.5-2.5 2-3 1 0 0 0 1-1 1 0 0-1 0-1 1 0 1 1 1 1 1 1.5 0 3 3 3 4s-1 1-1 1"></path></svg>',
     description: "Innovative approaches to wastewater treatment using smart technologies and sustainable practices.",
   },
   {
     id: "climate",
     title: "Climate Change Impacts on Water Infrastructure",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>',
     description: "Assessing and addressing the impacts of climate change on water infrastructure and management.",
   },
   {
     id: "renewable",
     title: "Integration of Renewable Energy Sources in Development",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>',
     description: "Incorporating renewable energy sources in infrastructure development for sustainable solutions.",
   },
   {
     id: "gis",
     title: "GIS and Remote Sensing for Urban Planning and Transportation Modeling",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>',
     description:
       "Utilizing GIS and remote sensing technologies for effective urban planning and transportation modeling.",
   },
   {
     id: "ai-design",
     title: "AI-assisted Design in Construction and Electrical Systems",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V7h-2v-.27A2 2 0 0 0 7 5a2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V11a1 1 0 0 0 1 1h3v1.27A2 2 0 0 0 8 15a2 2 0 0 0 2 2c.74 0 1.39-.4 1.73-1H13a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V8.73A2 2 0 0 0 19 7a2 2 0 0 0-2-2c-.74 0-1.39.4-1.73 1H15V5a1 1 0 0 0-1-1h-1.73A2 2 0 0 0 12 2z"></path><path d="M2 2v20h20"></path></svg>',
     description:
       "Implementing AI-assisted design methodologies in construction and electrical systems for improved efficiency.",
   },
   {
     id: "circular-resource",
     title: "Circular Economy and Resource Optimization in Engineering",
     icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12a10 10 0 0 1 10-10v0a10 10 0 0 1 10 10v0a10 10 0 0 1-10 10v0A10 10 0 0 1 2 12v0Z"></path><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>',
     description: "Optimizing resource utilization through circular economy principles in engineering practices.",
   },
 ]
 
 // Committee members data
 const committeeMembers = {
   organizing: [
     { name: "Prof. Parvez Alum", role: "BGSB University, J & K, India", isChair: true },
     { name: "Dr. Ahmed Riyaz", role: "BGSB University, J & K, India" },
     { name: "Prof. Asif Hussain", role: "JMI, New Delhi, India" },
     { name: "Dr. Majid B. Malik", role: "MCA" },
     { name: "Dr. Tarun Kant", role: "ITE" },
     { name: "Dr. Salma Aslam", role: "Biotechnology" },
     { name: "Dr. Ahmed Riyaz", role: "EE" },
     { name: "Dr. Nasir Rashid", role: "BGSBU, India" },
     { name: "Mr. Ameen Uddin Qadri", role: "BGSBU, India" },
     { name: "Dr. Shoaib Ahmed", role: "Biotechnology" },
     { name: "Dr. Gulam Ahmed", role: "MCA" },
     { name: "Dr. Naseem Ahmed", role: "MCA" },
     { name: "Dr. Amir Nadeem", role: "JMI" },
     { name: "Dr. Tabassum", role: "TERI" },
   ],
   advisory: [
     { name: "Dr. Tauseef Ahmed Jasan", role: "University of Nizwa, KSA" },
     { name: "Dr. Mohd Farhan", role: "University of Nizwa" },
     { name: "Dr. Tauseef Ahmed", role: "JMI, India" },
     { name: "Prof. Arif Iqbal Reaisi", role: "India" },
     { name: "Prof. Hashim Yasin", role: "AMU, India" },
     { name: "Prof. Hasan Tashkandi", role: "Barezit" },
     { name: "Prof. Sajid Aslam Ahmed", role: "JMI, India" },
     { name: "Dr. Nasim Akhtar", role: "CRRi, India" },
   ],
 }
 
 // DOM Elements
 document.addEventListener("DOMContentLoaded", () => {
   const sideNavToggle = document.querySelector(".side-nav-toggle")
   const sideNav = document.querySelector(".side-nav")
   const sideNavClose = document.querySelector(".side-nav-close")
   const themeToggle = document.querySelector(".theme-toggle")
   const themesGrid = document.querySelector("#tab-all .themes-grid")
   const featuredThemesGrid = document.querySelector("#tab-featured .themes-grid")
   const committeeGrid = document.querySelector(".committee-grid")
   const advisoryGrid = document.querySelector(".advisory-grid")
   const tabBtns = document.querySelectorAll(".tab-btn")
   const tabContents = document.querySelectorAll(".tab-content")
   const submitPaperBtn = document.querySelector(".submit-paper-btn")
   const registerNowBtn = document.querySelector(".register-now-btn")
   const navLinks = document.querySelectorAll(".side-nav-link, .footer-links a")
 
   // Side navigation toggle
   if (sideNavToggle) {
     sideNavToggle.addEventListener("click", () => {
       sideNav.classList.add("active")
     })
   }
 
   if (sideNavClose) {
     sideNavClose.addEventListener("click", () => {
       sideNav.classList.remove("active")
     })
   }
 
   // Theme toggle
   if (themeToggle) {
     themeToggle.addEventListener("click", () => {
       document.documentElement.classList.toggle("light")
       document.documentElement.classList.toggle("dark")
     })
   }
 
   // Smooth scrolling for navigation links
   navLinks.forEach((link) => {
     link.addEventListener("click", (e) => {
       e.preventDefault()
       const targetId = link.getAttribute("href")
       const targetElement = document.querySelector(targetId)
 
       if (targetElement) {
         const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
 
         window.scrollTo({
           top: targetPosition,
           behavior: "smooth",
         })
 
         // Close side nav if open
         if (sideNav.classList.contains("active")) {
           sideNav.classList.remove("active")
         }
       }
     })
   })
 
   // Tab functionality
   tabBtns.forEach((btn) => {
     btn.addEventListener("click", () => {
       const tabId = btn.getAttribute("data-tab")
 
       // Remove active class from all buttons and contents
       tabBtns.forEach((b) => b.classList.remove("active"))
       tabContents.forEach((c) => c.classList.remove("active"))
 
       // Add active class to clicked button and corresponding content
       btn.classList.add("active")
       document.getElementById(`tab-${tabId}`).classList.add("active")
     })
   })
 
   // Submit paper button
   if (submitPaperBtn) {
     submitPaperBtn.addEventListener("click", () => {
       alert("Paper submission form will open here")
     })
   }
 
   // Register now button
   if (registerNowBtn) {
     registerNowBtn.addEventListener("click", () => {
       alert("Registration form will open here")
     })
   }
 
   // Populate themes
   function populateThemes() {
     // All themes
     if (themesGrid) {
       const allThemesHTML = themes
         .map(
           (theme) => `
         <div class="theme-card">
           <div class="theme-icon">
             ${theme.icon}
           </div>
           <h3 class="theme-title">${theme.title}</h3>
           <p class="theme-description">${theme.description}</p>
         </div>
       `,
         )
         .join("")
 
       themesGrid.innerHTML = allThemesHTML
     }
 
     // Featured themes (first 5)
     if (featuredThemesGrid) {
       const featuredThemesHTML = themes
         .slice(0, 5)
         .map(
           (theme) => `
         <div class="theme-card">
           <div class="theme-icon">
             ${theme.icon}
           </div>
           <h3 class="theme-title">${theme.title}</h3>
           <p class="theme-description">${theme.description}</p>
         </div>
       `,
         )
         .join("")
 
       featuredThemesGrid.innerHTML = featuredThemesHTML
     }
   }
 
   // Populate committee members
   function populateCommitteeMembers() {
     if (committeeGrid) {
       const committeeHTML = committeeMembers.organizing
         .map(
           (member) => `
         <div class="committee-card ${member.isChair ? "chair" : ""}">
           <div class="patron-info">
             <div class="info-icon ${member.isChair ? "light" : ""}">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
             </div>
             <div>
               <h3>${member.name}</h3>
               <p>${member.role}</p>
               ${member.isChair ? '<span class="badge">Committee Chair</span>' : ""}
             </div>
           </div>
         </div>
       `,
         )
         .join("")
 
       committeeGrid.innerHTML = committeeHTML
     }
 
     if (advisoryGrid) {
       const advisoryHTML = committeeMembers.advisory
         .map(
           (member) => `
         <div class="committee-card">
           <div class="patron-info">
             <div class="info-icon">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
             </div>
             <div>
               <h3>${member.name}</h3>
               <p>${member.role}</p>
             </div>
           </div>
         </div>
       `,
         )
         .join("")
 
       advisoryGrid.innerHTML = advisoryHTML
     }
   }
 
   // Countdown timer
   function updateCountdown() {
     const conferenceDate = new Date("2025-09-20T00:00:00")
     const now = new Date()
     const difference = conferenceDate - now
 
     if (difference > 0) {
       const days = Math.floor(difference / (1000 * 60 * 60 * 24))
       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
       const seconds = Math.floor((difference % (1000 * 60)) / 1000)
 
       const daysElement = document.getElementById("countdown-days")
       const hoursElement = document.getElementById("countdown-hours")
       const minutesElement = document.getElementById("countdown-minutes")
       const secondsElement = document.getElementById("countdown-seconds")
 
       if (daysElement) daysElement.textContent = days.toString().padStart(3, "0")
       if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, "0")
       if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, "0")
       if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, "0")
     }
   }
 
   // Particles background
   function initParticles() {
     const canvas = document.getElementById("particles-canvas")
     if (!canvas) return
 
     const ctx = canvas.getContext("2d")
     let particles = []
 
     // Set canvas size
     function resizeCanvas() {
       canvas.width = window.innerWidth
       canvas.height = window.innerHeight
       initParticleArray()
     }
 
     // Particle class
     class Particle {
       constructor() {
         this.x = Math.random() * canvas.width
         this.y = Math.random() * canvas.height
         this.size = Math.random() * 3 + 0.5
         this.speedX = Math.random() * 0.5 - 0.25
         this.speedY = Math.random() * 0.5 - 0.25
         this.color = `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.2 + 0.05})`
       }
 
       update() {
         this.x += this.speedX
         this.y += this.speedY
 
         if (this.x > canvas.width) this.x = 0
         else if (this.x < 0) this.x = canvas.width
 
         if (this.y > canvas.height) this.y = 0
         else if (this.y < 0) this.y = canvas.height
       }
 
       draw() {
         ctx.fillStyle = this.color
         ctx.beginPath()
         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
         ctx.fill()
       }
     }
 
     // Initialize particles
     function initParticleArray() {
       particles = []
       const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 10000), 100)
 
       for (let i = 0; i < particleCount; i++) {
         particles.push(new Particle())
       }
     }
 
     // Connect particles with lines
     function connectParticles() {
       const maxDistance = 150
 
       for (let i = 0; i < particles.length; i++) {
         for (let j = i; j < particles.length; j++) {
           const dx = particles[i].x - particles[j].x
           const dy = particles[i].y - particles[j].y
           const distance = Math.sqrt(dx * dx + dy * dy)
 
           if (distance < maxDistance) {
             const opacity = 1 - distance / maxDistance
             ctx.strokeStyle = `rgba(0, 0, 100, ${opacity * 0.1})`
             ctx.lineWidth = 0.5
             ctx.beginPath()
             ctx.moveTo(particles[i].x, particles[i].y)
             ctx.lineTo(particles[j].x, particles[j].y)
             ctx.stroke()
           }
         }
       }
     }
 
     // Animation loop
     function animate() {
       ctx.clearRect(0, 0, canvas.width, canvas.height)
 
       particles.forEach((particle) => {
         particle.update()
         particle.draw()
       })
 
       connectParticles()
       requestAnimationFrame(animate)
     }
 
     // Initialize
     window.addEventListener("resize", resizeCanvas)
     resizeCanvas()
     animate()
   }
 
   // Initialize everything
   populateThemes()
   populateCommitteeMembers()
   setInterval(updateCountdown, 1000)
   updateCountdown()
   initParticles()
 
   // Check for hash in URL and scroll to it
   if (window.location.hash) {
     setTimeout(() => {
       const targetElement = document.querySelector(window.location.hash)
       if (targetElement) {
         const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
 
         window.scrollTo({
           top: targetPosition,
           behavior: "smooth",
         })
       }
     }, 500)
   }
 
   // Add new effects
   initParallaxEffect()
   initTypingEffect()
   initTiltEffect()
 
   // Add fade-in class to elements for scroll animation
   const fadeElements = document.querySelectorAll(".card, .section-header, .theme-card, .speaker-card")
   fadeElements.forEach((element) => {
     element.classList.add("fade-in")
   })
 
   // Add preloader handler
   handlePreloader()
 
   // Add back-to-top handler
   handleBackToTop()
 })
 
 // Add back-to-top button functionality
 function handleBackToTop() {
   const backToTopButton = document.getElementById("back-to-top")
   if (!backToTopButton) return
 
   window.addEventListener("scroll", () => {
     if (window.scrollY > 300) {
       backToTopButton.classList.add("visible")
     } else {
       backToTopButton.classList.remove("visible")
     }
   })
 
   backToTopButton.addEventListener("click", () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     })
   })
 }
 
 // Add this function to create a parallax effect
 function initParallaxEffect() {
   window.addEventListener("scroll", () => {
     const scrollY = window.scrollY
 
     // Parallax for hero section
     const heroElements = document.querySelectorAll(".hero-text, .hero-image-container")
     heroElements.forEach((element) => {
       const speed = element.classList.contains("hero-text") ? 0.3 : 0.2
       element.style.transform = `translateY(${scrollY * speed}px)`
     })
 
     // Fade in elements on scroll
     const fadeElements = document.querySelectorAll(".card, .section-header, .theme-card, .speaker-card")
     fadeElements.forEach((element) => {
       const elementTop = element.getBoundingClientRect().top
       const elementVisible = 150
 
       if (elementTop < window.innerHeight - elementVisible) {
         element.classList.add("fade-in-visible")
       }
     })
   })
 }
 
 // Add this function to create a typing effect for the hero title
 function initTypingEffect() {
   const titles = document.querySelectorAll(".hero-title-line")
   if (titles.length === 0) return
 
   titles.forEach((title, index) => {
     const text = title.textContent
     title.textContent = ""
     title.style.opacity = "1"
 
     let i = 0
     const speed = 100 // typing speed in ms
 
     function typeWriter() {
       if (i < text.length) {
         title.textContent += text.charAt(i)
         i++
         setTimeout(typeWriter, speed)
       }
     }
 
     // Delay start for second line
     setTimeout(typeWriter, index * 1000)
   })
 }
 
 // Add this function to create a 3D tilt effect for cards
 function initTiltEffect() {
   const cards = document.querySelectorAll(".card, .theme-card, .speaker-card")
 
   cards.forEach((card) => {
     card.addEventListener("mousemove", (e) => {
       const rect = card.getBoundingClientRect()
       const x = e.clientX - rect.left
       const y = e.clientY - rect.top
 
       const centerX = rect.width / 2
       const centerY = rect.height / 2
 
       const deltaX = (x - centerX) / centerX
       const deltaY = (y - centerY) / centerY
 
       card.style.transform = `perspective(1000px) rotateX(${deltaY * -5}deg) rotateY(${deltaX * 5}deg) scale3d(1.02, 1.02, 1.02)`
     })
 
     card.addEventListener("mouseleave", () => {
       card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
     })
   })
 }
 
 // Add preloader functionality
 function handlePreloader() {
   const preloader = document.getElementById("preloader")
   if (!preloader) return
 
   window.addEventListener("load", () => {
     setTimeout(() => {
       preloader.classList.add("hidden")
     }, 1000)
   })
 }
 
 