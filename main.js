const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

const downloadBtn = document.getElementById('downloadCV');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cvContent = `
MUHAMMAD ASHHAD
Web Developer | PHP & Laravel Enthusiast
Son of Muhammad Aslam

CONTACT
Phone: 03272762043, 03299278137
GitHub: github.com/muhammadashhad

EDUCATION
- 3-Year IT Diploma | Aptech (Ongoing)
- Intermediate in Commerce

SKILLS
- Frontend: HTML, CSS, JavaScript, Bootstrap
- Backend: PHP, MySQL, Laravel (Learning)
- Accounts & Administration

EXPERIENCE
Accounts & Administration Officer | Infinity Construction
Data Entry Specialist | Daraz
Web Projects: Patrona Puppy, Hotnoven
        `;
        
        const blob = new Blob([cvContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Muhammad_Ashhad_CV.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});