
"use strict";

/* CONFIGURACIÓN */
const WHATSAPP_NUMBER = "573000000000"; // Reemplazar por el número real.

const houses = [
  {
    name: "Casa VIP",
    description: "Un espacio para celebraciones especiales, reuniones familiares y encuentros inolvidables.",
    images: [
      "./assets/Vip/Img1.jpeg",
      "./assets/Vip/Img2.jpeg",
      "./assets/Vip/Img3.jpeg",
      "./assets/Vip/Img5.jpeg",
      "./assets/Vip/Img4.jpeg"
    ]
  },

  {
  name: "Casa Napoles",
  description: "Un espacio para celebraciones especiales, reuniones familiares y encuentros inolvidables.",
  images: [
    "./assets/Napoles/Img1.jpeg",
    "./assets/Napoles/Img2.jpeg",
    "./assets/Napoles/Img3.jpeg",
    "./assets/Napoles/Img4.jpeg",
    "./assets/Napoles/Img5.jpeg"
  ]
},
  {
    name: "Casa Normandía Piso 1",
    description: "Un ambiente versátil para crear celebraciones a la medida de cada ocasión.",
    images: [
      "./assets/Normandía1/Img1.jpeg",
      "./assets/Normandía1/Img2.jpeg",
      "./assets/Normandía1/Img3.jpeg",
      "./assets/Normandía1/Img4.jpeg",
      "./assets/Normandía1/Img5.jpeg",
    ]
  },

  {
    name: "Casa Normandía Piso 2",
    description: "Un ambiente versátil para crear celebraciones a la medida de cada ocasión.",
   images: [
      "./assets/Normandía2/Img1.jpeg",
      "./assets/Normandía2/Img2.jpeg",
      "./assets/Normandía2/Img3.jpeg",
      "./assets/Normandía2/Img4.jpeg",
      "./assets/Normandía2/Img5.jpeg"
    ]
  },

  {
    name: "Casa Santa Isabel Piso 1",
    description: "Un espacio para compartir con familiares, amigos e invitados en ocasiones memorables.",
    images: [
      "./assets/Santaisabel1/Img1.jpeg",
      "./assets/Santaisabel1/Img2.jpeg",
      "./assets/Santaisabel1/Img3.jpeg",
      "./assets/Santaisabel1/Img5.jpeg",
      "./assets/Santaisabel1/Img4.jpeg"
    ]
  },

   {
    name: "Casa Santa Isabel Piso 2",
    description: "Un espacio para compartir con familiares, amigos e invitados en ocasiones memorables.",
    images: [
      "./assets/Santaisabel2/Img1.jpeg",
      "./assets/Santaisabel2/Img2.jpeg",
      "./assets/Santaisabel2/Img3.jpeg",
      "./assets/Santaisabel2/Img5.jpeg",
      "./assets/Santaisabel2/Img4.jpeg"
    ]
  },

  {
    name: "Casa Santa Isabel Piso 3",
    description: "Un espacio para compartir con familiares, amigos e invitados en ocasiones memorables.",
   images: [
      "./assets/Santaisabel3/Img1.jpeg",
      "./assets/Santaisabel3/Img2.jpeg",
      "./assets/Santaisabel3/Img3.jpeg",
      "./assets/Santaisabel3/Img5.jpeg",
      "./assets/Santaisabel3/Img4.jpeg"
    ]
  },

   {
    name: "Casa Santa Isabel Piso 4",
    description: "Un espacio para compartir con familiares, amigos e invitados en ocasiones memorables.",
    images: [
      "./assets/Santaisabel4/Img1.jpeg",
      "./assets/Santaisabel4/Img2.jpeg",
      "./assets/Santaisabel4/Img3.jpeg",
      "./assets/Santaisabel4/Img5.jpeg",
      "./assets/Santaisabel4/Img4.jpeg"
    ]
  },
  
  {
    name: "Casa Teusaquillo",
    description: "Una alternativa para celebrar tus momentos importantes en un espacio especial.",
    images: [
      "./assets/Teusaquillo/Img1.jpeg",
      "./assets/Teusaquillo/Img2.jpeg",
      "./assets/Teusaquillo/Img3.jpeg",
      "./assets/Teusaquillo/Img5.jpeg",
      "./assets/Teusaquillo/Img4.jpeg"
    ]
  }
];

function imageUrl(id, width = 900) {
  // Si la imagen es local, utilizar su ruta original.
  if (
    id.startsWith("./") ||
    id.startsWith("/") ||
    id.startsWith("assets/")
  ) {
    return id;
  }

  // Mantener compatibilidad con las imágenes de Unsplash.
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

/* GENERAR LAS CUATRO CASAS */
const housesGrid = document.getElementById("housesGrid");

if (housesGrid) {
  housesGrid.innerHTML = houses.map((house, index) => `
    <article class="house-card reveal">
      <div class="house-main">
        <img src="${imageUrl(house.images[0], 1100)}"
             alt="${house.name}" loading="lazy">
        <div class="house-overlay"></div>
        <span class="house-tag">ESPACIO 0${index + 1}</span>
        <h3>${house.name}</h3>
      </div>

      <div class="house-details">
        <p>${house.description}</p>

        <div class="house-thumbnails">
          ${house.images.slice(1).map((img, imageIndex) => `
            <button type="button"
              data-house="${index}"
              data-image="${imageIndex + 1}"
              aria-label="Ampliar imagen de ${house.name}">
              <img src="${imageUrl(img, 400)}"
                   alt="${house.name}, fotografía ${imageIndex + 2}"
                   loading="lazy">
            </button>
          `).join("")}
        </div>

        <div class="house-footer">
          <span>5 fotografías de referencia</span>
          <a href="#contacto" data-house="${house.name}">
            COTIZAR ESTE ESPACIO ↗
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

/* REVEAL */
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeElements() {
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => {
    observer.observe(el);
  });
}

observeElements();

/* HEADER */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

/* MENÚ */
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle?.addEventListener("click", () => {
  navigation?.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navigation?.classList.remove("active");
  });
});

/* CARRUSEL PRINCIPAL */
const slides = Array.from(document.querySelectorAll(".hero-slide"));
let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  const count = document.getElementById("heroCount");

  if (count) {
    count.textContent =
      `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  }
}

document.getElementById("heroNext")?.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.getElementById("heroPrev")?.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

let heroTimer = setInterval(() => showSlide(currentSlide + 1), 6500);

document.querySelector(".hero")?.addEventListener("mouseenter", () => {
  clearInterval(heroTimer);
});

document.querySelector(".hero")?.addEventListener("mouseleave", () => {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => showSlide(currentSlide + 1), 6500);
});

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

