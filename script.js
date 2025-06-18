

const projectsData = [
  // Top-tier Full-Stack Projects
 
  {
    id: 21,
    title: "TasktrackerPro",
    description: "Professional task tracking and management application for productivity enhancement",
    image: "images/22.png",
    demoLink: "https://tasktracker-for-railway-1.onrender.com/",
    codeLink: "https://github.com/kingslayer458/TasktrackerPro",
    category: "fullstack",
    tags: ["Task Management", "Productivity", "JavaScript"],
  },
  {
    id: 23,
    title: "Sydney Events",
    description: "An event tracking and discovery platform for Sydney-based activities and happenings",
    image: "images/24.png",
    demoLink: "https://sydney-events-railway-production.up.railway.app/",
    codeLink: "https://github.com/kingslayer458/sydney-events",
    category: "frontend",
    tags: ["Events", "Location-based", "JavaScript"],
  },

  {
    id: 50,
    title: "File Sharing System Enhanced",
    description: "System for sharing files between users and built with tempfile.org api",
    image: "images/50.png",
    demoLink: "https://kingslayer458.github.io/File-Sharing-system-version-2/",
    codeLink: "https://github.com/kingslayer458/File-Sharing-system-version-2",
    category: "fullstack",
    tags: ["File Sharing", "JavaScript", "System"],
  },
  {
    id: 20,
    title: "Steam User Screenshots Using Scrapping",
    description: "A tool to scrape and download Steam user screenshots with web scraping techniques",
    image: "images/21.png",
    demoLink: "https://steam-user-screenshots-extractor-production.up.railway.app/",
    codeLink: " https://github.com/kingslayer458/steam-user-screenshots-using-scrapping",
    category: "fullstack",
    tags: ["Steam", "Web Scraping", "Screenshots"],
  },
  
  // Advanced React Projects
  {
    id: 5,
    title: "Game vault",
    description: "it shows details about upcoming games and news,enhanced version of Gaming Hub and Game Walls",
    image: "images/20.png",
    demoLink: "https://voluble-dasik-601e69.netlify.app/",
    codeLink: "https://github.com/kingslayer458/Game-vault",
    category: "frontend",
    tags: ["React", "JavaScript", "gaming"],
  },
  {
    id: 1,
    title: "Kingplay Video Streamer With React",
    description: "Video streaming application built with React",
    image: "images/1.png",
    demoLink: "https://kingslayer458.github.io/REACTER-KINGPLAY-VIDEOSTREAMERO",
    codeLink: "https://github.com/kingslayer458/REACTER-KINGPLAY-VIDEOSTREAMERO",
    category: "frontend",
    tags: ["React", "JavaScript", "Streaming"],
  },
  {
    id: 3,
    title: "Kingplay Video Streamer Without React",
    description: "Another version of the video streaming platform",
    image: "images/3.png",
    demoLink: "https://kingslayer458.github.io/KINGPLAY-VIDEO-STREAMER",
    codeLink: "https://github.com/kingslayer458/KINGPLAY-VIDEO-STREAMER",
    category: "frontend",
    tags: ["Streaming", "JavaScript", "Video"],
  },
  {
    id: 9,
    title: "Game Walls using RAWG API",
    description: "PC Video Game wallpapers using the RAWG API",
    image: "images/8.png",
    demoLink: "https://kingslayer458.github.io/Game-walls-using-RAWG-API",
    codeLink: "https://github.com/kingslayer458/Game-walls-using-RAWG-API",
    category: "frontend",
    tags: ["RAWG API", "Games", "Wallpapers"],
  },

  {
    id: 25,
    title: "Chat Application Enhanced",
    description: "Real-time chat application with enhanced features for seamless communication",
    image: "images/26.png",
    demoLink: "https://kingslayer458.github.io/Chat-application-enhanced",
    codeLink: "https://github.com/kingslayer458/Chat-application-enhanced",
    category: "fullstack",
    tags: ["Chat", "Real-time", "WebSocket"],
  },
  {
    id: 26,
    title: "Website Builder (In Progress)",
    description: "A drag-and-drop website builder tool for creating websites without coding (currently in development)",
    image: "images/27.png",
    demoLink: "https://v0-drag-and-drop-prototype-lyart.vercel.app/",
    codeLink: "https://github.com/kingslayer458/Website-builder--in-progress",
    category: "fullstack",
    tags: ["Website Builder", "Drag & Drop", "In Progress"],
  },
  {
    id: 7,
    title: "Steam Profile explorer",
    description: "Steam Profile explorer built with React and Steam api",
    image: "images/6.png",
    demoLink: "https://kingslayer458.github.io/reacter-steam",
    codeLink: "https://github.com/kingslayer458/reacter-steam",
    category: "frontend",
    tags: ["React", "Steam", "Games"],
  },
  
  // API Integration Projects
  {
    id: 2,
    title: "Food App With Spoonacular API",
    description: "Food recipe application using the Spoonacular API",
    image: "images/2.png",
    demoLink: "https://kingslayer458.github.io/Food-App-With-Spoonacular-API",
    codeLink: "https://github.com/kingslayer458/Food-App-With-Spoonacular-API",
    category: "frontend",
    tags: ["API", "JavaScript", "Food"],
  },
  {
    id: 4,
    title: "Enhanced GitHub Activity Viewer",
    description: "View GitHub activities with enhanced UI using GitHub API",
    image: "images/4.png",
    demoLink: "https://kingslayer458.github.io/Enhanced-GitHub-Activity-Viewer-using-github-api",
    codeLink: "https://github.com/kingslayer458/Enhanced-GitHub-Activity-Viewer-using-github-api",
    category: "frontend",
    tags: ["GitHub API", "JavaScript", "Activity Tracker"],
  },
  {
    id: 8,
    title: "Book Finder Enhanced",
    description: "Find books using Google Books API with enhanced features",
    image: "images/7.png",
    demoLink: "https://kingslayer458.github.io/Book-Finder-Enhanced-version-using-Google-Books-API",
    codeLink: "https://github.com/kingslayer458/Book-Finder-Enhanced-version-using-Google-Books-API",
    category: "frontend",
    tags: ["Google Books API", "Books", "Search"],
  },
  {
    id: 16,
    title: "Gaming Hub using RAWG API",
    description: "Gaming hub with data from RAWG API",
    image: "images/15.png",
    demoLink: "https://kingslayer458.github.io/Gaming-hub-using-rawg-api-experimental",
    codeLink: "https://github.com/kingslayer458/Gaming-hub-using-rawg-api-experimental",
    category: "frontend",
    tags: ["RAWG API", "Gaming", "Hub"],
  },

  {
    id: 24,
    title: "Job Portal with MongoDB Demo",
    description: "Full-stack job portal application built with MongoDB for job seekers and employers",
    image: "images/25.png",
    demoLink: "https://jobportalyo.netlify.app/",
    codeLink: "https://github.com/kingslayer458/job-portal-with-mongodb",
    category: "fullstack",
    tags: ["MongoDB", "Job Portal", "MERN Stack"],
  },

  
  // Event & Location-based Projects

  {
    id: 22,
    title: "Note Taker App",
    description: "A note-taking application with features to create, save, and manage notes efficiently",
    image: "images/23.png",
    demoLink: "https://v0-react-note-app-tau.vercel.app/",
    codeLink: "https://github.com/kingslayer458/Note-Taker-app",
    category: "fullstack",
    tags: ["Notes", "Productivity", "JavaScript"],
  },
  
  // Utility Applications
  {
    id: 12,
    title: "Weather Application",
    description: "Check weather conditions for different locations",
    image: "images/11.png",
    demoLink: "https://kingslayer458.github.io/weather-application",
    codeLink: "https://github.com/kingslayer458/weather-application",
    category: "frontend",
    tags: ["Weather API", "JavaScript", "Forecast"],
  },
  {
    id: 15,
    title: "Calculator",
    description: "Simple calculator application",
    image: "images/14.png",
    demoLink: "https://kingslayer458.github.io/codsoft-task--1-calculator",
    codeLink: "https://github.com/kingslayer458/codsoft-task--1-calculator",
    category: "frontend",
    tags: ["Calculator", "JavaScript", "Tool"],
  },
  {
    id: 6,
    title: "File Sharing System",
    description: "System for sharing files between users and built with file.io api",
    image: "images/5.png",
    demoLink: "https://kingslayer458.github.io/file-sharing-system",
    codeLink: "https://github.com/kingslayer458/file-sharing-system",
    category: "fullstack",
    tags: ["File Sharing", "JavaScript", "System"],
  },
  
  // Portfolio & Showcase Projects
  {
    id: 19,
    title: "Projects Showcase",
    description: "collection of all latest projects",
    image: "images/19.png",
    demoLink: "https://kingslayer458.github.io/Projects-showcase/",
    codeLink: "https://github.com/kingslayer458/Projects-showcase",
    category: "frontend",
    tags: ["Hub", "portfolio", "demo"],
  },
  {
    id: 17,
    title: "Personal Portfolio",
    description: "created my first portfolio",
    image: "images/16.png",
    demoLink: "https://kingslayer458.github.io/personal-portfolio/",
    codeLink: "https://github.com/kingslayer458/personal-portfolio",
    category: "frontend",
    tags: ["JavaScript", "portfolio", "demo"],
  },
  
  // Entertainment & Media Projects

  {
    id: 10,
    title: "Red Dead Redemption 2 Wallpaper Website",
    description: "Wallpaper website dedicated to Red Dead Redemption 2",
    image: "images/9.png",
    demoLink: "https://kingslayer458.github.io/RED-DEAD-REDEMPTION-2-WALLPAPER-WEBSITE",
    codeLink: "https://github.com/kingslayer458/RED-DEAD-REDEMPTION-2-WALLPAPER-WEBSITE",
    category: "frontend",
    tags: ["RDR2", "Wallpapers", "Games"],
  },
  {
    id: 13,
    title: "Lana Del Ray",
    description: "Fan website for Lana Del Ray",
    image: "images/12.png",
    demoLink: "https://kingslayer458.github.io/lana-del-ray",
    codeLink: "https://github.com/kingslayer458/lana-del-ray",
    category: "frontend",
    tags: ["Music", "Fan Site", "Artist"],
  },
  
  // Simple Landing Pages & Starter Projects
  {
    id: 11,
    title: "Game Spheree",
    description: "A simple landing page",
    image: "images/10.png",
    demoLink: "https://kingslayer458.github.io/GAME-SPHEREE",
    codeLink: "https://github.com/kingslayer458/GAME-SPHEREE",
    category: "frontend",
    tags: ["Games", "Platform", "JavaScript"],
  },
  {
    id: 18,
    title: "Simple landing page",
    description: "created my first gaming genre landing page",
    image: "images/17.png",
    demoLink: "https://kingslayer458.github.io/codsoft-task-2-landing-page/",
    codeLink: "https://github.com/kingslayer458/codsoft-task-2-landing-page",
    category: "frontend",
    tags: ["Gaming", "Fan Site", "demo"],
  },
  {
    id: 14,
    title: "Dr. Norman Tribute Page",
    description: "Tribute page dedicated to Dr. Norman",
    image: "images/13.png",
    demoLink: "https://kingslayer458.github.io/dr-norman-tribute-page",
    codeLink: "https://github.com/kingslayer458/dr-norman-tribute-page",
    category: "frontend",
    tags: ["Tribute", "Biography", "HTML"],
  },
]


