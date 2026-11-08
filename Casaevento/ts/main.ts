
interface CasaEvento {
  name: string;
  description: string;
  images: string[];
}

interface Cotizacion {
  name: string;
  phone: string;
  email: string;
  event: string;
  house: string;
  date: string;
  guests: string;
  message: string;
}

const WHATSAPP_NUMBER: string = "573000000000";

const casas: CasaEvento[] = [
   {
    name: "Casa VIP",
    description: "Un espacio para celebraciones especiales, reuniones familiares y encuentros inolvidables.",
    images: [
      "photo-1519167758481-83f550bb49b3",
      "photo-1519741497674-611481863552",
      "photo-1464366400600-7168b8af9bc3",
      "photo-1511795409834-ef04bbd61622",
      "photo-1519225421980-715cb0215aed"
    ]
  },

   {
    name: "Casa Napoles",
    description: "Un espacio para celebraciones especiales, reuniones familiares y encuentros inolvidables.",
    images: [
      "photo-1519167758481-83f550bb49b3",
      "photo-1519741497674-611481863552",
      "photo-1464366400600-7168b8af9bc3",
      "photo-1511795409834-ef04bbd61622",
      "photo-1519225421980-715cb0215aed"
    ]
  },

  {
    name: "Casa Normandía Piso 1",
    description: "Un ambiente versátil para crear celebraciones a la medida de cada ocasión.",
    images: [
      "photo-1511578314322-379afb476865",
      "photo-1507504031003-b417219a0e48",
      "photo-1465495976277-4387d4b0e4a6",
      "photo-1502635385003-ee1e6a1a742d",
      "photo-1530103862676-de8c9debad1d"
    ]
  },

  {
    name: "Casa Normandía Piso 2",
    description: "Un ambiente versátil para crear celebraciones a la medida de cada ocasión.",
    images: [
      "photo-1511578314322-379afb476865",
      "photo-1507504031003-b417219a0e48",
      "photo-1465495976277-4387d4b0e4a6",
      "photo-1502635385003-ee1e6a1a742d",
      "photo-1530103862676-de8c9debad1d"
    ]
  },

  {
    name: "Casa Santa Isabel Piso 1",
    description: "Un espacio para compartir con familiares, amigos e invitados en ocasiones memorables.",
    images: [
      "photo-1464366400600-7168b8af9bc3",
      "photo-1519741497674-611481863552",
      "photo-1519167758481-83f550bb49b3",
      "photo-1519225421980-715cb0215aed",
      "photo-1511795409834-ef04bbd61622"
    ]
  },

   {
    name: "Casa Santa Isabel Piso 2",
    description: "Un espacio para compartir con familiares, amigos e invitados en ocasiones memorables.",
    images: [
      "photo-1464366400600-7168b8af9bc3",
      "photo-1519741497674-611481863552",
      "photo-1519167758481-83f550bb49b3",
      "photo-1519225421980-715cb0215aed",
      "photo-1511795409834-ef04bbd61622"
    ]
  },

  {
    name: "Casa Santa Isabel Piso 3",
    description: "Un espacio para compartir con familiares, amigos e invitados en ocasiones memorables.",
    images: [
      "photo-1464366400600-7168b8af9bc3",
      "photo-1519741497674-611481863552",
      "photo-1519167758481-83f550bb49b3",
      "photo-1519225421980-715cb0215aed",
      "photo-1511795409834-ef04bbd61622"
    ]
  },

   {
    name: "Casa Santa Isabel Piso 4",
    description: "Un espacio para compartir con familiares, amigos e invitados en ocasiones memorables.",
    images: [
      "photo-1464366400600-7168b8af9bc3",
      "photo-1519741497674-611481863552",
      "photo-1519167758481-83f550bb49b3",
      "photo-1519225421980-715cb0215aed",
      "photo-1511795409834-ef04bbd61622"
    ]
  },
  
  {
    name: "Casa Teusaquillo",
    description: "Una alternativa para celebrar tus momentos importantes en un espacio especial.",
    images: [
      "photo-1507504031003-b417219a0e48",
      "photo-1511795409834-ef04bbd61622",
      "photo-1511578314322-379afb476865",
      "photo-1502635385003-ee1e6a1a742d",
      "photo-1465495976277-4387d4b0e4a6"
    ]
  }
];

const generarImagen = (id: string, width = 900): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function generarCasas(): void {
  const container = document.querySelector<HTMLElement>("#housesGrid");

  if (!container) return;

  container.innerHTML = casas.map((casa, index) => `
    <article class="house-card reveal">
      <div class="house-main">
        <img src="${generarImagen(casa.images[0], 1100)}" alt="${casa.name}">
        <div class="house-overlay"></div>
        <span class="house-tag">ESPACIO 0${index + 1}</span>
        <h3>${casa.name}</h3>
      </div>

      <div class="house-details">
        <p>${casa.description}</p>
        <div class="house-thumbnails">
          ${casa.images.slice(1).map((img, i) => `
            <button type="button" data-house-index="${index}" data-image-index="${i + 1}">
              <img src="${generarImagen(img, 400)}" alt="${casa.name}">
            </button>
          `).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function prepararCotizacion(): void {
  const form = document.querySelector<HTMLFormElement>("#quoteForm");

  form?.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const cotizacion: Cotizacion = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      event: String(formData.get("event") || ""),
      house: String(formData.get("house") || ""),
      date: String(formData.get("date") || ""),
      guests: String(formData.get("guests") || ""),
      message: String(formData.get("message") || "")
    };

    const mensaje = `
Hola, Casa Eventos. Quiero cotizar.

Nombre: ${cotizacion.name}
Teléfono: ${cotizacion.phone}
Correo: ${cotizacion.email}
Evento: ${cotizacion.event}
Casa: ${cotizacion.house || "Por definir"}
Fecha: ${cotizacion.date || "Por definir"}
Invitados: ${cotizacion.guests || "Por definir"}
Detalles: ${cotizacion.message}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
}

function iniciarSitio(): void {
  generarCasas();
  prepararCotizacion();

  document.querySelectorAll<HTMLElement>(".reveal").forEach(element => {
    element.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", iniciarSitio);