let activeImages = [];
let activeImageIndex = 0;

function openLightbox(images, index) {
  activeImages = images;
  activeImageIndex = index;
  showLightboxImage();
  lightbox?.classList.add("active");
  lightbox?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function showLightboxImage() {
  if (!activeImages.length || !lightboxImage) return;

  const image = activeImages[activeImageIndex];
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
}

function closeLightbox() {
  lightbox?.classList.remove("active");
  lightbox?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".house-thumbnails button").forEach(button => {
  button.addEventListener("click", () => {
    const house = houses[Number(button.dataset.house)];
    const index = Number(button.dataset.image);

    const images = house.images.map((id, i) => ({
      src: imageUrl(id, 1600),
      alt: `${house.name} - imagen ${i + 1}`
    }));

    openLightbox(images, index);
  });
});

const gallery = Array.from(document.querySelectorAll("#galleryGrid img"));

gallery.forEach((image, index) => {
  image.addEventListener("click", () => {
    openLightbox(
      gallery.map(item => ({
        src: item.src.replace(/w=\d+/, "w=1600"),
        alt: item.alt
      })),
      index
    );
  });
});

document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);

document.getElementById("lightboxPrev")?.addEventListener("click", () => {
  activeImageIndex = (activeImageIndex - 1 + activeImages.length) % activeImages.length;
  showLightboxImage();
});

document.getElementById("lightboxNext")?.addEventListener("click", () => {
  activeImageIndex = (activeImageIndex + 1) % activeImages.length;
  showLightboxImage();
});

lightbox?.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", event => {
  if (!lightbox?.classList.contains("active")) return;

  if (event.key === "Escape") closeLightbox();

  if (event.key === "ArrowLeft") {
    activeImageIndex = (activeImageIndex - 1 + activeImages.length) % activeImages.length;
    showLightboxImage();
  }

  if (event.key === "ArrowRight") {
    activeImageIndex = (activeImageIndex + 1) % activeImages.length;
    showLightboxImage();
  }
});

/* SELECCIÓN AUTOMÁTICA DE EVENTO */
document.querySelectorAll("[data-event]").forEach(link => {
  link.addEventListener("click", () => {
    const select = document.querySelector('[name="event"]');
    if (select) select.value = link.dataset.event;
  });
});

/* SELECCIÓN AUTOMÁTICA DE CASA */
document.querySelectorAll("[data-house]").forEach(link => {
  if (link.tagName !== "A") return;

  link.addEventListener("click", () => {
    const select = document.querySelector('[name="house"]');
    if (select) select.value = link.dataset.house;
  });
});

/* FORMULARIO DE COTIZACIÓN */
const quoteForm = document.getElementById("quoteForm");

quoteForm?.addEventListener("submit", event => {
  event.preventDefault();

  if (!quoteForm.reportValidity()) return;

  const data = new FormData(quoteForm);

  const message = `
Hola, Casa Eventos. Quiero solicitar una cotización.

DATOS DEL CLIENTE
Nombre: ${data.get("name")}
Teléfono: ${data.get("phone")}
Correo: ${data.get("email") || "No indicado"}

DATOS DEL EVENTO
Tipo: ${data.get("event")}
Casa: ${data.get("house") || "Por definir"}
Fecha: ${data.get("date") || "Por definir"}
Invitados: ${data.get("guests") || "Por definir"}

INFORMACIÓN ADICIONAL
${data.get("message") || "Sin información adicional"}

Quedo atento/a a su respuesta.
  `.trim();

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

/* WHATSAPP FLOTANTE */
const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {
  whatsappButton.href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, Casa Eventos. Quiero información sobre sus casas y servicios.")}`;
}

/* FECHA MÍNIMA */
const dateInput = document.getElementById("eventDate");

if (dateInput) {
  const now = new Date();
  const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString().split("T")[0];

  dateInput.min = today;
}

/* AÑO */
document.getElementById("year").textContent = new Date().getFullYear();

/* ACTIVAR REVEALS DE LAS CASAS GENERADAS */
observeElements();


/* =====================================================
   CASA ENCANTO — CONTROL DE TEMA
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (!themeToggle || !themeIcon) return;

  const savedTheme = localStorage.getItem("casa-encanto-theme");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";

    themeToggle.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Activar modo claro"
        : "Activar modo oscuro"
    );

    themeToggle.setAttribute(
      "aria-pressed",
      theme === "dark" ? "true" : "false"
    );

    localStorage.setItem("casa-encanto-theme", theme);
  }

  applyTheme(savedTheme === "dark" ? "dark" : "light");

  themeToggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
});