// DOM Elements
const projectsGrid = document.querySelector(".projects-grid")
const filterButtons = document.querySelectorAll(".filter-btn")
const cursor = document.querySelector(".cursor")
const cursorFollower = document.querySelector(".cursor-follower")
const links = document.querySelectorAll("a")
const buttons = document.querySelectorAll("button")

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Generate project cards
  generateProjectCards("all")

  // Initialize animations for project cards
  initProjectAnimations()
})

// Custom cursor
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"

  setTimeout(() => {
    cursorFollower.style.left = e.clientX + "px"
    cursorFollower.style.top = e.clientY + "px"
  }, 100)
})

// Cursor effects on interactive elements
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursorFollower.style.width = "40px"
    cursorFollower.style.height = "40px"
  })

  link.addEventListener("mouseleave", () => {
    cursor.style.width = "10px"
    cursor.style.height = "10px"
    cursorFollower.style.width = "30px"
    cursorFollower.style.height = "30px"
  })
})

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursorFollower.style.width = "40px"
    cursorFollower.style.height = "40px"
  })

  button.addEventListener("mouseleave", () => {
    cursor.style.width = "10px"
    cursor.style.height = "10px"
    cursorFollower.style.width = "30px"
    cursorFollower.style.height = "30px"
  })
})

// Generate project cards
function generateProjectCards(category) {
  projectsGrid.innerHTML = ""

  const filteredProjects =
    category === "all" ? projectsData : projectsData.filter((project) => project.category === category)

  filteredProjects.forEach((project, index) => {
    const card = document.createElement("div")
    card.className = "project-card"
    card.dataset.category = project.category
    card.style.animationDelay = `${index * 0.1}s`

    card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.demoLink}" class="project-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${project.codeLink}" class="project-link" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
                </div>
            </div>
        `

    projectsGrid.appendChild(card)
  })

  initProjectAnimations()
}


// Initialize animations for project cards
function initProjectAnimations() {
  const projectCards = document.querySelectorAll(".project-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    },
    { threshold: 0.1 },
  )

  projectCards.forEach((card) => {
    observer.observe(card)
  })
}

