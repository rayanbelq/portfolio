// zoom sur tte les images du site
const imgModal = document.createElement('div');
imgModal.style.position = 'fixed';
imgModal.style.top = '0';
imgModal.style.left = '0';
imgModal.style.width = '100%';
imgModal.style.height = '100%';
imgModal.style.background = 'rgba(0,0,0,0.8)';
imgModal.style.backdropFilter = 'blur(6px)';
imgModal.style.display = 'flex';
imgModal.style.justifyContent = 'center';
imgModal.style.alignItems = 'center';
imgModal.style.zIndex = '9999';
imgModal.style.cursor = 'pointer';
imgModal.style.padding = '20px';
imgModal.style.boxSizing = 'border-box';
imgModal.style.display = 'none';

const modalImg = document.createElement('img');
modalImg.style.maxWidth = '100%';
modalImg.style.maxHeight = '100%';
modalImg.style.borderRadius = '10px';
modalImg.style.boxShadow = '0 8px 25px rgba(0,0,0,0.5)';
imgModal.appendChild(modalImg);

document.body.appendChild(imgModal);

imgModal.addEventListener('click', () => {
    imgModal.style.display = 'none';
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        imgModal.style.display = 'flex';
    });
});


const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.id = (navLinks.id === "active") ? "nav-links" : "active";
});


if (window.location.hash) {
    history.replaceState(null, null, 'index.html');
}