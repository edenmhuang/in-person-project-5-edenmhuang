// Week 7: Migrating Your Interactive Portfolio to React
// This starter file guides you through migrating your Week 6 vanilla JavaScript portfolio to React

import './App.css'

function App() {
  // ============================================
  // PART 1: EVENT HANDLER FUNCTIONS
  // ============================================
  // TODO: Move your Week 6 event handler functions here
  // In Week 6, you had functions like:
  // - handleNavClick (for smooth scroll)
  // - filterProjects (for project filtering)
  // - handleFormSubmit (for form validation)
  //
  // HINT: These will be regular JavaScript functions defined inside App component
  // Example from Week 6:
  //   const filterProjects = (category) => {
  //     // Your filtering logic here
  //   }
  
  // TODO: Add smooth scroll handler
  // Replace: navLinks.forEach(link => link.addEventListener('click', ...))
  // With: const handleNavClick = (e) => { ... }
  
  // TODO: Add filter handler
  // Replace: filterButtons.forEach(button => button.addEventListener('click', ...))
  // With: const handleFilterClick = (category) => { ... }
  
  // TODO: Add form validation functions
  // You'll need: isValidEmail, showError, clearError, showSuccess
  // These can stay mostly the same!
  
  // TODO: Add form submit handler
  // Replace: contactForm.addEventListener('submit', ...)
  // With: const handleFormSubmit = (e) => { ... }


  // ============================================
  // PART 2: JSX RETURN STATEMENT
  // ============================================
  // TODO: Copy your Week 6 HTML structure here
  // Remember to convert HTML to JSX:
  // - class → className
  // - onclick → onClick
  // - onsubmit → onSubmit
  // - for → htmlFor
  // - All event attributes use camelCase
  //
  // IMPORTANT: Put EVERYTHING in this one return statement!
  // This week we're building a MONOLITHIC component (one big component)
  // Week 8 will teach you how to break this into smaller pieces

  return (
    <div className="portfolio">
      {/* TODO: Add your navigation here */}
      {/* HINT: Replace <a href="#home" class="nav-link"> with <a href="#home" className="nav-link"> */}
      {/* HINT: Replace onclick with onClick={handleNavClick} */}

      {/* TODO: Add your hero section here */}
      
      {/* TODO: Add your about section here */}
      
      {/* TODO: Add your skills section here */}
      
      {/* TODO: Add your projects section here */}
      {/* HINT: For filter buttons, use onClick={() => handleFilterClick('category')} */}
      
      {/* TODO: Add your contact form here */}
      {/* HINT: Form will use onSubmit={handleFormSubmit} */}
      {/* HINT: Inputs will use onChange for real-time validation */}
      
      {/* TODO: Add your footer here */}
    </div>
  )
}

export default App
