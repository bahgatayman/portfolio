    document.querySelector('.contact').addEventListener('click', () => {
      alert('Contact form will open soon!');
    });

    document.querySelector('.download').addEventListener('click', () => {
      alert('Downloading CV...');
    });
    
    document.querySelector('.hire-btn').addEventListener('click', () => {
      alert('Thank you for considering to hire me!');
    });
    
    // Add floating animation to profile image
    const profileImg = document.querySelector('.imgportfolio');
    profileImg.style.animation = 'float 3s ease-in-out infinite';
    
    // Add hover effect to skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
      skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.1)';
      });
      skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
      });
    });
