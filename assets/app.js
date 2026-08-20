(() => {
  "use strict";

  
  // Evita listeners, timers y animaciones duplicadas si el script se inyecta dos veces.
  if (window.__DIGITAL_INVITA_APP_INITIALIZED__) {
    console.warn("Digital Invita ya estaba inicializada; se omitio una segunda carga.");
    return;
  }
  window.__DIGITAL_INVITA_APP_INITIALIZED__ = true;

    const INVITATION_CONFIG =
{
  "meta": {
    "pageTitle": "Mis XV | Alexa López",
    "ogTitle": "",
    "ogDescription": "Acompáñanos a celebrar este día tan especial.",
    "publicUrl": ""
  },
  "event": {
    "template": "xv",
    "label": "Mis XV",
    "age": "",
    "celebrantName": "Alexa López",
    "person1Name": "",
    "person2Name": "",
    "eventDate": "2026-10-23T19:00",
    "eventEnd": "2026-10-24T03:00",
    "calendarTitle": "Mis XV Xime",
    "timeZone": "America/Mexico_City",
    "eventLocation": "Salón Royal Rizzo Lindavista",
    "rsvpCountryCode": "52",
    "rsvpPhone": "5526922049"
  },
  "theme": {
    "bgTop": "#173f8f",
    "bgMid": "#2559b8",
    "bgBottom": "#0b214f",
    "gold500": "#f0c76a",
    "sectionTitle": "#fff1ba",
    "scriptColor": "#ffffff",
    "timelineColor": "#f0c76a",
    "timelineTimeColor": "#fff1ba",
    "timelineTitleColor": "#ffffff",
    "timelineDescColor": "#d9e4ff",
    "timelineFont": "Cormorant Garamond",
    "locationTitleColor": "#fff1ba",
    "locationTimeColor": "#f0c76a",
    "locationPlaceColor": "#ffffff",
    "particleColor": "#fff1ba",
    "buttonBg": "#f2be45",
    "buttonText": "#0a214f",
    "fieldLabel": "#fff1ba",
    "fieldText": "#ffffff",
    "closingColor": "#fff1ba",
    "heroLabelColor": "#ffffff",
    "heroNameColor": "#ffffff",
    "heroDateColor": "#ffffff",
    "openingKicker": "#ffffff",
    "openingTitle": "#ffffff",
    "openingAccent": "#ffffff",
    "text": "#ffffff",
    "muted": "#d9e4ff",
    "sectionOpacity": 40,
    "sectionFrameEnabled": true,
    "separatorMode": "line",
    "separatorImage": "",
    "separatorImageWidth": 100,
    "openingOpacity": 50,
    "openingEffectEnabled": true,
    "particlesEnabled": true,
    "particleDensity": 100,
    "particleSize": 100,
    "particleBrightness": 100,
    "backgroundImage": "media/fdo2.png",
    "backgroundImageOpacity": 52,
    "backgroundImagePositionX": 50,
    "heroGroupOffsetY": 0,
    "heroLabelOffsetY": 0,
    "heroNameOffsetY": 0,
    "heroDateOffsetY": 0,
    "sectionBackgroundEnabled": false,
    "sectionBackgroundConfigured": true,
    "sectionBackgroundVersion": 1,
    "sectionBackgroundImage": "",
    "sectionBackgroundOpacity": 70,
    "sectionBackgroundPositionX": 50,
    "sectionBackgroundFit": "cover",
    "styleMode": "classic",
    "bodyFont": "Cormorant Garamond",
    "scriptFont": "Tangerine",
    "displayFont": "Tangerine"
  },
  "sectionStyles": {
    "story": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "parents": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "godparents": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "ceremony": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#f0c76a",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "reception": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#f0c76a",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "countdown": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "timeline": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "dress": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "adultNotice": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "rsvp": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "gallery": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "gifts": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "album": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "agenda": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    },
    "closing": {
      "inheritTheme": true,
      "titleColor": "#fff1ba",
      "timeColor": "#fff1ba",
      "textColor": "#ffffff",
      "buttonBg": "#f2be45",
      "buttonText": "#0a214f"
    }
  },
  "images": {
    "hero": "media/fprincipal.jpg",
    "heroType": "image",
    "og": "media/portada-og.jpg",
    "story": "media/fhistoria.jpg",
    "seal": "media/sello_cera.png",
    "dress": "media/vestimenta.png",
    "envelope": "media/sobre.png",
    "surprise": "media/regalo.png",
    "gallery": [
      "media/g1.jpg",
      "media/g2.jpg",
      "media/g3.jpg",
      "media/g4.jpg",
      "media/g5.jpg",
      "media/g6.jpg"
    ],
    "galleryMediaTypes": [
      "image",
      "image",
      "image",
      "image",
      "image",
      "image"
    ],
    "galleryLayouts": [
      "auto",
      "auto",
      "auto",
      "auto",
      "auto",
      "auto"
    ]
  },
  "audio": {
    "src": "media/sad-girl.mp3",
    "showControl": true
  },
  "story": {
    "title": "Mi historia",
    "paragraph1": "Hoy celebro no solo mis 15 años, sino cada sonrisa que iluminó mi camino y cada sueño que me ha traído hasta este momento tan especial.",
    "paragraph2": "Aquí termina un capítulo lleno de recuerdos y comienza uno nuevo, donde la ilusión marca el inicio de todo lo que está por venir.",
    "showImage": true,
    "imageSize": 75
  },
  "family": {
    "parentsEyebrow": "En compañía de mi familia",
    "parentsNamesHtml": "",
    "parentsGroups": [
      {
        "label": "Mi papá",
        "namesHtml": "Diego López Lucas"
      },
      {
        "label": "Mis abuelos",
        "namesHtml": " María Guadalupe Lucas Ayala<br>Lauro López Barragán<br>"
      }
    ],
    "showGrandparents": false,
    "grandparentsEyebrow": "Mis abuelos",
    "grandparentsNamesHtml": "",
    "parentsInviteText": "Tenemos el honor de invitarles a celebrar mis XV años.",
    "godparentsEyebrow": "Mis padrinos",
    "godparentsNamesHtml": "José de Jesus Lucas Ayala<br>&amp;<br>Ma. del Rocío Lucas Rendón ",
    "godparentsItems": []
  },
  "ceremony": {
    "title": "Ceremonia",
    "time": "19:00 hrs",
    "place": "Salón Royal Rizzo Lindavista",
    "showPlaceDetail": false,
    "placeDetail": "",
    "mediaMode": "preview",
    "iconSrc": "media/cereminia.png",
    "mapEmbed": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.0503416041283!2d-99.12113275089565!3d19.491575996418206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f99836691357%3A0x931aeadf00e0fb4c!2sSal%C3%B3n%20Royal%20Rizzo%20Lindavista!5e0!3m2!1ses-419!2smx!4v1787259668071!5m2!1ses-419!2smx\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>",
    "photoSrc": "",
    "mapLink": "https://maps.app.goo.gl/h643JggzsRfe5FQu7"
  },
  "reception": {
    "title": "Recepción",
    "time": "19:30 hrs",
    "place": "Salón Royal Rizzo Lindavista",
    "showPlaceDetail": false,
    "placeDetail": "",
    "mediaMode": "preview",
    "iconSrc": "media/recepcion.png",
    "mapLink": "https://maps.app.goo.gl/h643JggzsRfe5FQu7",
    "mapEmbed": "<iframe src=\"https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1787259784053!5m2!1ses-419!2smx!6m8!1m7!1shrkaFOhQkZyZPFp2XP9XBw!2m2!1d19.49144554232418!2d-99.12117612679964!3f330.9700387168481!4f18.605006618469616!5f0.4000000000000002\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>",
    "photoSrc": ""
  },
  "timeline": {
    "items": [
      {
        "time": "19:00 hrs",
        "title": "Ceremonia",
        "desc": "Salón Royal Rizzo Lindavista"
      },
      {
        "time": "19:30 hrs",
        "title": "Recepción",
        "desc": "Bienvenida a familiares y amigos."
      },
      {
        "time": "20:30 hrs ",
        "title": "Cena",
        "desc": "Es momento de disfrutar la cena."
      },
      {
        "time": "21:30 hrs",
        "title": "Vals",
        "desc": "Un momento lleno de emoción y tradición."
      },
      {
        "time": "22:15 hrs ",
        "title": "Ceremonia social",
        "desc": "Celebramos juntos este momento especial."
      },
      {
        "time": "22:45 hrs",
        "title": "Apertura de pista",
        "desc": "¡Que comience la fiesta!"
      },
      {
        "time": "23:30 hrs",
        "title": "Batucada",
        "desc": "Ritmo y energía para seguir celebrando."
      },
      {
        "time": "00:30",
        "title": "Sorpresa",
        "desc": "Tenemos algo especial preparado para ti."
      },
      {
        "time": "01:00 hrs",
        "title": "Tornafiesta",
        "desc": "Recarga energías para continuar la celebración."
      },
      {
        "time": "01:30 hrs",
        "title": "Continuación de batucada",
        "desc": "La fiesta continúa con toda la energía."
      },
      {
        "time": "03:00 hrs",
        "title": "Fin del evento",
        "desc": "Gracias por acompañarnos en este día tan especial."
      }
    ]
  },
  "countdown": {
    "title": "Faltan pocos días",
    "intro": "La cuenta regresiva ha comenzado para vivir un momento inolvidable.",
    "caption": "",
    "captionColor": "#fff4cf",
    "style": "classic"
  },
  "dressCode": {
    "title": "Dress Code",
    "value": "Hombres: Smoking o equivalente.\nMujeres: Vestido de gala o equivalente.",
    "note": "Azul rey exclusivo para la quinceañera."
  },
  "adultNotice": {
    "title": "Una celebración para adultos",
    "text": "Con mucho cariño, hemos preparado esta celebración exclusivamente para adultos.\nAgradecemos mucho su comprensión."
  },
  "gifts": {
    "title": "Opciones de regalo",
    "intro": "Tu presencia es el regalo más valioso para mí, pero si deseas tener un detalle, aquí encontrarás algunas opciones pensadas con mucho cariño.",
    "option1Title": "Lluvia de sobres",
    "option1Copy": "Podrás acompañarme con un sobre el día del evento.",
    "showOption1": true,
    "option2Title": "Regalo sorpresa",
    "option2Copy": "También puedes sorprenderme con un detalle elegido por ti.",
    "showOption2": true,
    "linksIntro": "Si prefieres elegir un detalle en línea, también puedes apoyarte en estas opciones de mesa de regalos:",
    "showLinks": true,
    "links": [
      {
        "label": "Ver mesa de regalos",
        "href": "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60017745",
        "style": "primary",
        "image": "media/liverpool.jpg",
        "showImage": true
      }
    ]
  },
  "album": {
    "title": "Álbum digital",
    "copy": "",
    "buttonLabel": "Ver álbum digital",
    "buttonHref": "#",
    "showQr": true,
    "qrBackgroundOpacity": 100
  },
  "customSections": [],
  "rsvp": {
    "familyMode": false,
    "showGuestCount": true,
    "maxGuests": 6,
    "advancedConfirmationEnabled": false,
    "personalizedPassesEnabled": false,
    "reservedPassesText": "Nos hará mucha ilusión compartir este momento con ustedes.",
    "qrDotStyle": "dots",
    "qrColor": "#393238",
    "qrAccentColor": "#a4774d",
    "qrBackgroundColor": "#ffffff",
    "receiptTitle": "¡Gracias por confirmar!",
    "receiptText": "Nos dará mucho gusto compartir este momento con ustedes. Nos vemos pronto.",
    "confirmMessage": " Confirmación de asistencia \n\nCon mucha alegría confirmo mi presencia para celebrar {celebracion}.\n\nNombre: {nombre}\n{pases}\n\nSerá un honor acompañarte en este día tan especial.",
    "declineMessage": " {evento} \n\nHola, mi nombre es {nombre}.\n\nCon mucho cariño quiero decir que en esta ocasión no podré acompañarte,\npero te deseo un día maravilloso y lleno de felicidad.",
    "familyConfirmMessage": " Confirmación de asistencia familiar \n\nHola, somos la familia {familia}.\nCon mucha alegría confirmamos nuestra asistencia para celebrar {celebracion}.\n\nAsistiremos {cantidad}:\n{integrantes}\n\nSerá un gusto acompañarles en este día tan especial.",
    "familyDeclineMessage": " {evento} \n\nHola, somos la familia {familia}.\nCon mucho cariño queremos avisar que en esta ocasión no podremos acompañarles.\n\nLes deseamos una celebración maravillosa y llena de momentos inolvidables.",
    "firebase": {
      "enabled": false,
      "validateInvites": false,
      "invalidInviteMessage": "Solicita una invitación válida para poder confirmar.",
      "eventId": "evento-digital",
      "collectionRoot": "rsvp",
      "apiKey": "",
      "authDomain": "",
      "projectId": "",
      "appId": ""
    }
  },
  "sections": {
    "story": true,
    "parents": true,
    "godparents": true,
    "ceremony": true,
    "reception": true,
    "timeline": true,
    "countdown": true,
    "gallery": true,
    "dress": true,
    "adultNotice": false,
    "rsvp": true,
    "gifts": true,
    "agenda": true,
    "album": false,
    "closing": true
  },
  "layout": {
    "sectionOrder": [
      "story",
      "parents",
      "godparents",
      "ceremony",
      "reception",
      "timeline",
      "countdown",
      "gallery",
      "dress",
      "adultNotice",
      "rsvp",
      "gifts",
      "agenda",
      "album",
      "closing"
    ]
  },
  "closing": {
    "note": "Gracias por ser parte de este momento inolvidable"
  },
  "brand": {
    "creditText": "Creado por Digital Invita",
    "creditHref": "https://www.facebook.com/profile.php?id=61587804296779&locale=es_LA",
    "ctaLabel": "Contáctanos",
    "ctaHref": "https://wa.me/525550591264?text=Hola%2C%20estoy%20interesado%28a%29%20en%20una%20invitaci%C3%B3n%20digital%20para%20mi%20evento.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20dise%C3%B1os%2C%20precios%20y%20lo%20que%20incluye.",
    "inheritTheme": false,
    "footerBg": "#102553"
  }
}
      ;

    const DEFAULT_BRAND_CTA_HREF = "https://wa.me/525550591264?text=Hola%2C%20estoy%20interesado%28a%29%20en%20una%20invitaci%C3%B3n%20digital%20para%20mi%20evento.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20dise%C3%B1os%2C%20precios%20y%20lo%20que%20incluye.";

    const DEFAULT_CONFIRM_MESSAGE = [
      " Confirmación de asistencia ",
      "",
      "Con mucha alegría confirmo mi presencia para celebrar {celebracion}.",
      "",
      "Nombre: {nombre}",
      "{pases}",
      "",
      "Será un honor acompañarte en este día tan especial."
    ].join("\n");
    const DEFAULT_DECLINE_MESSAGE = [
      " {evento} ",
      "",
      "Hola, mi nombre es {nombre}.",
      "",
      "Con mucho cariño quiero decir que en esta ocasión no podré acompañarte,",
      "pero te deseo un día maravilloso y lleno de felicidad."
    ].join("\n");
    const DEFAULT_FAMILY_CONFIRM_MESSAGE = [
      " Confirmación de asistencia familiar ",
      "",
      "Hola, somos la familia {familia}.",
      "Con mucha alegría confirmamos nuestra asistencia para celebrar {celebracion}.",
      "",
      "Asistiremos {cantidad}:",
      "{integrantes}",
      "",
      "Será un gusto acompañarles en este día tan especial."
    ].join("\n");
    const DEFAULT_FAMILY_DECLINE_MESSAGE = [
      " {evento} ",
      "",
      "Hola, somos la familia {familia}.",
      "Con mucho cariño queremos avisar que en esta ocasión no podremos acompañarles.",
      "",
      "Les deseamos una celebración maravillosa y llena de momentos inolvidables."
    ].join("\n");
    const LEGACY_RESERVED_PASSES_TEXT = "{destinatario}, hemos reservado {reservados} para ustedes.";
    const DEFAULT_RESERVED_PASSES_TEXT = "Nos hará mucha ilusión compartir este momento con ustedes.";
    const BASE_SECTION_ORDER = [
      "story", "parents", "godparents", "ceremony", "reception", "timeline",
      "countdown", "gallery", "dress", "adultNotice", "rsvp", "gifts",
      "agenda", "album", "closing"
    ];

    let EVENT_DATE = new Date(INVITATION_CONFIG.event.eventDate);
    let EVENT_END = new Date(INVITATION_CONFIG.event.eventEnd);
    let EVENT_LOCATION = INVITATION_CONFIG.event.eventLocation;
    let RSVP_PHONE = INVITATION_CONFIG.event.rsvpPhone;
    let RSVP_COUNTRY_CODE = INVITATION_CONFIG.event.rsvpCountryCode || "52";
    let rsvpFirebaseApp = null;
    let rsvpFirestore = null;
    let rsvpValidatedPersonalization = null;
    let rsvpValidationRun = 0;
    let scrollLockY = 0;

    const body = document.body;
    const overlay = document.getElementById("overlay");
    const openBtn = document.getElementById("openBtn");
    const audio = document.getElementById("audio");
    const audioSource = audio?.querySelector("source");
    const musicBtn = document.getElementById("musicBtn");
    const toTopBtn = document.getElementById("toTopBtn");
    const warpFlash = document.getElementById("warpFlash");
    const missionAccepted = document.getElementById("missionAccepted");
    const brandFooter = document.querySelector(".brand-footer");
    const overlayTitle = document.getElementById("overlayTitle");
    const heroName = document.getElementById("nombre");
    const heroLabel = document.querySelector(".hero-label");
    const fechaEvento = document.getElementById("fechaEvento");
    const countdownEl = document.getElementById("countdown");
    const countdownCaption = document.getElementById("countdownCaption");
    const storySection = document.getElementById("storySection");
    const storyParagraphs = Array.from(document.querySelectorAll(".story-text"));
    let galleryItems = [];
    const galleryPreviewImg = document.getElementById("galleryPreviewImg");
    const galleryPreviewVideo = document.getElementById("galleryPreviewVideo");
    const galleryMetaIndex = document.getElementById("galleryMetaIndex");
    const galleryMetaHint = document.getElementById("galleryMetaHint");
    const galleryPrev = document.getElementById("galleryPrev");
    const galleryNext = document.getElementById("galleryNext");
    const galleryStage = document.getElementById("galleryStage");
    const galleryShowcase = document.querySelector(".gallery-showcase");
    const galleryGrid = document.getElementById("galleryGrid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxVideo = document.getElementById("lightboxVideo");
    const lightboxMain = document.querySelector(".lightbox-main");
    const viewerCounter = document.getElementById("viewerCounter");
    const thumbs = document.getElementById("thumbs");
    const closeLightbox = document.getElementById("closeLightbox");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    const coordinatedGalleryVideos = new Set();
    let resumeMusicAfterGalleryVideo = false;
    let musicResumeTimer = 0;
    let galleryVideoObserver = null;
    let galleryMediaLoadObserver = null;
    const guestName = document.getElementById("guestName");
    const guestNameField = document.getElementById("guestNameField");
    const guestNameLabel = document.getElementById("guestNameLabel");
    const guestCount = document.getElementById("guestCount");
    const rsvpPersonalization = document.getElementById("rsvpPersonalization");
    const rsvpPersonalizationRecipient = document.getElementById("rsvpPersonalizationRecipient");
    const rsvpPersonalizationText = document.getElementById("rsvpPersonalizationText");
    const rsvpPersonalizationPasses = document.getElementById("rsvpPersonalizationPasses");
    const rsvpInvalidNotice = document.getElementById("rsvpInvalidNotice");
    const familyMembersField = document.getElementById("familyMembersField");
    const familyMembersList = document.getElementById("familyMembersList");
    const confirmYes = document.getElementById("confirmYes");
    const confirmNo = document.getElementById("confirmNo");
    const rsvpCard = document.querySelector("#rsvpSection .rsvp-card");
    const rsvpReceipt = document.getElementById("rsvpReceipt");
    const rsvpReceiptTitle = document.getElementById("rsvpReceiptTitle");
    const rsvpReceiptText = document.getElementById("rsvpReceiptText");
    const rsvpReceiptName = document.getElementById("rsvpReceiptName");
    const rsvpReceiptCount = document.getElementById("rsvpReceiptCount");
    const rsvpReceiptAttendees = document.getElementById("rsvpReceiptAttendees");
    const rsvpReceiptQr = document.getElementById("rsvpReceiptQr");
    const rsvpReceiptFolio = document.getElementById("rsvpReceiptFolio");
    const calendarBtn = document.getElementById("calendarBtn");
    const verCuenta = document.getElementById("verCuenta");
    const toast = document.getElementById("toast");
    const agendaSection = calendarBtn.closest(".section");
    const guestCountField = document.getElementById("guestCountField");
    const giftLinks = document.getElementById("giftLinks");
    const giftOption1Card = document.getElementById("giftOption1Card");
    const giftOption2Card = document.getElementById("giftOption2Card");
    const timelineList = document.getElementById("timelineList");
    const overlayScene = document.getElementById("overlayScene");
    const smartBackground = document.getElementById("smartBackground");
    const smartBackgroundImage = document.getElementById("smartBackgroundImage");
    const sealImage = document.getElementById("sealImage");
    const waxCaption = document.querySelector(".wax-caption");
    const heroImage = document.getElementById("heroImage");
    const heroVideo = document.getElementById("heroVideo");
    const storyImage = document.getElementById("storyImage");
    const ceremonyImage = document.getElementById("ceremonyImage");
    const ceremonyPhoto = document.getElementById("ceremonyPhoto");
    const ceremonyMapEmbed = document.getElementById("ceremonyMapEmbed");
    const ceremonyIconWrap = document.getElementById("ceremonyIconWrap");
    const ceremonyMapWrap = document.getElementById("ceremonyMapWrap");
    const ceremonyPhotoWrap = document.getElementById("ceremonyPhotoWrap");
    const receptionImage = document.getElementById("receptionImage");
    const receptionPhoto = document.getElementById("receptionPhoto");
    const receptionMapEmbed = document.getElementById("receptionMapEmbed");
    const receptionIconWrap = document.getElementById("receptionIconWrap");
    const receptionMapWrap = document.getElementById("receptionMapWrap");
    const receptionPhotoWrap = document.getElementById("receptionPhotoWrap");
    const dressImage = document.getElementById("dressImage");
    const envelopeImage = document.getElementById("envelopeImage");
    const surpriseImage = document.getElementById("surpriseImage");
    const albumQrLink = document.getElementById("albumQrLink");
    const albumQrCanvas = document.getElementById("albumQrCanvas");

    let currentIndex = 0;
    let previewIndex = 0;
    let previousParts = [];
    let storyStarted = false;
    let toastTimer = 0;
    let zoomScale = 1;
    let zoomX = 0;
    let zoomY = 0;
    let pinchStartDistance = 0;
    let pinchStartScale = 1;
    let panStartX = 0;
    let panStartY = 0;
    let dragOriginX = 0;
    let dragOriginY = 0;
    let isPanningImage = false;
    let lastTapTime = 0;
    let smartBackgroundNatural = { width: 0, height: 0 };
    let albumQrCode = null;
    let confirmationQrCode = null;
    let activeRsvpReceipt = null;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const PUBLIC_CONFIG_KEY = "digital_invita_public_config_v1";
    const RSVP_RECEIPT_KEY_PREFIX = "digital_invita_rsvp_receipt_v1";
    const PREVIEW_SKIP_OPENING_KEY = "digital_invita_preview_skip_opening_v1";
    const PREVIEW_SCROLL_KEY = "digital_invita_preview_scroll_y_v1";
    const IS_EMBEDDED_PREVIEW = window.self !== window.top;
    const IS_MOBILE_DEVICE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const USE_MOBILE_BEHAVIOR = IS_MOBILE_DEVICE || IS_EMBEDDED_PREVIEW;
    const IS_LOW_POWER_DEVICE = IS_MOBILE_DEVICE
      && ((navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 6)
      || (navigator.deviceMemory && navigator.deviceMemory <= 6));

    if (IS_LOW_POWER_DEVICE) {
      body.classList.add("low-power");
    }
    if (IS_EMBEDDED_PREVIEW) {
      document.documentElement.classList.add("preview-embed");
    }
    if (USE_MOBILE_BEHAVIOR) {
      body.classList.add("mobile-optimized");
    }

    function setText(id, value) {
      const node = document.getElementById(id);
      if (node && value !== undefined && value !== null) node.textContent = value;
    }

    function applyNameLengthClasses(node, value) {
      if (!node) return;
      const length = String(value || "").replace(/\s+/g, " ").trim().length;
      node.classList.toggle("name-long", length > 14);
      node.classList.toggle("name-very-long", length > 26);
    }

    function setHTML(id, value) {
      const node = document.getElementById(id);
      if (node && value !== undefined && value !== null) node.innerHTML = value;
    }

    function setHref(id, value) {
      const node = document.getElementById(id);
      if (node && value !== undefined && value !== null) node.href = value;
    }

    function setOptionalLink(id, value) {
      const node = document.getElementById(id);
      if (!node) return;
      if (value) {
        node.href = value;
        node.hidden = false;
      } else {
        node.href = "#";
        node.hidden = true;
      }
    }

    function setOptionalText(id, value, enabled = true) {
      const node = document.getElementById(id);
      if (!node) return;
      const text = String(value || "").trim();
      node.textContent = text;
      node.hidden = !enabled || !text;
    }

    function setOptionalImage(node, value) {
      if (!node) return;
      if (value) {
        node.src = value;
        node.closest(".gift-figure, .dresscode-figure, .featured-photo")?.removeAttribute("hidden");
      } else {
        node.removeAttribute("src");
        node.closest(".gift-figure, .dresscode-figure, .featured-photo")?.setAttribute("hidden", "");
      }
    }

    function setScrollLocked(locked) {
      if (locked && !body.classList.contains("locked")) {
        scrollLockY = window.scrollY || document.documentElement.scrollTop || 0;
        body.style.position = "fixed";
        body.style.top = `-${scrollLockY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";
      }
      document.documentElement.classList.toggle("locked-scroll", locked);
      body.classList.toggle("locked", locked);
      if (!locked) {
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        window.scrollTo(0, scrollLockY);
      }
    }

    function updateOverlayScale() {
      if (!overlayScene) return;
      const widthScale = window.innerWidth / 410;
      const heightScale = window.innerHeight / 900;
      const scale = Math.max(0.72, Math.min(1, Math.min(widthScale, heightScale)));
      document.documentElement.style.setProperty("--overlay-scale", scale.toFixed(3));
    }

    function setVisibility(node, visible) {
      if (!node) return;
      node.hidden = !visible;
    }

    function applyLocationMedia(config, nodes) {
      if (!nodes) return;

      const iconSrc = (config.iconSrc || "").trim();
      const mapEmbed = (config.mapEmbed || "").trim();
      const photoSrc = (config.photoSrc || "").trim();
      const requestedMode = config.mediaMode || "icon";

      // El modo del panel decide que recurso existe en DOM activo; evita mapas ocultos cargando en segundo plano.
      let mode = requestedMode;
      if ((mode === "icon" || mode === "combined") && !iconSrc) {
        mode = mapEmbed ? "preview" : (photoSrc ? "photo" : "icon");
      }
      if ((mode === "preview" || mode === "combined") && !mapEmbed) {
        mode = iconSrc ? "icon" : (photoSrc ? "photo" : "preview");
      }
      if (mode === "photo" && !photoSrc) {
        mode = iconSrc ? "icon" : (mapEmbed ? "preview" : "photo");
      }

      const showIcon = mode === "icon" || mode === "combined";
      const showMap = mode === "preview" || mode === "combined";
      const showPhoto = mode === "photo";

      if (nodes.icon) {
        if (showIcon && iconSrc) {
          nodes.icon.src = iconSrc;
        } else {
          nodes.icon.removeAttribute("src");
        }
      }
      if (nodes.map) {
        if (showMap && mapEmbed) {
          nodes.map.src = mapEmbed;
        } else {
          nodes.map.removeAttribute("src");
        }
      }
      if (nodes.photo) {
        if (showPhoto && photoSrc) {
          nodes.photo.src = photoSrc;
        } else {
          nodes.photo.removeAttribute("src");
        }
      }

      setVisibility(nodes.iconWrap, showIcon);
      setVisibility(nodes.mapWrap, showMap);
      setVisibility(nodes.photoWrap, showPhoto);
    }

    function deepMerge(base, override) {
      if (Array.isArray(base)) {
        return Array.isArray(override) ? override : base;
      }

      const result = { ...base };
      Object.keys(override || {}).forEach((key) => {
        const baseValue = base[key];
        const overrideValue = override[key];
        if (baseValue && typeof baseValue === "object" && !Array.isArray(baseValue) && overrideValue && typeof overrideValue === "object" && !Array.isArray(overrideValue)) {
          result[key] = deepMerge(baseValue, overrideValue);
        } else {
          result[key] = overrideValue;
        }
      });
      return result;
    }

    const DEFAULT_CONFIG = JSON.parse(JSON.stringify(INVITATION_CONFIG));
    let BASE_CONFIG = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

    function readStorageItem(key) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.warn("No se pudo leer almacenamiento local.", error);
        return null;
      }
    }

    function writeStorageItem(key, value) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (error) {
        console.warn("No se pudo escribir almacenamiento local.", error);
        return false;
      }
    }

    function loadSavedConfig() {
      try {
        const raw = readStorageItem(PUBLIC_CONFIG_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          Object.assign(INVITATION_CONFIG, deepMerge(INVITATION_CONFIG, parsed));
        }
      } catch (error) {
        console.warn("No se pudo cargar la configuración guardada.", error);
      }
      // Toda configuracion, venga del codigo o del panel, pasa por la misma normalizacion.
      sanitizeInvitationConfig();
    }

    function saveConfigToStorage() {
      sanitizeInvitationConfig();
      return writeStorageItem(STORAGE_KEY, JSON.stringify(INVITATION_CONFIG));
    }

    function saveBaseConfigToStorage() {
      sanitizeInvitationConfig();
      BASE_CONFIG = JSON.parse(JSON.stringify(INVITATION_CONFIG));
      return writeStorageItem(BASE_STORAGE_KEY, JSON.stringify(BASE_CONFIG));
    }

    function validateStorageSnapshot(key) {
      try {
        const saved = readStorageItem(key);
        return Boolean(saved && JSON.parse(saved));
      } catch (error) {
        return false;
      }
    }

    function replaceConfig(target) {
      const clone = JSON.parse(JSON.stringify(target));
      Object.keys(INVITATION_CONFIG).forEach((key) => {
        delete INVITATION_CONFIG[key];
      });
      Object.assign(INVITATION_CONFIG, clone);
    }

    function slugifyFirebaseSegment(value, fallback = "evento-digital") {
      const slug = String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      return slug || fallback;
    }

    function normalizeRsvpFirebaseConfig(value = {}) {
      const eventFallback = INVITATION_CONFIG.meta?.pageTitle || INVITATION_CONFIG.event?.celebrantName || INVITATION_CONFIG.event?.label || "evento-digital";
      return {
        enabled: value.enabled === true,
        validateInvites: value.validateInvites === true,
        invalidInviteMessage: String(value.invalidInviteMessage || "Solicita una invitación válida para poder confirmar.").trim().slice(0, 180),
        eventId: slugifyFirebaseSegment(value.eventId || eventFallback),
        collectionRoot: slugifyFirebaseSegment(value.collectionRoot || "rsvp", "rsvp"),
        apiKey: String(value.apiKey || "").trim(),
        authDomain: String(value.authDomain || "").trim(),
        projectId: String(value.projectId || "").trim(),
        appId: String(value.appId || "").trim()
      };
    }

    function setRootVar(name, value) {
      document.documentElement.style.setProperty(name, value);
    }

    function normalizeMediaSource(value, fallback = "") {
      const source = String(value || "").trim() || String(fallback || "").trim();
      if (!source) return "";
      if (/^(https?:|blob:|data:)/i.test(source)) return source;

      const normalized = source.replace(/^\/+/, "").replace(/\\/g, "/");
      if (normalized.startsWith("media/") || normalized.startsWith("assets/")) return normalized;

      const cleaned = normalized.split("/").pop().trim();
      if (!cleaned) return "";
      if (/\.[a-z0-9]{2,5}$/i.test(cleaned)) return `media/${cleaned}`;

      const fallbackMatch = String(fallback || "").trim().match(/\.([a-z0-9]{2,5})$/i);
      const fallbackExt = fallbackMatch ? `.${fallbackMatch[1]}` : ".jpg";
      return `media/${cleaned}${fallbackExt}`;
    }

    function normalizeAudioSource(value, fallback = "cancio.mp3") {
      const source = String(value || "").trim() || String(fallback || "").trim();
      if (!source) return "";
      if (/^(https?:|blob:|data:)/i.test(source)) return source;
      const normalized = source.replace(/^\/+/, "").replace(/\\/g, "/");
      if (normalized === "cancio.mp3" || normalized.startsWith("media/") || normalized.startsWith("assets/")) return normalized;
      const cleaned = normalized.split("/").pop().trim();
      return cleaned ? `media/${cleaned}` : "";
    }

    function mediaTypeFromSource(value, fallback = "image") {
      const hint = String(fallback || "").toLowerCase();
      if (hint === "video" || hint === "image") return hint;
      const source = String(value || "").trim();
      if (/^data:video\//i.test(source)) return "video";
      if (/^data:image\//i.test(source)) return "image";
      return /\.(mp4|m4v|mov|webm|ogv)$/i.test(source.split(/[?#]/)[0]) ? "video" : "image";
    }

    function mediaLabel(type) {
      return type === "video" ? "Video" : "Foto";
    }

    function cssMediaUrl(value) {
      const source = String(value || "").trim();
      if (/^(https?:|blob:|data:)/i.test(source)) return `url("${source}")`;
      return `url("../${source}")`;
    }

    function cleanPublicUrl(value) {
      const source = String(value || "").trim();
      return /^https?:\/\//i.test(source) ? source : "";
    }

    function makeAbsoluteUrl(baseUrl, path) {
      const source = String(path || "").trim();
      if (!source || /^(https?:|data:|blob:)/i.test(source)) return source;
      const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
      return new URL(source.replace(/^\/+/, ""), base).href;
    }

    function extractMapEmbedUrl(value) {
      const source = String(value || "").trim();
      if (!source) return "";

      // El panel acepta la URL directa o el iframe completo copiado desde Google Maps.
      const srcMatch = source.match(/\bsrc=(["'])(.*?)\1/i);
      const candidate = srcMatch ? srcMatch[2] : source;
      return /^https:\/\/www\.google\.com\/maps\/embed\?/i.test(candidate) ? candidate : "";
    }

    function normalizeMediaMode(value, fallback = "icon") {
      return ["icon", "preview", "combined", "photo"].includes(value) ? value : fallback;
    }

    function normalizeCountdownStyle(value) {
      return ["classic", "pulse", "crystal", "editorial", "military", "military-tags", "military-radar"].includes(value) ? value : "classic";
    }

    function sanitizeImageConfig() {
      if (INVITATION_CONFIG.images.hero === "media/FPrincipal_buzz.jpg") INVITATION_CONFIG.images.hero = "media/FPrincipal.jpg";
      if (INVITATION_CONFIG.images.seal === "media/sello_cera_buzz.png") INVITATION_CONFIG.images.seal = "media/sello_cera.png";
      if (INVITATION_CONFIG.images.envelope === "media/sobre_buzz.svg") INVITATION_CONFIG.images.envelope = "";
      if (INVITATION_CONFIG.images.surprise === "media/regalo_buzz.svg") INVITATION_CONFIG.images.surprise = "";
      INVITATION_CONFIG.images.gallery = (INVITATION_CONFIG.images.gallery || []).filter((item) => ![
        "media/FPrincipal_buzz.jpg",
        "media/sobre_buzz.svg",
        "media/regalo_buzz.svg"
      ].includes(item));
      INVITATION_CONFIG.images.hero = normalizeMediaSource(INVITATION_CONFIG.images.hero, DEFAULT_CONFIG.images.hero);
      INVITATION_CONFIG.images.heroType = mediaTypeFromSource(INVITATION_CONFIG.images.hero, INVITATION_CONFIG.images.heroType);
      INVITATION_CONFIG.images.og = normalizeMediaSource(INVITATION_CONFIG.images.og, "");
      INVITATION_CONFIG.images.story = INVITATION_CONFIG.story?.showImage === false
        ? normalizeMediaSource(INVITATION_CONFIG.images.story, "")
        : normalizeMediaSource(INVITATION_CONFIG.images.story, DEFAULT_CONFIG.images.story);
      INVITATION_CONFIG.images.seal = normalizeMediaSource(INVITATION_CONFIG.images.seal, "media/sello_cera.png");
      INVITATION_CONFIG.images.dress = normalizeMediaSource(INVITATION_CONFIG.images.dress, DEFAULT_CONFIG.images.dress);
      INVITATION_CONFIG.images.envelope = normalizeMediaSource(INVITATION_CONFIG.images.envelope, "");
      INVITATION_CONFIG.images.surprise = normalizeMediaSource(INVITATION_CONFIG.images.surprise, "");
      INVITATION_CONFIG.images.gallery = (INVITATION_CONFIG.images.gallery || [])
        .map((item, index) => normalizeMediaSource(item, DEFAULT_CONFIG.images.gallery[index] || "foto.jpg"))
        .filter(Boolean);
      const galleryTypes = Array.isArray(INVITATION_CONFIG.images.galleryMediaTypes)
        ? INVITATION_CONFIG.images.galleryMediaTypes
        : [];
      INVITATION_CONFIG.images.galleryMediaTypes = INVITATION_CONFIG.images.gallery
        .map((item, index) => mediaTypeFromSource(item, galleryTypes[index]));
      const galleryLayouts = Array.isArray(INVITATION_CONFIG.images.galleryLayouts)
        ? INVITATION_CONFIG.images.galleryLayouts
        : [];
      INVITATION_CONFIG.images.galleryLayouts = INVITATION_CONFIG.images.gallery
        .map((_, index) => normalizeGalleryLayout(galleryLayouts[index]));
    }

    function normalizeGalleryLayout(value) {
      return ["portrait", "landscape", "panorama", "square"].includes(value) ? value : "auto";
    }

    function customSectionOrderKey(section) {
      return `custom:${section.id}`;
    }

    function normalizeSectionOrder(order, customSections = []) {
      const validKeys = [...BASE_SECTION_ORDER, ...customSections.map(customSectionOrderKey)];
      const validSet = new Set(validKeys);
      const normalized = [];
      (Array.isArray(order) ? order : []).forEach((key) => {
        if (!validSet.has(key) || normalized.includes(key)) return;
        normalized.push(key);
      });
      validKeys.forEach((key) => {
        if (!normalized.includes(key)) normalized.push(key);
      });
      return normalized;
    }

    function sanitizeLocationConfig(locationConfig, fallbackMode = "icon") {
      if (!locationConfig) return;
      locationConfig.mediaMode = normalizeMediaMode(locationConfig.mediaMode, fallbackMode);
      locationConfig.iconSrc = normalizeMediaSource(locationConfig.iconSrc, "");
      locationConfig.photoSrc = normalizeMediaSource(locationConfig.photoSrc, "");
      locationConfig.mapEmbed = extractMapEmbedUrl(locationConfig.mapEmbed);
      locationConfig.mapLink = String(locationConfig.mapLink || "").trim();
    }

    function sanitizeInvitationConfig() {
      sanitizeImageConfig();
      const eventAge = Number(INVITATION_CONFIG.event?.age);
      INVITATION_CONFIG.event.age = Number.isFinite(eventAge) && eventAge >= 1 && eventAge <= 99 ? Math.round(eventAge) : "";
      INVITATION_CONFIG.audio = INVITATION_CONFIG.audio || {};
      INVITATION_CONFIG.audio.src = normalizeAudioSource(INVITATION_CONFIG.audio.src, DEFAULT_CONFIG.audio?.src || "cancio.mp3");
      INVITATION_CONFIG.audio.showControl = INVITATION_CONFIG.audio.showControl !== false;
      INVITATION_CONFIG.story.imageSize = clampNumber(INVITATION_CONFIG.story?.imageSize, 50, 110, 100);
      const usedCustomSectionIds = new Set();
      INVITATION_CONFIG.customSections = (Array.isArray(INVITATION_CONFIG.customSections) ? INVITATION_CONFIG.customSections : []).map((section, index) => {
        let id = String(section?.id || `section-${index + 1}`)
          .toLowerCase()
          .replace(/[^a-z0-9_-]+/g, "-")
          .replace(/^-+|-+$/g, "") || `section-${index + 1}`;
        const baseId = id;
        let suffix = 2;
        while (usedCustomSectionIds.has(id)) id = `${baseId}-${suffix++}`;
        usedCustomSectionIds.add(id);
        return {
          id,
          enabled: section?.enabled !== false,
          title: String(section?.title || ""),
          text: String(section?.text || ""),
          images: (Array.isArray(section?.images) ? section.images : [])
            .map((image) => normalizeMediaSource(image, ""))
            .filter(Boolean),
          imageLayout: ["stack", "grid", "featured"].includes(section?.imageLayout) ? section.imageLayout : "stack"
        };
      });
      INVITATION_CONFIG.layout = INVITATION_CONFIG.layout || {};
      INVITATION_CONFIG.layout.sectionOrder = normalizeSectionOrder(INVITATION_CONFIG.layout.sectionOrder, INVITATION_CONFIG.customSections);
      sanitizeLocationConfig(INVITATION_CONFIG.ceremony, "icon");
      sanitizeLocationConfig(INVITATION_CONFIG.reception, "icon");
      INVITATION_CONFIG.theme.particlesEnabled = INVITATION_CONFIG.theme.particlesEnabled !== false;
      INVITATION_CONFIG.theme.openingEffectEnabled = INVITATION_CONFIG.theme.openingEffectEnabled !== false;
      INVITATION_CONFIG.theme.particleDensity = clampNumber(INVITATION_CONFIG.theme.particleDensity, 25, 180, 100);
      INVITATION_CONFIG.theme.particleSize = clampNumber(INVITATION_CONFIG.theme.particleSize, 50, 180, 100);
      INVITATION_CONFIG.theme.particleBrightness = clampNumber(INVITATION_CONFIG.theme.particleBrightness, 40, 180, 100);
      INVITATION_CONFIG.theme.backgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.backgroundImage, "");
      INVITATION_CONFIG.theme.backgroundImageOpacity = clampPercent(INVITATION_CONFIG.theme.backgroundImageOpacity, 55);
      INVITATION_CONFIG.theme.backgroundImagePositionX = clampPercent(INVITATION_CONFIG.theme.backgroundImagePositionX, 50);
      INVITATION_CONFIG.theme.heroGroupOffsetY = clampNumber(INVITATION_CONFIG.theme.heroGroupOffsetY, -700, 700, 0);
      INVITATION_CONFIG.theme.heroLabelOffsetY = clampNumber(INVITATION_CONFIG.theme.heroLabelOffsetY, -650, 650, 0);
      INVITATION_CONFIG.theme.heroNameOffsetY = clampNumber(INVITATION_CONFIG.theme.heroNameOffsetY, -650, 650, 0);
      INVITATION_CONFIG.theme.heroDateOffsetY = clampNumber(INVITATION_CONFIG.theme.heroDateOffsetY, -650, 650, 0);
      INVITATION_CONFIG.theme.heroLabelColor = normalizeHexColor(INVITATION_CONFIG.theme.heroLabelColor, "#fff8ec");
      INVITATION_CONFIG.theme.heroNameColor = normalizeHexColor(INVITATION_CONFIG.theme.heroNameColor, "#fffdf8");
      INVITATION_CONFIG.theme.heroDateColor = normalizeHexColor(INVITATION_CONFIG.theme.heroDateColor, "#fff4cf");
      INVITATION_CONFIG.theme.styleMode = ["space-ranger", "military"].includes(INVITATION_CONFIG.theme.styleMode) ? INVITATION_CONFIG.theme.styleMode : "classic";
      INVITATION_CONFIG.theme.sectionBackgroundEnabled = INVITATION_CONFIG.theme.sectionBackgroundEnabled === true;
      INVITATION_CONFIG.theme.sectionBackgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.sectionBackgroundImage, "");
      INVITATION_CONFIG.theme.sectionBackgroundOpacity = clampPercent(INVITATION_CONFIG.theme.sectionBackgroundOpacity, 70);
      INVITATION_CONFIG.theme.sectionBackgroundPositionX = clampPercent(INVITATION_CONFIG.theme.sectionBackgroundPositionX, 50);
      INVITATION_CONFIG.theme.sectionBackgroundFit = INVITATION_CONFIG.theme.sectionBackgroundFit === "pattern" ? "pattern" : "cover";
      INVITATION_CONFIG.theme.sectionFrameEnabled = INVITATION_CONFIG.theme.sectionFrameEnabled !== false;
      INVITATION_CONFIG.theme.separatorMode = ["line", "image", "none"].includes(INVITATION_CONFIG.theme.separatorMode)
        ? INVITATION_CONFIG.theme.separatorMode
        : "line";
      INVITATION_CONFIG.theme.separatorImage = normalizeMediaSource(INVITATION_CONFIG.theme.separatorImage, "");
      INVITATION_CONFIG.theme.separatorImageWidth = clampNumber(INVITATION_CONFIG.theme.separatorImageWidth, 20, 100, 70);
      INVITATION_CONFIG.rsvp = {
        familyMode: INVITATION_CONFIG.rsvp?.familyMode === true,
        showGuestCount: INVITATION_CONFIG.rsvp?.showGuestCount !== false,
        maxGuests: Math.max(1, Number(INVITATION_CONFIG.rsvp?.maxGuests) || 1),
        advancedConfirmationEnabled: INVITATION_CONFIG.rsvp?.advancedConfirmationEnabled === true,
        personalizedPassesEnabled: INVITATION_CONFIG.rsvp?.personalizedPassesEnabled === true,
        qrDotStyle: ["dots", "rounded", "classy-rounded", "square"].includes(INVITATION_CONFIG.rsvp?.qrDotStyle) ? INVITATION_CONFIG.rsvp.qrDotStyle : "dots",
        qrColor: normalizeHexColor(INVITATION_CONFIG.rsvp?.qrColor, "#393238"),
        qrAccentColor: normalizeHexColor(INVITATION_CONFIG.rsvp?.qrAccentColor, "#a4774d"),
        qrBackgroundColor: normalizeHexColor(INVITATION_CONFIG.rsvp?.qrBackgroundColor, "#ffffff"),
        receiptTitle: String(INVITATION_CONFIG.rsvp?.receiptTitle || "¡Gracias por confirmar!").trim().slice(0, 90),
        receiptText: String(INVITATION_CONFIG.rsvp?.receiptText || "Nos dará mucho gusto compartir este momento con ustedes. Nos vemos pronto.").trim().slice(0, 280),
        reservedPassesText: INVITATION_CONFIG.rsvp?.reservedPassesText === LEGACY_RESERVED_PASSES_TEXT
          ? DEFAULT_RESERVED_PASSES_TEXT
          : INVITATION_CONFIG.rsvp?.reservedPassesText || DEFAULT_RESERVED_PASSES_TEXT,
        previewRecipient: String(INVITATION_CONFIG.rsvp?.previewRecipient || "").trim().slice(0, 120),
        previewPasses: Math.max(0, Math.min(100, Number(INVITATION_CONFIG.rsvp?.previewPasses) || 0)),
        confirmMessage: INVITATION_CONFIG.rsvp?.confirmMessage || DEFAULT_CONFIRM_MESSAGE,
        declineMessage: INVITATION_CONFIG.rsvp?.declineMessage || DEFAULT_DECLINE_MESSAGE,
        familyConfirmMessage: INVITATION_CONFIG.rsvp?.familyConfirmMessage || DEFAULT_FAMILY_CONFIRM_MESSAGE,
        familyDeclineMessage: INVITATION_CONFIG.rsvp?.familyDeclineMessage || DEFAULT_FAMILY_DECLINE_MESSAGE,
        firebase: normalizeRsvpFirebaseConfig(INVITATION_CONFIG.rsvp?.firebase)
      };
      INVITATION_CONFIG.gifts.links = (INVITATION_CONFIG.gifts.links || []).map((link) => ({
        ...link,
        image: normalizeMediaSource(link.image, ""),
        showImage: Boolean(link.showImage && link.image)
      }));
      INVITATION_CONFIG.gifts.showOption1 = INVITATION_CONFIG.gifts.showOption1 !== false;
      INVITATION_CONFIG.gifts.showOption2 = INVITATION_CONFIG.gifts.showOption2 !== false;
      INVITATION_CONFIG.gifts.showLinks = INVITATION_CONFIG.gifts.showLinks !== false;
      INVITATION_CONFIG.album = INVITATION_CONFIG.album || {};
      INVITATION_CONFIG.album.showQr = INVITATION_CONFIG.album.showQr !== false;
      INVITATION_CONFIG.album.qrBackgroundOpacity = clampPercent(INVITATION_CONFIG.album.qrBackgroundOpacity, 100);
      INVITATION_CONFIG.brand = INVITATION_CONFIG.brand || {};
      INVITATION_CONFIG.brand.inheritTheme = INVITATION_CONFIG.brand.inheritTheme !== false;
      INVITATION_CONFIG.brand.footerBg = normalizeHexColor(INVITATION_CONFIG.brand.footerBg, INVITATION_CONFIG.theme.bgMid);
      if (["", "https://wa.me/525550591264", "https://wa.me/525550591264?text=Hola%21%20Quiero%20una%20invitaci%C3%B3n%20digital%20con%20estilo%20elegante%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."].includes(String(INVITATION_CONFIG.brand.ctaHref || "").trim())) {
        INVITATION_CONFIG.brand.ctaHref = DEFAULT_BRAND_CTA_HREF;
      }
      INVITATION_CONFIG.countdown = {
        title: INVITATION_CONFIG.countdown?.title || DEFAULT_CONFIG.countdown?.title || "Faltan pocos días",
        intro: INVITATION_CONFIG.countdown?.intro || DEFAULT_CONFIG.countdown?.intro || "",
        caption: String(INVITATION_CONFIG.countdown?.caption || "").trim(),
        captionColor: normalizeHexColor(
          INVITATION_CONFIG.countdown?.captionColor,
          INVITATION_CONFIG.theme?.muted || DEFAULT_CONFIG.countdown?.captionColor || "#fff4cf"
        ),
        style: normalizeCountdownStyle(INVITATION_CONFIG.countdown?.style)
      };
      INVITATION_CONFIG.family = INVITATION_CONFIG.family || {};
      INVITATION_CONFIG.family.showGrandparents = INVITATION_CONFIG.family.showGrandparents === true;
      INVITATION_CONFIG.family.grandparentsEyebrow = INVITATION_CONFIG.family.grandparentsEyebrow || "Y con la bendición de mis abuelos";
      INVITATION_CONFIG.family.grandparentsNamesHtml = INVITATION_CONFIG.family.grandparentsNamesHtml || "";
      INVITATION_CONFIG.family.parentsGroups = Array.isArray(INVITATION_CONFIG.family.parentsGroups)
        ? INVITATION_CONFIG.family.parentsGroups.filter((group) => group?.label || group?.namesHtml)
        : [];
      INVITATION_CONFIG.family.godparentsItems = Array.isArray(INVITATION_CONFIG.family.godparentsItems)
        ? INVITATION_CONFIG.family.godparentsItems.filter((item) => item?.role || item?.namesHtml)
        : [];
    }

    function normalizeEventLabel(label) {
      return (label || "").trim().replace(/\s+/g, " ");
    }

    function getEventCopy() {
      const name = (INVITATION_CONFIG.event.celebrantName || "").trim();
      const label = normalizeEventLabel(INVITATION_CONFIG.event.label);
      const normalized = label.toLowerCase();
      const customCalendarTitle = String(INVITATION_CONFIG.event.calendarTitle || "").trim();

      if (!label && !name) {
        return {
          pageTitle: "Invitación digital",
          celebrationText: "este evento tan especial",
          eventHeader: "Invitación digital",
          calendarTitle: customCalendarTitle || "Invitación digital",
          calendarDetails: "Acompáñame a celebrar este momento especial."
        };
      }

      if (/^mis\s*xv$/.test(normalized) || /^xv$/.test(normalized)) {
        return {
          pageTitle: name ? `${label} | ${name}` : label,
          celebrationText: name ? `los XV de ${name}` : "los XV",
          eventHeader: name ? `XV de ${name}` : "XV",
          calendarTitle: customCalendarTitle || (name ? `XV de ${name}` : "XV"),
          calendarDetails: name
            ? `Acompáñame a celebrar los XV de ${name}.`
            : "Acompáñame a celebrar unos XV inolvidables."
        };
      }

      if (INVITATION_CONFIG.event.template === "wedding" || normalized.includes("boda") || normalized.includes("matrimonio")) {
        return {
          pageTitle: [label || "Nuestra Boda", name].filter(Boolean).join(" | "),
          celebrationText: name ? `la boda de ${name}` : "nuestra boda",
          eventHeader: name ? `Boda de ${name}` : (label || "Nuestra Boda"),
          calendarTitle: customCalendarTitle || (name ? `Boda de ${name}` : (label || "Nuestra Boda")),
          calendarDetails: name
            ? `Acompáñanos a celebrar la boda de ${name}.`
            : "Acompáñanos a celebrar nuestra boda."
        };
      }

      if (INVITATION_CONFIG.event.template === "baptism" || normalized.includes("bautizo") || normalized.includes("bautismo")) {
        return {
          pageTitle: [label || "Mi Bautizo", name].filter(Boolean).join(" | "),
          celebrationText: name ? `el Bautizo de ${name}` : "este Bautizo",
          eventHeader: name ? `Bautizo de ${name}` : (label || "Mi Bautizo"),
          calendarTitle: customCalendarTitle || (name ? `Bautizo de ${name}` : (label || "Mi Bautizo")),
          calendarDetails: name
            ? `Acompáñanos a celebrar el Bautizo de ${name}.`
            : "Acompáñanos a celebrar este día de fe y amor."
        };
      }

      if (INVITATION_CONFIG.event.template === "kids" || normalized.includes("misión") || normalized.includes("mision") || normalized.includes("cumple") || normalized.includes("añito")) {
        if (INVITATION_CONFIG.theme.styleMode === "military") {
          return {
            pageTitle: [label || "Operación cumpleaños", name].filter(Boolean).join(" | "),
            celebrationText: name ? `el cumpleaños de ${name}` : "esta celebración de cumpleaños",
            eventHeader: name ? `Operación cumpleaños de ${name}` : (label || "Operación cumpleaños"),
            calendarTitle: customCalendarTitle || (name ? `Cumpleaños de ${name}` : (label || "Operación cumpleaños")),
            calendarDetails: name
              ? `Has sido convocado para celebrar el cumpleaños de ${name}.`
              : "Has sido convocado para celebrar este cumpleaños."
          };
        }
        return {
          pageTitle: [label || "Misión de cumpleaños", name].filter(Boolean).join(" | "),
          celebrationText: name ? `la misión de cumpleaños de ${name}` : "esta misión de cumpleaños",
          eventHeader: name ? `Misión de ${name}` : (label || "Misión de cumpleaños"),
          calendarTitle: customCalendarTitle || (name ? `Cumpleaños de ${name}` : (label || "Misión de cumpleaños")),
          calendarDetails: name
            ? `Acompáñanos a celebrar la misión de cumpleaños de ${name}.`
            : "Acompáñanos a celebrar esta misión de cumpleaños."
        };
      }

      const joinedTitle = [label, name].filter(Boolean).join(" de ");
      return {
        pageTitle: joinedTitle || label || name,
        celebrationText: joinedTitle || label || name,
        eventHeader: joinedTitle || label || name,
        calendarTitle: customCalendarTitle || joinedTitle || label || name,
        calendarDetails: joinedTitle
          ? `Acompáñame a celebrar ${joinedTitle}.`
          : "Acompáñame a celebrar este momento especial."
      };
    }

    function getVisibleEventLabel() {
      const isMilitaryKids = INVITATION_CONFIG.event?.template === "kids"
        && INVITATION_CONFIG.theme?.styleMode === "military";
      if (!isMilitaryKids) return INVITATION_CONFIG.event.label;

      const age = Number(INVITATION_CONFIG.event.age);
      if (!Number.isFinite(age) || age < 1) return "Misión de cumpleaños";
      return `Misión: ${age} ${age === 1 ? "año" : "años"}`;
    }

    function cssFontValue(label, fallback) {
      label = String(label || "").split(" - ")[0].trim();
      const knownFonts = new Set([
        "Alex Brush",
        "Allura",
        "Bodoni Moda",
        "Cinzel",
        "Cormorant Garamond",
        "Cormorant Infant",
        "Dancing Script",
        "EB Garamond",
        "Forum",
        "Fredoka",
        "GFS Didot",
        "Great Vibes",
        "Imperial Script",
        "Italianno",
        "Libre Baskerville",
        "Lora",
        "Marcellus",
        "Montserrat",
        "Mrs Saint Delafield",
        "Nanum Myeongjo",
        "Orbitron",
        "Parisienne",
        "Petit Formal Script",
        "Pinyon Script",
        "Playfair Display",
        "Poppins",
        "Prata",
        "Sacramento",
        "Tangerine"
      ]);
      if (label === "Georgia") return "Georgia, serif";
      if (label === "Times New Roman") return "\"Times New Roman\", serif";
      if (knownFonts.has(label)) {
        const fallbackFamily = ["Montserrat", "Poppins", "Fredoka", "Orbitron"].includes(label) ? "sans-serif" : "serif";
        return `"${label}", ${fallbackFamily}`;
      }
      return fallback;
    }

    function slugifyText(value) {
      return (value || "invitacion-digital")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        || "invitacion-digital";
    }

    function clampColorChannel(value) {
      return Math.max(0, Math.min(255, Math.round(value)));
    }

    function normalizeHexColor(value, fallback = "#ffffff") {
      const source = String(value || "").trim();
      const shortMatch = source.match(/^#([0-9a-f]{3})$/i);
      if (shortMatch) {
        return `#${shortMatch[1].split("").map((char) => char + char).join("")}`.toLowerCase();
      }
      if (/^#[0-9a-f]{6}$/i.test(source)) return source.toLowerCase();
      return fallback;
    }

    function hexToRgb(value, fallback = "#ffffff") {
      const hex = normalizeHexColor(value, fallback).slice(1);
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
      };
    }

    function rgbToHex({ r, g, b }) {
      return `#${[r, g, b].map((channel) => clampColorChannel(channel).toString(16).padStart(2, "0")).join("")}`;
    }

    function mixColors(color, target, amount) {
      const base = hexToRgb(color);
      const mix = hexToRgb(target);
      return rgbToHex({
        r: base.r + (mix.r - base.r) * amount,
        g: base.g + (mix.g - base.g) * amount,
        b: base.b + (mix.b - base.b) * amount
      });
    }

    function rgbList(value, fallback = "#ffffff") {
      const { r, g, b } = hexToRgb(value, fallback);
      return `${r}, ${g}, ${b}`;
    }

    function rgbaColor(value, alpha) {
      return `rgba(${rgbList(value)}, ${alpha})`;
    }

    function clampPercent(value, fallback = 100) {
      const number = Number(value);
      if (!Number.isFinite(number)) return fallback;
      return Math.max(0, Math.min(100, Math.round(number)));
    }

    function clampNumber(value, min, max, fallback) {
      const number = Number(value);
      if (!Number.isFinite(number)) return fallback;
      return Math.max(min, Math.min(max, Math.round(number)));
    }

    function applyThemeColors() {
      const bgTop = normalizeHexColor(INVITATION_CONFIG.theme.bgTop, DEFAULT_CONFIG.theme.bgTop);
      const bgMid = normalizeHexColor(INVITATION_CONFIG.theme.bgMid, DEFAULT_CONFIG.theme.bgMid);
      const bgBottom = normalizeHexColor(INVITATION_CONFIG.theme.bgBottom, DEFAULT_CONFIG.theme.bgBottom);
      const gold = normalizeHexColor(INVITATION_CONFIG.theme.gold500, DEFAULT_CONFIG.theme.gold500);
      const gold100 = mixColors(gold, "#ffffff", 0.72);
      const gold300 = mixColors(gold, "#ffffff", 0.34);
      const gold700 = mixColors(gold, "#000000", 0.36);
      const sectionTitle = normalizeHexColor(INVITATION_CONFIG.theme.sectionTitle || gold100, gold100);
      const scriptColor = normalizeHexColor(INVITATION_CONFIG.theme.scriptColor || sectionTitle, sectionTitle);
      const timelineColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineColor || gold, gold);
      const text = normalizeHexColor(INVITATION_CONFIG.theme.text, DEFAULT_CONFIG.theme.text);
      const muted = normalizeHexColor(INVITATION_CONFIG.theme.muted, DEFAULT_CONFIG.theme.muted || text);
      const timelineTimeColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineTimeColor || sectionTitle, sectionTitle);
      const timelineTitleColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineTitleColor || text, text);
      const timelineDescColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineDescColor || muted, muted);
      const timelineFont = INVITATION_CONFIG.theme.timelineFont || INVITATION_CONFIG.theme.bodyFont || DEFAULT_CONFIG.theme.bodyFont;
      const locationTitleColor = normalizeHexColor(INVITATION_CONFIG.theme.locationTitleColor || sectionTitle, sectionTitle);
      const locationTimeColor = normalizeHexColor(INVITATION_CONFIG.theme.locationTimeColor || sectionTitle, sectionTitle);
      const locationPlaceColor = normalizeHexColor(INVITATION_CONFIG.theme.locationPlaceColor || text, text);
      const particleColor = normalizeHexColor(INVITATION_CONFIG.theme.particleColor || gold100, gold100);
      const buttonBg = normalizeHexColor(INVITATION_CONFIG.theme.buttonBg || gold, gold);
      const buttonText = normalizeHexColor(INVITATION_CONFIG.theme.buttonText || "#ffffff", "#ffffff");
      const fieldLabel = normalizeHexColor(INVITATION_CONFIG.theme.fieldLabel || sectionTitle, sectionTitle);
      const fieldText = normalizeHexColor(INVITATION_CONFIG.theme.fieldText || text, text);
      const closingColor = normalizeHexColor(INVITATION_CONFIG.theme.closingColor || sectionTitle, sectionTitle);
      const heroLabelColor = normalizeHexColor(INVITATION_CONFIG.theme.heroLabelColor || "#fff8ec", "#fff8ec");
      const heroNameColor = normalizeHexColor(INVITATION_CONFIG.theme.heroNameColor || "#fffdf8", "#fffdf8");
      const heroDateColor = normalizeHexColor(INVITATION_CONFIG.theme.heroDateColor || gold100, gold100);
      const openingKicker = normalizeHexColor(INVITATION_CONFIG.theme.openingKicker || sectionTitle, sectionTitle);
      const openingTitle = normalizeHexColor(INVITATION_CONFIG.theme.openingTitle || scriptColor, scriptColor);
      const openingAccent = normalizeHexColor(INVITATION_CONFIG.theme.openingAccent || gold, gold);
      const openingTitleSoft = mixColors(openingTitle, "#ffffff", 0.34);
      const sectionOpacity = clampPercent(INVITATION_CONFIG.theme.sectionOpacity, 100);
      const sectionFrameEnabled = INVITATION_CONFIG.theme.sectionFrameEnabled !== false;
      const separatorMode = ["line", "image", "none"].includes(INVITATION_CONFIG.theme.separatorMode)
        ? INVITATION_CONFIG.theme.separatorMode
        : "line";
      const separatorImage = normalizeMediaSource(INVITATION_CONFIG.theme.separatorImage, "");
      const separatorImageWidth = clampNumber(INVITATION_CONFIG.theme.separatorImageWidth, 20, 100, 70);
      const openingOpacity = clampPercent(INVITATION_CONFIG.theme.openingOpacity, 100);
      const openingEffectEnabled = INVITATION_CONFIG.theme.openingEffectEnabled !== false;
      const particlesEnabled = INVITATION_CONFIG.theme.particlesEnabled !== false;
      const backgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.backgroundImage, "");
      const backgroundImageOpacity = clampPercent(INVITATION_CONFIG.theme.backgroundImageOpacity, 55);
      const backgroundImagePositionX = clampPercent(INVITATION_CONFIG.theme.backgroundImagePositionX, 50);
      const heroGroupOffsetY = clampNumber(INVITATION_CONFIG.theme.heroGroupOffsetY, -700, 700, 0);
      const heroLabelOffsetY = clampNumber(INVITATION_CONFIG.theme.heroLabelOffsetY, -650, 650, 0);
      const heroNameOffsetY = clampNumber(INVITATION_CONFIG.theme.heroNameOffsetY, -650, 650, 0);
      const heroDateOffsetY = clampNumber(INVITATION_CONFIG.theme.heroDateOffsetY, -650, 650, 0);
      const sectionBackgroundEnabled = INVITATION_CONFIG.theme.sectionBackgroundEnabled === true;
      const sectionBackgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.sectionBackgroundImage, "");
      const sectionBackgroundOpacity = clampPercent(INVITATION_CONFIG.theme.sectionBackgroundOpacity, 70);
      const sectionBackgroundPositionX = clampPercent(INVITATION_CONFIG.theme.sectionBackgroundPositionX, 50);
      const sectionBackgroundFit = INVITATION_CONFIG.theme.sectionBackgroundFit === "pattern" ? "pattern" : "cover";
      const styleMode = ["space-ranger", "military"].includes(INVITATION_CONFIG.theme.styleMode) ? INVITATION_CONFIG.theme.styleMode : "classic";
      const footerBg = INVITATION_CONFIG.brand?.inheritTheme !== false
        ? bgMid
        : normalizeHexColor(INVITATION_CONFIG.brand?.footerBg, bgMid);
      const footerRgb = hexToRgb(footerBg);
      const footerBrightness = (footerRgb.r * 299 + footerRgb.g * 587 + footerRgb.b * 114) / 1000;
      const footerText = footerBrightness > 168 ? "#172033" : "#fff8ec";
      const sectionRatio = sectionOpacity / 100;
      const openingRatio = openingOpacity / 100;

      Object.assign(INVITATION_CONFIG.theme, {
        bgTop,
        bgMid,
        bgBottom,
        gold500: gold,
        sectionTitle,
        scriptColor,
        timelineColor,
        timelineTimeColor,
        timelineTitleColor,
        timelineDescColor,
        timelineFont,
        locationTitleColor,
        locationTimeColor,
        locationPlaceColor,
        particleColor,
        buttonBg,
        buttonText,
        fieldLabel,
        fieldText,
        closingColor,
        heroLabelColor,
        heroNameColor,
        heroDateColor,
        openingKicker,
        openingTitle,
        openingAccent,
        openingTitleSoft,
        text,
        muted,
        sectionOpacity,
        sectionFrameEnabled,
        separatorMode,
        separatorImage,
        separatorImageWidth,
        openingOpacity,
        openingEffectEnabled,
        particlesEnabled,
        backgroundImage,
        backgroundImageOpacity,
        backgroundImagePositionX,
        heroGroupOffsetY,
        heroLabelOffsetY,
        heroNameOffsetY,
        heroDateOffsetY,
        sectionBackgroundEnabled,
        sectionBackgroundImage,
        sectionBackgroundOpacity,
        sectionBackgroundPositionX,
        sectionBackgroundFit,
        styleMode
      });

      setRootVar("--bg-top", bgTop);
      setRootVar("--bg-mid", bgMid);
      setRootVar("--bg-bottom", bgBottom);
      setRootVar("--bg-glow-top", rgbaColor(bgTop, 0.18));
      setRootVar("--bg-glow-mid", rgbaColor(bgMid, 0.18));
      setRootVar("--bg-glow-bottom", rgbaColor(bgBottom, 0.14));
      setRootVar("--gold-100", gold100);
      setRootVar("--gold-300", gold300);
      setRootVar("--gold-500", gold);
      setRootVar("--gold-700", gold700);
      setRootVar("--gold-rgb", rgbList(gold));
      setRootVar("--gold-soft-rgb", rgbList(gold100));
      setRootVar("--section-title", sectionTitle);
      setRootVar("--section-title-rgb", rgbList(sectionTitle));
      setRootVar("--script-color", scriptColor);
      setRootVar("--script-rgb", rgbList(scriptColor));
      setRootVar("--timeline-color", timelineColor);
      setRootVar("--timeline-rgb", rgbList(timelineColor));
      setRootVar("--timeline-time-color", timelineTimeColor);
      setRootVar("--timeline-title-color", timelineTitleColor);
      setRootVar("--timeline-desc-color", timelineDescColor);
      setRootVar("--timeline-font", cssFontValue(timelineFont, "\"Cormorant Garamond\", serif"));
      setRootVar("--location-title-color", locationTitleColor);
      setRootVar("--location-time-color", locationTimeColor);
      setRootVar("--location-place-color", locationPlaceColor);
      setRootVar("--particle-color", particleColor);
      setRootVar("--particle-rgb", rgbList(particleColor));
      setRootVar("--button-bg", buttonBg);
      setRootVar("--button-bg-rgb", rgbList(buttonBg));
      setRootVar("--button-text", buttonText);
      setRootVar("--field-label", fieldLabel);
      setRootVar("--field-text", fieldText);
      setRootVar("--closing-color", closingColor);
      setRootVar("--hero-label-color", heroLabelColor);
      setRootVar("--hero-name-color", heroNameColor);
      setRootVar("--hero-date-color", heroDateColor);
      setRootVar("--footer-bg-rgb", rgbList(footerBg));
      setRootVar("--footer-text", footerText);
      setRootVar("--footer-text-rgb", rgbList(footerText));
      setRootVar("--opening-kicker", openingKicker);
      setRootVar("--opening-title", openingTitle);
      setRootVar("--opening-title-soft", openingTitleSoft);
      setRootVar("--opening-title-rgb", rgbList(openingTitle));
      setRootVar("--opening-accent", openingAccent);
      setRootVar("--opening-accent-rgb", rgbList(openingAccent));
      setRootVar("--line", rgbaColor(gold, 0.28));
      setRootVar("--text", text);
      setRootVar("--muted", muted);
      setRootVar("--section-fill-top", `rgba(255, 255, 255, ${(0.09 * sectionRatio).toFixed(3)})`);
      setRootVar("--section-fill-bottom", `rgba(255, 255, 255, ${(0.05 * sectionRatio).toFixed(3)})`);
      setRootVar("--space-section-fill-bottom", `rgba(8, 20, 47, ${(0.42 * sectionRatio).toFixed(3)})`);
      setRootVar("--space-section-accent-a", (0.08 * sectionRatio).toFixed(3));
      setRootVar("--space-section-particle-a", (0.06 * sectionRatio).toFixed(3));
      setRootVar("--section-blur", `${(18 * sectionRatio).toFixed(1)}px`);
      setRootVar("--separator-image", separatorImage ? cssMediaUrl(separatorImage) : "none");
      setRootVar("--separator-image-width", `${separatorImageWidth}%`);
      setRootVar("--separator-line-width", `${Math.round(72 + ((separatorImageWidth - 20) / 80) * 228)}px`);
      setRootVar("--smart-bg-opacity", (backgroundImageOpacity / 100).toFixed(3));
      setRootVar("--hero-group-offset-y", `${heroGroupOffsetY}px`);
      setRootVar("--hero-label-offset-y", `${heroLabelOffsetY}px`);
      setRootVar("--hero-name-offset-y", `${heroNameOffsetY}px`);
      setRootVar("--hero-date-offset-y", `${heroDateOffsetY}px`);
      const sectionTextureRatio = sectionBackgroundEnabled && sectionBackgroundImage ? sectionBackgroundOpacity / 100 : 0;
      setRootVar("--military-section-texture", sectionBackgroundEnabled && sectionBackgroundImage ? `url(${JSON.stringify(sectionBackgroundImage)})` : "none");
      setRootVar("--military-section-texture-position", `${sectionBackgroundPositionX}% center`);
      setRootVar("--military-section-texture-size", sectionBackgroundFit === "pattern" ? "480px auto" : "cover");
      setRootVar("--military-section-texture-repeat", sectionBackgroundFit === "pattern" ? "repeat" : "no-repeat");
      setRootVar("--military-section-shade-top", (0.98 - (0.38 * sectionTextureRatio)).toFixed(3));
      setRootVar("--military-section-shade-bottom", (0.98 - (0.34 * sectionTextureRatio)).toFixed(3));
      setRootVar("--opening-bg-a", (0.82 * openingRatio).toFixed(3));
      setRootVar("--opening-bg-strong-a", (0.9 * openingRatio).toFixed(3));
      setRootVar("--opening-photo-a", (0.2 * openingRatio).toFixed(3));
      setRootVar("--opening-glass-top-a", (0.065 * openingRatio).toFixed(3));
      setRootVar("--opening-glass-mid-a", (0.018 * openingRatio).toFixed(3));
      setRootVar("--opening-glass-bottom-a", (0.04 * openingRatio).toFixed(3));
      setRootVar("--overlay-glass-blur", `${(14 * openingRatio).toFixed(1)}px`);
      document.documentElement.classList.toggle("particles-disabled", !particlesEnabled);
      document.documentElement.classList.toggle("sections-frameless", !sectionFrameEnabled);
      document.documentElement.classList.toggle("separator-image", separatorMode === "image" && Boolean(separatorImage));
      document.documentElement.classList.toggle("separator-none", separatorMode === "none" || (separatorMode === "image" && !separatorImage));
      document.documentElement.classList.toggle("theme-space-ranger", styleMode === "space-ranger");
      document.documentElement.classList.toggle("theme-military", styleMode === "military");
    }

    function getDocumentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        window.innerHeight
      );
    }

    function updateSmartBackgroundLayout() {
      if (!smartBackground || !smartBackgroundImage || !smartBackground.classList.contains("is-active")) return;
      const naturalWidth = smartBackgroundNatural.width || smartBackgroundImage.naturalWidth;
      const naturalHeight = smartBackgroundNatural.height || smartBackgroundImage.naturalHeight;
      if (!naturalWidth || !naturalHeight) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const documentHeight = getDocumentHeight();
      const scale = Math.max(viewportWidth / naturalWidth, viewportHeight / naturalHeight);
      const renderedWidth = Math.ceil(naturalWidth * scale);
      const renderedHeight = Math.ceil(naturalHeight * scale);
      const extraX = Math.max(0, renderedWidth - viewportWidth);
      const extraY = Math.max(0, renderedHeight - viewportHeight);
      const scrollablePage = Math.max(1, documentHeight - viewportHeight);
      const scrollProgress = Math.max(0, Math.min(1, window.scrollY / scrollablePage));
      const positionX = clampPercent(INVITATION_CONFIG.theme.backgroundImagePositionX, 50) / 100;
      const x = -extraX * positionX;
      const y = extraY > 1 ? -extraY * scrollProgress : 0;

      smartBackgroundImage.style.width = `${renderedWidth}px`;
      smartBackgroundImage.style.height = `${renderedHeight}px`;
      smartBackgroundImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      setRootVar("--smart-bg-y", `${y}px`);
    }

    function applySmartBackground() {
      if (!smartBackground || !smartBackgroundImage) return;
      const source = INVITATION_CONFIG.theme.backgroundImage;
      const active = Boolean(source);
      smartBackground.classList.toggle("is-active", active);
      if (!active) {
        smartBackgroundImage.removeAttribute("src");
        smartBackgroundNatural = { width: 0, height: 0 };
        return;
      }

      if (smartBackgroundImage.getAttribute("src") !== source) {
        smartBackgroundNatural = { width: 0, height: 0 };
        smartBackgroundImage.onload = () => {
          smartBackgroundNatural = {
            width: smartBackgroundImage.naturalWidth,
            height: smartBackgroundImage.naturalHeight
          };
          updateSmartBackgroundLayout();
        };
        smartBackgroundImage.src = source;
      } else {
        updateSmartBackgroundLayout();
      }
    }

    function renderGiftButtons() {
      if (!giftLinks) return;
      giftLinks.innerHTML = "";

      const links = INVITATION_CONFIG.gifts.links || [];
      const showLinks = INVITATION_CONFIG.gifts.showLinks !== false;
      const intro = document.getElementById("giftLinksIntro");

      if (intro) intro.style.display = showLinks && links.length ? "" : "none";
      if (!showLinks || !links.length) {
        giftLinks.style.display = "none";
        return;
      }

      giftLinks.style.display = "grid";
      links.forEach((link) => {
        const anchor = document.createElement("a");
        const hasImage = Boolean(link.showImage && link.image);
        const label = link.label || (hasImage ? "Abrir mesa" : "Botón");
        anchor.className = hasImage
          ? `gift-link-card gift-link-card--${link.style === "secondary" ? "secondary" : "primary"}`
          : (link.style === "secondary" ? "btn btn-secondary" : "btn");
        anchor.href = link.href || "#";
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        if (hasImage) {
          const media = document.createElement("span");
          media.className = "gift-link-card__media";
          const image = document.createElement("img");
          image.src = link.image;
          image.alt = label || "Mesa de regalos";
          image.loading = "lazy";
          image.decoding = "async";
          media.appendChild(image);
          const text = document.createElement("span");
          text.className = "gift-link-card__button";
          text.textContent = label;
          anchor.append(media, text);
        } else {
          anchor.textContent = label;
        }
        giftLinks.appendChild(anchor);
      });
    }

    function configureInlineVideo(video, src, options = {}) {
      if (!video) return;
      if (src) video.src = src;
      else video.removeAttribute("src");
      video.muted = options.muted !== false;
      video.loop = options.loop !== false;
      video.playsInline = true;
      video.preload = options.preload || "metadata";
      video.controls = Boolean(options.controls);
      if (options.autoplay !== false) {
        if (video.dataset.musicCoordinator === "true") {
          playCoordinatedGalleryVideo(video);
        } else {
          video.play().catch(() => {});
        }
      }
    }

    function loadProgressiveGalleryMedia(media) {
      const source = media?.dataset?.src;
      if (!media || !source) return;
      media.src = source;
      delete media.dataset.src;
      if (media.tagName === "VIDEO") {
        media.addEventListener("canplay", () => tryAutoplayGalleryVideo(media), { once: true });
        media.load();
        if (media.readyState >= 2) requestAnimationFrame(() => tryAutoplayGalleryVideo(media));
      }
    }

    function prepareProgressiveGalleryMedia(media, src) {
      if (!media || !src) return;
      media.dataset.src = src;
      if (typeof IntersectionObserver !== "function") {
        loadProgressiveGalleryMedia(media);
        return;
      }
      galleryMediaLoadObserver ||= new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          galleryMediaLoadObserver.unobserve(entry.target);
          loadProgressiveGalleryMedia(entry.target);
        });
      }, { rootMargin: "650px 0px", threshold: 0.01 });
      galleryMediaLoadObserver.observe(media);
    }

    function updateMusicButtonForPlayback() {
      if (!musicBtn || INVITATION_CONFIG.audio?.showControl === false) return;
      musicBtn.classList.toggle("is-paused", audio.paused);
      musicBtn.setAttribute("aria-label", audio.paused ? "Reproducir música" : "Pausar música");
    }

    function resumeMusicAfterVideoIfNeeded() {
      clearTimeout(musicResumeTimer);
      musicResumeTimer = window.setTimeout(() => {
        const anotherVideoIsPlaying = Array.from(coordinatedGalleryVideos)
          .some((video) => !video.paused && !video.ended);
        if (anotherVideoIsPlaying || !resumeMusicAfterGalleryVideo) return;

        resumeMusicAfterGalleryVideo = false;
        if (INVITATION_CONFIG.audio?.showControl === false || !overlay.classList.contains("hidden")) return;
        if (!audio.paused) {
          updateMusicButtonForPlayback();
          return;
        }
        audio.play().then(updateMusicButtonForPlayback).catch(() => {});
      }, 90);
    }

    function tryAutoplayGalleryVideo(video) {
      if (!video || video.dataset.autoplayWhenVisible !== "true") return;
      const canAutoplay = video.dataset.galleryVisible === "true"
        && !video.hidden
        && !video.ended
        && Boolean(video.currentSrc || video.src)
        && overlay.classList.contains("hidden")
        && !lightbox.classList.contains("show");
      if (canAutoplay && video.paused) playCoordinatedGalleryVideo(video);
    }

    function playCoordinatedGalleryVideo(video) {
      if (!video || !video.paused) return;
      clearTimeout(musicResumeTimer);
      if (!audio.paused) resumeMusicAfterGalleryVideo = true;
      audio.pause();
      updateMusicButtonForPlayback();
      video.play().catch(() => {
        resumeMusicAfterVideoIfNeeded();
      });
    }

    function registerGalleryVideoPlayback(video, options = {}) {
      if (!video || video.dataset.musicCoordinator === "true") return;
      video.dataset.musicCoordinator = "true";
      video.dataset.autoplayWhenVisible = options.autoplayWhenVisible === true ? "true" : "false";
      coordinatedGalleryVideos.add(video);

      video.addEventListener("play", () => {
        clearTimeout(musicResumeTimer);
        coordinatedGalleryVideos.forEach((otherVideo) => {
          if (otherVideo !== video && !otherVideo.paused) otherVideo.pause();
        });
        if (!audio.paused) resumeMusicAfterGalleryVideo = true;
        audio.pause();
        updateMusicButtonForPlayback();
      });
      video.addEventListener("pause", resumeMusicAfterVideoIfNeeded);
      video.addEventListener("ended", resumeMusicAfterVideoIfNeeded);

      if (options.observeVisibility === true && typeof IntersectionObserver === "function") {
        galleryVideoObserver ||= new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const video = entry.target;
            video.dataset.galleryVisible = entry.intersectionRatio >= 0.65 ? "true" : "false";
            if (entry.intersectionRatio < 0.2) {
              if (!video.paused) video.pause();
              return;
            }
            tryAutoplayGalleryVideo(video);
          });
        }, { threshold: [0, 0.2, 0.55, 0.65] });
        galleryVideoObserver.observe(video);
      }
    }

    function releaseGalleryVideoPlayback(video) {
      if (!video) return;
      galleryVideoObserver?.unobserve(video);
      galleryMediaLoadObserver?.unobserve(video);
      video.dataset.galleryVisible = "false";
      coordinatedGalleryVideos.delete(video);
      if (!video.paused) video.pause();
    }

    registerGalleryVideoPlayback(galleryPreviewVideo, { observeVisibility: true });
    registerGalleryVideoPlayback(lightboxVideo);

    function createGalleryMedia(item, options = {}) {
      const node = document.createElement(item.type === "video" ? "video" : "img");
      node.className = "gallery-media";
      node.dataset.mediaType = item.type;
      const progressive = options.progressive === true;
      if (item.type === "video") {
        const autoplayWhenVisible = options.autoplayWhenVisible === true;
        configureInlineVideo(node, progressive ? "" : item.src, {
          controls: false,
          muted: !autoplayWhenVisible,
          loop: !autoplayWhenVisible,
          preload: progressive ? "none" : "metadata",
          autoplay: false
        });
        if (progressive) prepareProgressiveGalleryMedia(node, item.src);
        if (autoplayWhenVisible) {
          registerGalleryVideoPlayback(node, { observeVisibility: true, autoplayWhenVisible: true });
        }
        node.setAttribute("aria-label", item.alt);
      } else {
        node.alt = item.alt;
        node.loading = "lazy";
        node.decoding = "async";
        node.fetchPriority = "low";
        node.src = item.src;
      }
      return node;
    }

    function applyHeroMedia() {
      const src = INVITATION_CONFIG.images.hero;
      const type = mediaTypeFromSource(src, INVITATION_CONFIG.images.heroType);
      if (type === "video" && heroVideo) {
        if (heroImage) heroImage.hidden = true;
        heroVideo.hidden = false;
        configureInlineVideo(heroVideo, src, { controls: false, muted: true, loop: true, preload: "metadata" });
      } else if (heroImage) {
        if (heroVideo) {
          heroVideo.pause();
          heroVideo.removeAttribute("src");
          heroVideo.load();
          heroVideo.hidden = true;
        }
        heroImage.hidden = false;
        heroImage.src = src;
        heroImage.alt = `Portada de ${INVITATION_CONFIG.event.celebrantName}`;
      }
    }

    function renderGalleryGrid() {
      if (!galleryGrid) return;
      galleryGrid.querySelectorAll("video").forEach(releaseGalleryVideoPlayback);
      galleryGrid.querySelectorAll("[data-src]").forEach((media) => galleryMediaLoadObserver?.unobserve(media));
      galleryGrid.innerHTML = "";
      const items = INVITATION_CONFIG.images.gallery || [];
      const types = INVITATION_CONFIG.images.galleryMediaTypes || [];
      const layouts = INVITATION_CONFIG.images.galleryLayouts || [];
      galleryItems = items.map((src, index) => {
        const type = mediaTypeFromSource(src, types[index]);
        const layout = normalizeGalleryLayout(layouts[index]);
        const item = {
          src,
          type,
          alt: `${mediaLabel(type)} ${index + 1}`,
          element: null
        };
        const button = document.createElement("button");
        button.type = "button";
        button.className = "gallery-item";
        button.classList.toggle("gallery-item--video", item.type === "video");
        button.dataset.galleryIndex = String(index);
        button.dataset.galleryLayout = layout;
        button.setAttribute("aria-label", `Abrir ${item.alt}`);
        button.addEventListener("click", () => {
          updateGalleryPreview(index);
          openLightbox(index);
        });
        const completesThreePhotoLayout = items.length === 3 && index === 2;
        const usesExpandedGalleryPattern = items.length > 3 && (index % 6 === 2 || index % 6 === 3);
        if (layout === "auto") {
          if (completesThreePhotoLayout || usesExpandedGalleryPattern) button.classList.add("big");
        } else {
          button.classList.add(`gallery-item--${layout}`);
        }
        const mediaNode = createGalleryMedia(item, {
          autoplayWhenVisible: item.type === "video",
          progressive: item.type === "video"
        });
        button.appendChild(mediaNode);
        if (type === "video") {
          const badge = document.createElement("span");
          badge.className = "gallery-video-badge";
          badge.setAttribute("aria-hidden", "true");
          mediaNode.addEventListener("play", () => badge.classList.add("is-playing"));
          mediaNode.addEventListener("pause", () => badge.classList.remove("is-playing"));
          mediaNode.addEventListener("ended", () => badge.classList.remove("is-playing"));
          button.appendChild(badge);
        }
        item.element = button;
        galleryGrid.appendChild(button);
        return item;
      });
      if (galleryItems.length) {
        if (galleryShowcase) galleryShowcase.style.display = "";
        previewIndex = Math.min(previewIndex, galleryItems.length - 1);
        currentIndex = Math.min(currentIndex, galleryItems.length - 1);
        updateGalleryPreview(previewIndex);
      } else {
        if (galleryShowcase) galleryShowcase.style.display = "none";
        previewIndex = 0;
        currentIndex = 0;
      }
    }

    function renderTimeline() {
      if (!timelineList) return;
      timelineList.innerHTML = "";

      (INVITATION_CONFIG.timeline.items || []).forEach((item) => {
        const node = document.createElement("div");
        if (item.type === "day-separator") {
          node.className = "timeline-item timeline-day-separator";
          const label = document.createElement("div");
          label.className = "timeline-day-label";
          label.textContent = item.title || "Día siguiente";
          node.appendChild(label);
          timelineList.appendChild(node);
          return;
        }
        node.className = "timeline-item";
        node.innerHTML = `
          <div class="timeline-time">${item.time || ""}</div>
          <div class="timeline-title">${item.title || ""}</div>
          <div class="timeline-desc">${item.desc || ""}</div>
        `;
        timelineList.appendChild(node);
      });
    }

    function renderDressCodeList(value) {
      const dressValue = document.getElementById("dressValue");
      if (!dressValue) return;
      const items = String(value || "")
        .split(/\r?\n/)
        .map((item) => item.replace(/^[\s\-–—•]+/, "").trim())
        .filter(Boolean);

      dressValue.innerHTML = "";
      items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        dressValue.appendChild(listItem);
      });
      dressValue.hidden = items.length === 0;
    }

    function renderFamilyGroups() {
      const simpleParents = document.getElementById("parentsNames");
      const groupsWrap = document.getElementById("parentsGroups");
      const groups = INVITATION_CONFIG.family.parentsGroups || [];
      if (!groupsWrap || !simpleParents) return;
      groupsWrap.innerHTML = "";
      groupsWrap.hidden = !groups.length;
      simpleParents.hidden = Boolean(groups.length);
      groups.forEach((group) => {
        const node = document.createElement("article");
        node.className = "family-group";
        node.innerHTML = `
          ${group.label ? `<strong class="family-label">${group.label}</strong>` : ""}
          ${group.namesHtml ? `<div class="family-names">${group.namesHtml}</div>` : ""}
        `;
        groupsWrap.appendChild(node);
      });
    }

    function renderGrandparentsBlock() {
      const block = document.getElementById("grandparentsBlock");
      const title = document.getElementById("grandparentsEyebrow");
      const names = document.getElementById("grandparentsNames");
      if (!block || !title || !names) return;
      const enabled = INVITATION_CONFIG.family?.showGrandparents === true;
      const titleText = INVITATION_CONFIG.family?.grandparentsEyebrow || "";
      const namesHtml = INVITATION_CONFIG.family?.grandparentsNamesHtml || "";
      block.hidden = !(enabled && (titleText || namesHtml));
      title.textContent = titleText;
      names.innerHTML = namesHtml;
      title.hidden = !titleText;
      names.hidden = !namesHtml;
    }

    function renderGodparentsItems() {
      const simpleGodparents = document.getElementById("godparentsNames");
      const itemsWrap = document.getElementById("godparentsItems");
      const items = INVITATION_CONFIG.family.godparentsItems || [];
      if (!itemsWrap || !simpleGodparents) return;
      itemsWrap.innerHTML = "";
      itemsWrap.hidden = !items.length;
      simpleGodparents.hidden = Boolean(items.length);
      items.forEach((item) => {
        const node = document.createElement("article");
        node.className = "godparent-item";
        node.innerHTML = `
          ${item.role ? `<strong class="godparent-role">${item.role}</strong>` : ""}
          ${item.namesHtml ? `<div class="godparent-names">${item.namesHtml}</div>` : ""}
        `;
        itemsWrap.appendChild(node);
      });
    }

    function renderCustomSections() {
      const page = document.querySelector(".page");
      if (!page || !brandFooter) return;
      page.querySelectorAll("[data-custom-section-key]").forEach((node) => node.remove());

      INVITATION_CONFIG.customSections.forEach((section) => {
        const orderKey = customSectionOrderKey(section);
        const node = document.createElement("section");
        node.className = "section custom-section";
        node.id = `custom-${section.id}`;
        node.dataset.customSectionKey = orderKey;

        if (section.title) {
          const title = document.createElement("h2");
          title.textContent = section.title;
          node.appendChild(title);
        }
        if (section.text) {
          const text = document.createElement("p");
          text.className = "custom-section-text";
          text.textContent = section.text;
          node.appendChild(text);
        }
        if (section.images.length) {
          const media = document.createElement("div");
          media.className = `custom-section-media custom-section-media--${section.imageLayout}`;
          section.images.forEach((src, imageIndex) => {
            const image = document.createElement("img");
            image.src = src;
            image.alt = section.title ? `${section.title}, imagen ${imageIndex + 1}` : `Imagen ${imageIndex + 1}`;
            image.loading = "lazy";
            image.decoding = "async";
            media.appendChild(image);
          });
          node.appendChild(media);
        }
        page.insertBefore(node, brandFooter);
      });
    }

    function getSectionMap() {
      const map = {
        story: document.getElementById("storySection"),
        parents: document.getElementById("parentsSection"),
        godparents: document.getElementById("godparentsSection"),
        ceremony: document.getElementById("ceremonySection"),
        reception: document.getElementById("receptionSection"),
        timeline: document.getElementById("timelineSection"),
        countdown: document.getElementById("countdown-section"),
        gallery: document.getElementById("gallerySection"),
        dress: document.getElementById("dressSection"),
        adultNotice: document.getElementById("adultNoticeSection"),
        rsvp: document.getElementById("rsvpSection"),
        gifts: document.getElementById("giftSection"),
        agenda: document.getElementById("agendaSectionUi"),
        album: document.getElementById("albumSection"),
        closing: document.getElementById("closingNote")
      };
      document.querySelectorAll("[data-custom-section-key]").forEach((node) => {
        map[node.dataset.customSectionKey] = node;
      });
      return map;
    }

    function applySectionStyles() {
      const styles = INVITATION_CONFIG.sectionStyles || {};
      const sectionMap = getSectionMap();
      Object.entries(sectionMap).forEach(([key, element]) => {
        if (!element) return;
        const style = styles[key] || {};
        const properties = [
          "--section-title", "--script-color", "--text", "--muted",
          "--button-bg", "--button-bg-rgb", "--button-text",
          "--field-label", "--field-text",
          "--location-title-color", "--location-time-color", "--location-place-color",
          "--timeline-time-color", "--timeline-title-color", "--timeline-desc-color",
          "--closing-color"
        ];
        properties.forEach((property) => element.style.removeProperty(property));
        if (style.inheritTheme !== false) return;

        const titleColor = normalizeHexColor(style.titleColor, INVITATION_CONFIG.theme.sectionTitle);
        const textColor = normalizeHexColor(style.textColor, INVITATION_CONFIG.theme.text);
        const buttonBg = normalizeHexColor(style.buttonBg, INVITATION_CONFIG.theme.buttonBg);
        const buttonText = normalizeHexColor(style.buttonText, INVITATION_CONFIG.theme.buttonText);
        element.style.setProperty("--section-title", titleColor);
        element.style.setProperty("--script-color", titleColor);
        element.style.setProperty("--text", textColor);
        element.style.setProperty("--muted", textColor);
        element.style.setProperty("--button-bg", buttonBg);
        element.style.setProperty("--button-bg-rgb", rgbList(buttonBg));
        element.style.setProperty("--button-text", buttonText);
        if (["ceremony", "reception"].includes(key)) {
          const timeColor = normalizeHexColor(style.timeColor, INVITATION_CONFIG.theme.locationTimeColor);
          element.style.setProperty("--location-title-color", titleColor);
          element.style.setProperty("--location-time-color", timeColor);
          element.style.setProperty("--location-place-color", textColor);
        }
        if (key === "timeline") {
          element.style.setProperty("--timeline-time-color", textColor);
          element.style.setProperty("--timeline-title-color", textColor);
          element.style.setProperty("--timeline-desc-color", textColor);
        }
        if (key === "rsvp") {
          element.style.setProperty("--field-label", textColor);
          element.style.setProperty("--field-text", textColor);
        }
        if (key === "closing") {
          element.style.setProperty("--closing-color", titleColor);
        }
      });
    }

    function applySectionOrder() {
      const page = document.querySelector(".page");
      if (!page || !brandFooter) return;

      const blockMap = getSectionMap();

      const requestedOrder = Array.isArray(INVITATION_CONFIG.layout?.sectionOrder)
        ? INVITATION_CONFIG.layout.sectionOrder
        : [];
      const resolvedOrder = [];
      const seen = new Set();

      requestedOrder.forEach((key) => {
        if (!blockMap[key] || seen.has(key)) return;
        resolvedOrder.push(key);
        seen.add(key);
      });

      Object.keys(blockMap).forEach((key) => {
        if (!blockMap[key] || seen.has(key)) return;
        resolvedOrder.push(key);
      });

      Array.from(page.querySelectorAll(".separator")).forEach((separator) => separator.remove());
      Object.values(blockMap).forEach((node) => {
        if (node?.parentNode === page) page.removeChild(node);
      });

      const fragment = document.createDocumentFragment();
      resolvedOrder.forEach((key) => {
        const node = blockMap[key];
        if (!node) return;
        const separator = document.createElement("div");
        separator.className = "separator";
        fragment.appendChild(separator);
        fragment.appendChild(node);
      });

      page.insertBefore(fragment, brandFooter);
    }

    function syncSeparators() {
      const page = document.querySelector(".page");
      if (!page) return;

      const children = Array.from(page.children);
      const isVisibleBlock = (node) => {
        if (!node) return false;
        if (!node.matches(".section, .closing-note")) return false;
        return getComputedStyle(node).display !== "none";
      };

      children.filter((node) => node.classList.contains("separator")).forEach((separator) => {
        separator.style.display = "none";
      });

      let previousVisibleBlock = null;
      let pendingSeparator = null;
      children.forEach((node) => {
        if (node.classList.contains("separator")) {
          if (previousVisibleBlock && !pendingSeparator) pendingSeparator = node;
          return;
        }
        if (!node.matches(".section, .closing-note")) {
          previousVisibleBlock = null;
          pendingSeparator = null;
          return;
        }
        if (!isVisibleBlock(node)) return;
        if (previousVisibleBlock && pendingSeparator) pendingSeparator.style.display = "";
        previousVisibleBlock = node;
        pendingSeparator = null;
      });
    }

    function applySectionVisibility() {
      const sectionMap = getSectionMap();

      Object.entries(sectionMap).forEach(([key, element]) => {
        if (!element) return;
        if (key.startsWith("custom:")) {
          const section = INVITATION_CONFIG.customSections.find((item) => customSectionOrderKey(item) === key);
          element.style.display = section?.enabled === false ? "none" : "";
        } else {
          element.style.display = INVITATION_CONFIG.sections[key] === false ? "none" : "";
        }
      });

      syncSeparators();
    }

    function applyCountdownStyle() {
      const countdownSection = document.getElementById("countdown-section");
      if (!countdownSection) return;
      const style = normalizeCountdownStyle(INVITATION_CONFIG.countdown?.style);
      countdownSection.classList.remove(
        "countdown-style-classic",
        "countdown-style-pulse",
        "countdown-style-crystal",
        "countdown-style-editorial",
        "countdown-style-military",
        "countdown-style-military-tags",
        "countdown-style-military-radar"
      );
      countdownSection.classList.add(`countdown-style-${style}`);
    }

    function syncEventRuntimeValues() {
      EVENT_DATE = new Date(INVITATION_CONFIG.event.eventDate);
      EVENT_END = new Date(INVITATION_CONFIG.event.eventEnd);
      EVENT_LOCATION = INVITATION_CONFIG.reception.place
        || INVITATION_CONFIG.event.eventLocation
        || INVITATION_CONFIG.ceremony.place
        || "";
      RSVP_PHONE = INVITATION_CONFIG.event.rsvpPhone;
      RSVP_COUNTRY_CODE = INVITATION_CONFIG.event.rsvpCountryCode || "52";

      fechaEvento.textContent = Number.isNaN(EVENT_DATE.getTime())
        ? ""
        : EVENT_DATE.toLocaleDateString("es-MX", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
    }

    function resolveAlbumQrColor() {
      const candidate = String(INVITATION_CONFIG.theme?.buttonBg || INVITATION_CONFIG.theme?.sectionTitle || "#172033").trim();
      const match = candidate.match(/^#([0-9a-f]{6})$/i);
      if (!match) return "#172033";
      const value = Number.parseInt(match[1], 16);
      const red = (value >> 16) & 255;
      const green = (value >> 8) & 255;
      const blue = value & 255;
      const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
      return brightness > 170 ? "#172033" : candidate;
    }

    function resolveAlbumQrHref() {
      const href = String(INVITATION_CONFIG.album?.buttonHref || "").trim();
      if (!href || href === "#" || /^javascript:/i.test(href)) return "";
      try {
        return new URL(href, window.location.href).href;
      } catch {
        return "";
      }
    }

    function normalizeAlbumQrLayout() {
      const svg = albumQrCanvas?.querySelector("svg");
      if (!svg) return;
      const width = Number(svg.getAttribute("width")) || 200;
      const height = Number(svg.getAttribute("height")) || width;
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    }

    function renderAlbumQr() {
      if (!albumQrLink || !albumQrCanvas) return;
      const href = resolveAlbumQrHref();
      const visible = INVITATION_CONFIG.album?.showQr !== false && Boolean(href);
      albumQrLink.hidden = !visible;
      if (!visible) return;

      albumQrLink.href = href;
      const backgroundOpacity = clampPercent(INVITATION_CONFIG.album?.qrBackgroundOpacity, 100) / 100;
      albumQrLink.style.setProperty("--album-qr-bg-opacity", backgroundOpacity.toFixed(2));
      if (typeof window.QRCodeStyling !== "function") {
        albumQrLink.hidden = true;
        return;
      }

      const color = resolveAlbumQrColor();
      const options = {
        width: 200,
        height: 200,
        type: "svg",
        data: href,
        margin: 10,
        qrOptions: { errorCorrectionLevel: "Q" },
        dotsOptions: { color, type: "dots" },
        cornersSquareOptions: { color, type: "extra-rounded" },
        cornersDotOptions: { color, type: "dot" },
        backgroundOptions: { color: "rgba(255,255,255,0)" }
      };

      if (!albumQrCode) {
        albumQrCode = new window.QRCodeStyling(options);
        albumQrCode.append(albumQrCanvas);
      } else {
        albumQrCode.update(options);
      }
      normalizeAlbumQrLayout();
      window.requestAnimationFrame(normalizeAlbumQrLayout);
    }

    function applyAudioSource() {
      if (!audioSource) return;
      const nextSource = normalizeAudioSource(INVITATION_CONFIG.audio?.src, "cancio.mp3");
      if (audioSource.getAttribute("src") === nextSource) return;
      const wasPaused = audio.paused;
      audioSource.setAttribute("src", nextSource);
      audio.load();
      if (!wasPaused) audio.play().catch(() => {});
    }

    function applyInvitationConfig() {
      sanitizeInvitationConfig();
      const eventCopy = getEventCopy();
      const resolvedPageTitle = INVITATION_CONFIG.meta.pageTitle?.trim()
        || eventCopy.pageTitle;
      const resolvedOgTitle = INVITATION_CONFIG.meta.ogTitle?.trim()
        || resolvedPageTitle;
      document.title = resolvedPageTitle;

      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      const ogSecureImage = document.querySelector('meta[property="og:image:secure_url"]');
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      const publicUrl = cleanPublicUrl(INVITATION_CONFIG.meta.publicUrl || "");
      const shareImage = INVITATION_CONFIG.images.og || (mediaTypeFromSource(INVITATION_CONFIG.images.hero, INVITATION_CONFIG.images.heroType) === "image" ? INVITATION_CONFIG.images.hero : INVITATION_CONFIG.images.story);
      const shareImageUrl = publicUrl ? makeAbsoluteUrl(publicUrl, shareImage) : shareImage;
      if (ogTitle) ogTitle.setAttribute("content", resolvedOgTitle);
      if (ogDescription) ogDescription.setAttribute("content", INVITATION_CONFIG.meta.ogDescription);
      if (ogImage && shareImageUrl) ogImage.setAttribute("content", shareImageUrl);
      if (ogSecureImage && shareImageUrl) ogSecureImage.setAttribute("content", shareImageUrl);
      if (twitterImage && shareImageUrl) twitterImage.setAttribute("content", shareImageUrl);
      if (ogUrl) ogUrl.setAttribute("content", publicUrl);

      const visibleEventLabel = getVisibleEventLabel();
      setText("overlayKicker", visibleEventLabel);
      setText("overlayTitle", INVITATION_CONFIG.event.celebrantName);
      setText("heroLabel", visibleEventLabel);
      setText("nombre", INVITATION_CONFIG.event.celebrantName);
      applyNameLengthClasses(overlayTitle, INVITATION_CONFIG.event.celebrantName);
      applyNameLengthClasses(heroName, INVITATION_CONFIG.event.celebrantName);
      syncEventRuntimeValues();
      applyAudioSource();
      applyMusicControlState();

      applyThemeColors();
      applySectionStyles();
      applyCountdownStyle();
      applySmartBackground();
      window.dispatchEvent(new CustomEvent("digitalInvita:visualSettingsChanged"));
      document.documentElement.style.setProperty("--overlay-image", cssMediaUrl(INVITATION_CONFIG.images.hero));
      setRootVar("--font-body", cssFontValue(INVITATION_CONFIG.theme.bodyFont, "\"Cormorant Garamond\", serif"));
      setRootVar("--font-script", cssFontValue(INVITATION_CONFIG.theme.scriptFont, "\"Dancing Script\", cursive"));
      setRootVar("--font-display", cssFontValue(INVITATION_CONFIG.theme.displayFont, "\"Great Vibes\", cursive"));
      setRootVar("--story-image-width", `${INVITATION_CONFIG.story.imageSize}%`);
      if (waxCaption) waxCaption.textContent = INVITATION_CONFIG.theme.styleMode === "military"
        ? "Ingresar al cuartel"
        : INVITATION_CONFIG.theme.styleMode === "space-ranger" ? "Iniciar misión" : "Abrir invitación";
      const launchStatusText = document.querySelector(".launch-status strong");
      if (launchStatusText) launchStatusText.textContent = INVITATION_CONFIG.theme.styleMode === "military" ? "Formación lista" : "Sistemas listos";
      if (missionAccepted) missionAccepted.textContent = INVITATION_CONFIG.theme.styleMode === "military" ? "Acceso autorizado" : "Misión aceptada";
      if (sealImage) sealImage.src = INVITATION_CONFIG.images.seal || "sello_cera.png";
      applyHeroMedia();
      if (storyImage) storyImage.src = INVITATION_CONFIG.images.story;
      if (storyImage) storyImage.alt = `Fotografía de ${INVITATION_CONFIG.event.celebrantName}`;
      if (dressImage) dressImage.src = INVITATION_CONFIG.images.dress;
      setOptionalImage(envelopeImage, INVITATION_CONFIG.images.envelope);
      setOptionalImage(surpriseImage, INVITATION_CONFIG.images.surprise);
      if (storySection) storySection.classList.toggle("story-no-image", INVITATION_CONFIG.story.showImage === false);
      renderGalleryGrid();

      setText("storyTitle", INVITATION_CONFIG.story.title);
      const story1 = document.getElementById("storyText1");
      const story2 = document.getElementById("storyText2");
      if (story1) {
        story1.dataset.fulltext = INVITATION_CONFIG.story.paragraph1;
        story1.textContent = storyStarted ? INVITATION_CONFIG.story.paragraph1 : "";
      }
      if (story2) {
        story2.dataset.fulltext = INVITATION_CONFIG.story.paragraph2;
        story2.textContent = storyStarted ? INVITATION_CONFIG.story.paragraph2 : "";
      }

      setText("parentsEyebrow", INVITATION_CONFIG.family.parentsEyebrow);
      setHTML("parentsNames", INVITATION_CONFIG.family.parentsNamesHtml);
      renderFamilyGroups();
      renderGrandparentsBlock();
      setText("parentsInviteText", INVITATION_CONFIG.family.parentsInviteText);
      setText("godparentsEyebrow", INVITATION_CONFIG.family.godparentsEyebrow);
      setHTML("godparentsNames", INVITATION_CONFIG.family.godparentsNamesHtml);
      renderGodparentsItems();

      setText("ceremonyTitle", INVITATION_CONFIG.ceremony.title);
      setText("ceremonyTime", INVITATION_CONFIG.ceremony.time);
      setText("ceremonyPlace", INVITATION_CONFIG.ceremony.place);
      setOptionalText("ceremonyPlaceDetail", INVITATION_CONFIG.ceremony.placeDetail, INVITATION_CONFIG.ceremony.showPlaceDetail === true);
      setOptionalLink("ceremonyMapLink", INVITATION_CONFIG.ceremony.mapLink);
      applyLocationMedia({
        ...INVITATION_CONFIG.ceremony
      }, {
        icon: ceremonyImage,
        map: ceremonyMapEmbed,
        photo: ceremonyPhoto,
        iconWrap: ceremonyIconWrap,
        mapWrap: ceremonyMapWrap,
        photoWrap: ceremonyPhotoWrap
      });

      setText("receptionTitle", INVITATION_CONFIG.reception.title);
      setText("receptionTime", INVITATION_CONFIG.reception.time);
      setText("receptionPlace", INVITATION_CONFIG.reception.place);
      setOptionalText("receptionPlaceDetail", INVITATION_CONFIG.reception.placeDetail, INVITATION_CONFIG.reception.showPlaceDetail === true);
      setOptionalLink("receptionMapLink", INVITATION_CONFIG.reception.mapLink);
      applyLocationMedia(INVITATION_CONFIG.reception, {
        icon: receptionImage,
        map: receptionMapEmbed,
        photo: receptionPhoto,
        iconWrap: receptionIconWrap,
        mapWrap: receptionMapWrap,
        photoWrap: receptionPhotoWrap
      });
      renderTimeline();

      setText("countdownTitle", INVITATION_CONFIG.countdown.title);
      setText("countdownIntro", INVITATION_CONFIG.countdown.intro);
      if (countdownCaption) countdownCaption.style.color = INVITATION_CONFIG.countdown.captionColor;

      setText("dressTitle", INVITATION_CONFIG.dressCode.title);
      renderDressCodeList(INVITATION_CONFIG.dressCode.value);
      setText("dressNote", INVITATION_CONFIG.dressCode.note);
      setText("adultNoticeTitle", INVITATION_CONFIG.adultNotice?.title || "Una celebración para adultos");
      setText("adultNoticeText", INVITATION_CONFIG.adultNotice?.text || "");

      setText("giftTitle", INVITATION_CONFIG.gifts.title);
      setText("giftIntro", INVITATION_CONFIG.gifts.intro);
      setText("giftOption1Title", INVITATION_CONFIG.gifts.option1Title);
      setText("giftOption1Copy", INVITATION_CONFIG.gifts.option1Copy);
      setText("giftOption2Title", INVITATION_CONFIG.gifts.option2Title);
      setText("giftOption2Copy", INVITATION_CONFIG.gifts.option2Copy);
      setText("giftLinksIntro", INVITATION_CONFIG.gifts.linksIntro);
      if (giftOption1Card) giftOption1Card.style.display = INVITATION_CONFIG.gifts.showOption1 === false ? "none" : "";
      if (giftOption2Card) giftOption2Card.style.display = INVITATION_CONFIG.gifts.showOption2 === false ? "none" : "";
      const giftOptions = document.querySelector(".gift-options");
      if (giftOptions) {
        const visibleGiftCards = [INVITATION_CONFIG.gifts.showOption1 !== false, INVITATION_CONFIG.gifts.showOption2 !== false].filter(Boolean).length;
        giftOptions.classList.toggle("single-option", visibleGiftCards <= 1);
      }
      renderGiftButtons();
      if (galleryItems.length) updateGalleryPreview(previewIndex);

      setText("albumTitle", INVITATION_CONFIG.album?.title || "Álbum digital");
      setText("albumCopy", INVITATION_CONFIG.album?.copy || "");
      setText("albumBtn", INVITATION_CONFIG.album?.buttonLabel || "Ver álbum digital");
      setHref("albumBtn", INVITATION_CONFIG.album?.buttonHref || "#");
      renderAlbumQr();

      setText("closingNote", INVITATION_CONFIG.closing.note);
      setText("brandLink", INVITATION_CONFIG.brand.creditText);
      setHref("brandLink", INVITATION_CONFIG.brand.creditHref);
      setText("brandCtaLink", INVITATION_CONFIG.brand.ctaLabel);
      setHref("brandCtaLink", INVITATION_CONFIG.brand.ctaHref);

      const personalization = getRsvpPersonalization();
      const familyMode = isFamilyRsvp(personalization);
      guestCount.dataset.pases = String(personalization.active ? personalization.passes : (INVITATION_CONFIG.rsvp.maxGuests || 1));
      guestNameLabel.textContent = familyMode ? "Apellido o nombre de la familia" : "Tu nombre";
      guestName.placeholder = familyMode ? "Ej. Hernández García" : "Escríbelo aquí";
      guestNameField.style.display = personalization.active ? "none" : "";
      guestCountField.style.display = !personalization.active && !familyMode && INVITATION_CONFIG.rsvp.showGuestCount === false ? "none" : "";
      if (personalization.active) {
        guestName.value = personalization.recipient;
        guestName.readOnly = true;
        guestName.dataset.personalized = "true";
        rsvpPersonalization.hidden = false;
        rsvpPersonalizationRecipient.textContent = personalization.recipient;
        rsvpPersonalizationText.textContent = formatReservedPassesText(personalization);
        rsvpPersonalizationPasses.textContent = personalization.passes === 1 ? "1 pase" : `${personalization.passes} pases`;
      } else {
        if (guestName.dataset.personalized === "true") guestName.value = "";
        guestName.readOnly = false;
        delete guestName.dataset.personalized;
        rsvpPersonalization.hidden = true;
        rsvpPersonalizationRecipient.textContent = "";
        rsvpPersonalizationText.textContent = "";
        rsvpPersonalizationPasses.textContent = "";
      }
      if (!familyMode) {
        familyMembersField.hidden = true;
        familyMembersList.innerHTML = "";
      }
      renderCustomSections();
      applySectionOrder();
      applySectionVisibility();
      populateGuestOptions();
      restoreRsvpReceipt();
      validateRsvpAccess();
    }

    function applyPreviewOpenState() {
      if (!document.documentElement.classList.contains("preview-embed")) return;

      const skipOpening = readStorageItem(PREVIEW_SKIP_OPENING_KEY) !== "false";
      document.documentElement.classList.toggle("preview-live", skipOpening);
      overlay.classList.remove("opening", "elegant-opening");
      openBtn.disabled = false;
      warpFlash?.classList.remove("active", "elegant");
      missionAccepted?.classList.remove("active");

      if (!skipOpening) {
        overlay.classList.remove("hidden");
        overlay.setAttribute("aria-hidden", "false");
        setScrollLocked(true);
        musicBtn.classList.remove("show");
        return;
      }

      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      setScrollLocked(false);
      if (INVITATION_CONFIG.audio?.showControl !== false) {
        musicBtn.classList.add("show");
        musicBtn.classList.add("is-paused");
      }
      heroLabel.classList.add("animate");
      heroName.classList.add("animate");
      fechaEvento.classList.add("animate");

      const scrollY = Number(readStorageItem(PREVIEW_SCROLL_KEY) || 0);
      if (scrollY > 0) {
        requestAnimationFrame(() => window.scrollTo(0, scrollY));
      }
    }

    function exposePreviewBridge() {
      if (!document.documentElement.classList.contains("preview-embed")) return;

      window.digitalInvitaPreviewApply = (nextConfig, scrollY = window.scrollY) => {
        replaceConfig(deepMerge(DEFAULT_CONFIG, nextConfig || {}));
        storyStarted = true;
        applyInvitationConfig();
        applyPreviewOpenState();
        updateCountdown();
        revealOnScroll();
        requestAnimationFrame(() => window.scrollTo(0, Math.max(0, Number(scrollY) || 0)));
      };

      window.addEventListener("scroll", () => {
        try {
          localStorage.setItem(PREVIEW_SCROLL_KEY, String(window.scrollY || 0));
        } catch {}
      }, { passive: true });
    }

    loadSavedConfig();
    applyInvitationConfig();
    applyPreviewOpenState();
    exposePreviewBridge();
    updateOverlayScale();
    setScrollLocked(!overlay.classList.contains("hidden"));

    function populateGuestOptions() {
      const personalization = getRsvpPersonalization();
      const familyMode = isFamilyRsvp(personalization);
      if (personalization.active) {
        guestCount.innerHTML = '<option value="" disabled selected>Selecciona una opción</option>';
        for (let total = 1; total <= personalization.passes; total += 1) {
          const option = document.createElement("option");
          option.value = String(total);
          option.textContent = total === 1 ? "1 persona" : `${total} personas`;
          guestCount.appendChild(option);
        }
        renderFamilyMemberFields();
        return;
      }
      if (!familyMode && INVITATION_CONFIG.rsvp.showGuestCount === false) {
        guestCount.innerHTML = '<option value="">No aplica</option>';
        return;
      }

      const maxPases = Number(guestCount.dataset.pases) || 1;
      guestCount.innerHTML = '<option value="" disabled selected>Selecciona una opción</option>';

      for (let i = 0; i < maxPases; i += 1) {
        const option = document.createElement("option");
        if (familyMode) {
          const total = i + 1;
          option.value = String(total);
          option.textContent = total === 1 ? "1 persona" : `${total} personas`;
        } else if (i === 0) {
          option.value = "Asistiré solo";
          option.textContent = "Asistiré solo";
        } else {
          const plural = i > 1 ? "s" : "";
          const acompana = i > 1 ? "n" : "";
          option.value = `Me acompaña${acompana} ${i} persona${plural}`;
          option.textContent = option.value;
        }
        guestCount.appendChild(option);
      }
      renderFamilyMemberFields();
    }

    function renderFamilyMemberFields() {
      const personalization = getRsvpPersonalization();
      if (!isFamilyRsvp(personalization)) {
        familyMembersField.hidden = true;
        familyMembersList.innerHTML = "";
        return;
      }
      const count = Math.max(0, Number(guestCount.value) || 0);
      const existingNames = Array.from(familyMembersList.querySelectorAll("input")).map((input) => input.value);
      familyMembersList.innerHTML = "";
      familyMembersField.hidden = count === 0;
      for (let index = 0; index < count; index += 1) {
        const wrapper = document.createElement("label");
        wrapper.className = "family-member-field";
        wrapper.innerHTML = `<span>Integrante ${index + 1}</span><input type="text" autocomplete="name" placeholder="Nombre completo" value="${escapeAttribute(existingNames[index] || "")}">`;
        familyMembersList.appendChild(wrapper);
      }
    }

    function getFamilyMemberNames() {
      return Array.from(familyMembersList.querySelectorAll("input")).map((input) => input.value.trim());
    }

    function getRsvpPersonalization() {
      if (INVITATION_CONFIG.rsvp.personalizedPassesEnabled !== true) {
        return { active: false, recipient: "", passes: 0 };
      }
      if (rsvpValidatedPersonalization?.active) return rsvpValidatedPersonalization;
      const params = new URLSearchParams(window.location.search);
      const previewMode = document.documentElement.classList.contains("preview-embed");
      const recipient = String(params.get("para") || (previewMode ? INVITATION_CONFIG.rsvp.previewRecipient : "") || "").trim().slice(0, 120);
      const parsedPasses = Number.parseInt(params.get("pases") || (previewMode ? INVITATION_CONFIG.rsvp.previewPasses : "") || "", 10);
      const passes = Number.isFinite(parsedPasses) ? Math.max(1, Math.min(100, parsedPasses)) : 0;
      const code = String(params.get("codigo") || params.get("id") || params.get("token") || "").trim().slice(0, 80);
      return { active: Boolean(recipient && passes), recipient, passes, code };
    }

    function isFamilyRsvp(personalization = getRsvpPersonalization()) {
      return INVITATION_CONFIG.rsvp.familyMode === true;
    }

    function requiresRsvpInviteValidation() {
      const cfg = INVITATION_CONFIG.rsvp?.firebase || {};
      return INVITATION_CONFIG.rsvp.personalizedPassesEnabled === true
        && cfg.enabled === true
        && cfg.validateInvites === true;
    }

    function setRsvpBlocked(message, detail = "Este enlace no contiene los datos necesarios o ya no está registrado para este evento.") {
      if (!rsvpInvalidNotice) return;
      rsvpValidatedPersonalization = null;
      rsvpCard.hidden = true;
      rsvpReceipt.hidden = true;
      rsvpPersonalization.hidden = true;
      rsvpInvalidNotice.hidden = false;
      const title = rsvpInvalidNotice.querySelector("strong");
      const text = rsvpInvalidNotice.querySelector("p");
      if (title) title.textContent = message || INVITATION_CONFIG.rsvp.firebase.invalidInviteMessage;
      if (text) text.textContent = detail;
    }

    function clearRsvpBlocked() {
      if (rsvpInvalidNotice) rsvpInvalidNotice.hidden = true;
    }

    function applyValidatedRsvpPersonalization(personalization) {
      rsvpValidatedPersonalization = personalization;
      guestCount.dataset.pases = String(personalization.passes || 1);
      guestName.value = personalization.recipient;
      rsvpPersonalization.hidden = false;
      rsvpPersonalizationRecipient.textContent = personalization.recipient;
      rsvpPersonalizationText.textContent = formatReservedPassesText(personalization);
      rsvpPersonalizationPasses.textContent = personalization.passes === 1 ? "1 pase" : `${personalization.passes} pases`;
      populateGuestOptions();
      showRsvpForm();
    }

    async function validateRsvpAccess() {
      const run = ++rsvpValidationRun;
      if (INVITATION_CONFIG.rsvp.personalizedPassesEnabled !== true) {
        clearRsvpBlocked();
        return;
      }
      const personalization = getRsvpPersonalization();
      const invalidMessage = INVITATION_CONFIG.rsvp.firebase?.invalidInviteMessage || "Solicita una invitación válida para poder confirmar.";
      if (!personalization.active) {
        setRsvpBlocked(invalidMessage);
        return;
      }
      if (!requiresRsvpInviteValidation() || document.documentElement.classList.contains("preview-embed")) {
        clearRsvpBlocked();
        return;
      }
      if (!personalization.code) {
        setRsvpBlocked(invalidMessage, "Este enlace no contiene un código de invitación válido.");
        return;
      }
      const db = getRsvpFirestore();
      if (!db) {
        setRsvpBlocked("No fue posible validar esta invitación.", "Intenta nuevamente más tarde o solicita apoyo al anfitrión.");
        return;
      }
      setRsvpBlocked("Validando invitación...", "Estamos revisando que este enlace corresponda al evento.");
      try {
        const cfg = INVITATION_CONFIG.rsvp.firebase;
        const snapshot = await db.collection(cfg.collectionRoot)
          .doc(cfg.eventId)
          .collection("invitados")
          .doc(personalization.code)
          .get();
        if (run !== rsvpValidationRun) return;
        if (!snapshot.exists) {
          setRsvpBlocked(invalidMessage);
          return;
        }
        const data = snapshot.data() || {};
        if (data.active === false) {
          setRsvpBlocked("Esta invitación ya no está activa.", "Solicita apoyo al anfitrión para confirmar tu asistencia.");
          return;
        }
        const recipient = String(data.recipient || data.para || data.name || "").trim().slice(0, 120);
        const passes = Math.max(1, Math.min(100, Number.parseInt(data.passes || data.pases || "", 10) || 0));
        if (!recipient || !passes) {
          setRsvpBlocked(invalidMessage);
          return;
        }
        const currentStatus = String(data.status || "sent");
        const openUpdate = {
          lastOpenedAt: window.firebase.firestore.FieldValue.serverTimestamp()
        };
        if (!["confirmed", "declined"].includes(currentStatus)) {
          openUpdate.status = "opened";
          openUpdate.openedAt = window.firebase.firestore.FieldValue.serverTimestamp();
        }
        db.collection(cfg.collectionRoot)
          .doc(cfg.eventId)
          .collection("invitados")
          .doc(personalization.code)
          .set(openUpdate, { merge: true })
          .catch((error) => console.warn("No se pudo marcar apertura RSVP.", error));
        clearRsvpBlocked();
        applyValidatedRsvpPersonalization({
          active: true,
          recipient,
          passes,
          code: personalization.code,
          source: "firebase"
        });
      } catch (error) {
        console.warn("No se pudo validar la invitación RSVP.", error);
        if (run === rsvpValidationRun) {
          setRsvpBlocked("No fue posible validar esta invitación.", "Intenta nuevamente más tarde o solicita apoyo al anfitrión.");
        }
      }
    }

    function formatReservedPassesText(personalization) {
      const reserved = personalization.passes === 1 ? "1 pase" : `${personalization.passes} pases`;
      return (INVITATION_CONFIG.rsvp.reservedPassesText || DEFAULT_RESERVED_PASSES_TEXT)
        .replaceAll("{destinatario}", personalization.recipient)
        .replaceAll("{reservados}", reserved);
    }

    function escapeAttribute(value) {
      return String(value || "").replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));
    }

    function setCountdownCaption(fallbackText) {
      if (!countdownCaption) return;
      countdownCaption.textContent = INVITATION_CONFIG.countdown?.caption || fallbackText;
    }

    function updateCountdown() {
      if (Number.isNaN(EVENT_DATE.getTime())) {
        countdownEl.innerHTML = [
          ["--", "Días"],
          ["--", "Horas"],
          ["--", "Min"],
          ["--", "Seg"]
        ].map(([value, label]) => `
          <div class="count-box">
            <strong>${value}</strong>
            <span>${label}</span>
          </div>
        `).join("");
        setCountdownCaption("Fecha por definir.");
        previousParts = [];
        return;
      }

      const now = new Date();
      const diff = EVENT_DATE - now;
      const militaryMode = INVITATION_CONFIG.theme.styleMode === "military";
      const spaceMode = ["space-ranger", "military"].includes(INVITATION_CONFIG.theme.styleMode);

      if (diff <= 0) {
        const ended = [
          ["00", "Días"],
          ["00", "Horas"],
          ["00", "Min"],
          ["00", "Seg"]
        ];
        countdownEl.innerHTML = ended.map(([value, label]) => `
          <div class="count-box tick">
            <strong>${value}</strong>
            <span>${label}</span>
          </div>
        `).join("");
        setCountdownCaption(militaryMode
          ? "Objetivo cumplido. El escuadrón ya está reunido."
          : "Gracias por formar parte de este momento.");
        previousParts = ended.map(([value]) => value);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const parts = spaceMode
        ? [
          [String(days), "Días", "D-"],
          [String(hours).padStart(2, "0"), "Horas", "H-"],
          [String(minutes).padStart(2, "0"), "Min", "M-"],
          [String(seconds).padStart(2, "0"), "Seg", "S-"]
        ]
        : [
          [String(days), "Días", ""],
          [String(hours).padStart(2, "0"), "Horas", ""],
          [String(minutes).padStart(2, "0"), "Min", ""],
          [String(seconds).padStart(2, "0"), "Seg", ""]
        ];

      countdownEl.innerHTML = parts.map(([value, label, code]) => `
        <div class="count-box">
          ${code ? `<em>${code}</em>` : ""}
          <strong>${value}</strong>
          <span>${label}</span>
        </div>
      `).join("");

      Array.from(countdownEl.querySelectorAll(".count-box")).forEach((box, index) => {
        if (!previousParts.length || previousParts[index] !== parts[index][0]) {
          box.classList.add("tick");
        }
      });

      previousParts = parts.map(([value]) => value);

      if (militaryMode && days > 30) {
        setCountdownCaption("Operación programada. La unidad inicia preparativos.");
      } else if (militaryMode && days > 7) {
        setCountdownCaption("La fecha señalada se aproxima. Todo marcha según el plan.");
      } else if (militaryMode && days > 0) {
        setCountdownCaption("Formación final. El escuadrón está por reunirse.");
      } else if (militaryMode) {
        setCountdownCaption("Día de celebración. Presentarse en el punto de encuentro.");
      } else if (spaceMode && days > 30) {
        setCountdownCaption("La nave ya está en preparación para el gran despegue.");
      } else if (spaceMode && days > 7) {
        setCountdownCaption("La misión está cada vez más cerca.");
      } else if (spaceMode && days > 0) {
        setCountdownCaption("Entramos en la recta final de lanzamiento.");
      } else if (spaceMode) {
        setCountdownCaption("Todo está listo para despegar.");
      } else if (days > 30) {
        setCountdownCaption("Cada día suma emoción para esta noche especial.");
      } else if (days > 7) {
        setCountdownCaption("La emoción empieza a sentirse cada vez más cerca.");
      } else if (days > 0) {
        setCountdownCaption("Entramos en la recta final para celebrar en grande.");
      } else {
        setCountdownCaption("Todo está listo para una noche inolvidable.");
      }
    }

    function revealOnScroll() {
      const trigger = window.innerHeight * 0.88;
      document.querySelectorAll(".section").forEach((section) => {
        if (section.getBoundingClientRect().top < trigger) {
          section.classList.add("show");
        }
      });

      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item, index) => {
        if (item.getBoundingClientRect().top < trigger - 30) {
          setTimeout(() => item.classList.add("show"), index * 120);
        }
      });

      if (!storyStarted && storySection && storySection.getBoundingClientRect().top < trigger - 20) {
        storyStarted = true;
        typeStoryParagraphs();
      }
    }

    function typeText(element, text, speed = 20) {
      return new Promise((resolve) => {
        let index = 0;
        element.textContent = "";
        element.classList.add("is-typing");

        function step() {
          if (index < text.length) {
            element.textContent += text.charAt(index);
            index += 1;
            setTimeout(step, speed);
          } else {
            element.classList.remove("is-typing");
            resolve();
          }
        }

        step();
      });
    }

    async function typeStoryParagraphs() {
      for (const paragraph of storyParagraphs) {
        const fullText = paragraph.dataset.fulltext || "";
        await typeText(paragraph, fullText, 18);
        await new Promise((resolve) => setTimeout(resolve, 220));
      }
    }

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove("show");
      }, 2200);
    }

    function updateFloatingButtons() {
      const shouldShow = window.scrollY > 420;
      const agendaVisible = agendaSection && getComputedStyle(agendaSection).display !== "none";
      const agendaTop = agendaVisible ? agendaSection.getBoundingClientRect().top : Number.POSITIVE_INFINITY;
      const isAtAgenda = agendaTop < window.innerHeight * 0.78;
      const musicEnabled = INVITATION_CONFIG.audio?.showControl !== false;

      toTopBtn.classList.toggle("show", shouldShow && !isAtAgenda);
      if (!musicEnabled || !overlay.classList.contains("hidden")) {
        musicBtn.classList.remove("show");
      } else {
        musicBtn.classList.toggle("show", !isAtAgenda);
      }
    }

    function renderThumbs() {
      if (!galleryItems.length) {
        thumbs.innerHTML = "";
        return;
      }
      thumbs.innerHTML = "";
      galleryItems.forEach((item, index) => {
        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "thumb-item";
        thumb.classList.toggle("active", index === currentIndex);
        thumb.setAttribute("aria-label", `Ver ${item.alt}`);
        const media = createGalleryMedia(item, { autoplay: false });
        media.removeAttribute("class");
        thumb.appendChild(media);
        if (item.type === "video") {
          const badge = document.createElement("span");
          badge.className = "thumb-video-badge";
          badge.setAttribute("aria-hidden", "true");
          thumb.appendChild(badge);
        }
        thumb.addEventListener("click", () => {
          currentIndex = index;
          updateLightbox();
        });
        thumbs.appendChild(thumb);
      });
    }

    function clampZoomOffsets() {
      const maxOffsetX = ((zoomScale - 1) * lightboxMain.clientWidth) / 2;
      const maxOffsetY = ((zoomScale - 1) * lightboxMain.clientHeight) / 2;
      zoomX = Math.max(-maxOffsetX, Math.min(maxOffsetX, zoomX));
      zoomY = Math.max(-maxOffsetY, Math.min(maxOffsetY, zoomY));
    }

    function applyImageZoom() {
      if (lightboxMain.classList.contains("is-video")) return;
      clampZoomOffsets();
      lightboxImg.style.transform = `translate3d(${zoomX}px, ${zoomY}px, 0) scale(${zoomScale})`;
      lightboxMain.classList.toggle("is-zoomed", zoomScale > 1.01);
    }

    function resetImageZoom(animate = false) {
      zoomScale = 1;
      zoomX = 0;
      zoomY = 0;
      if (animate) {
        lightboxImg.style.transition = "opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease";
      }
      applyImageZoom();
      if (animate) {
        setTimeout(() => {
          lightboxImg.style.transition = "opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease";
        }, 260);
      }
    }

    function getTouchDistance(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    }

    function updateGalleryPreview(index) {
      if (!galleryItems.length) return;
      previewIndex = (index + galleryItems.length) % galleryItems.length;
      const activeItem = galleryItems[previewIndex];
      const isVideo = activeItem.type === "video";

      galleryPreviewImg.style.opacity = "0";
      galleryPreviewImg.style.transform = "scale(0.97)";
      if (galleryPreviewVideo) {
        galleryPreviewVideo.style.opacity = "0";
        galleryPreviewVideo.style.transform = "scale(0.97)";
        galleryPreviewVideo.pause();
      }

      if (isVideo && galleryPreviewVideo) {
        galleryPreviewImg.hidden = true;
        galleryPreviewVideo.hidden = false;
        configureInlineVideo(galleryPreviewVideo, activeItem.src, {
          controls: true,
          muted: false,
          loop: false,
          preload: "metadata",
          autoplay: overlay.classList.contains("hidden")
        });
      } else {
        if (galleryPreviewVideo) {
          galleryPreviewVideo.hidden = true;
          galleryPreviewVideo.removeAttribute("src");
          galleryPreviewVideo.load();
        }
        galleryPreviewImg.hidden = false;
        galleryPreviewImg.src = activeItem.src;
        galleryPreviewImg.alt = activeItem.alt || `Galería ${previewIndex + 1}`;
      }
      galleryMetaIndex.textContent = `${mediaLabel(activeItem.type)} ${previewIndex + 1} de ${galleryItems.length}`;
      galleryMetaHint.textContent = "Usa las flechas o toca una miniatura para explorar.";

      galleryItems.forEach((item, imageIndex) => {
        item.element?.classList.toggle("is-active", imageIndex === previewIndex);
      });

      requestAnimationFrame(() => {
        const activeNode = isVideo ? galleryPreviewVideo : galleryPreviewImg;
        if (!activeNode) return;
        activeNode.style.opacity = "1";
        activeNode.style.transform = "scale(1)";
      });
    }

    function updateLightbox() {
      if (!galleryItems.length) return;
      const activeItem = galleryItems[currentIndex];
      const isVideo = activeItem.type === "video";
      resetImageZoom();
      lightboxMain.classList.toggle("is-video", isVideo);
      lightboxImg.style.opacity = "0";
      lightboxImg.style.transform = "translate3d(0, 0, 0) scale(0.97)";
      if (lightboxVideo) {
        lightboxVideo.style.opacity = "0";
        lightboxVideo.pause();
      }

      if (isVideo && lightboxVideo) {
        lightboxImg.hidden = true;
        lightboxVideo.hidden = false;
        configureInlineVideo(lightboxVideo, activeItem.src, { controls: true, muted: false, loop: false, preload: "metadata", autoplay: true });
      } else {
        if (lightboxVideo) {
          lightboxVideo.hidden = true;
          lightboxVideo.removeAttribute("src");
          lightboxVideo.load();
        }
        lightboxImg.hidden = false;
        lightboxImg.src = activeItem.src;
        lightboxImg.alt = activeItem.alt || "Imagen ampliada";
      }
      viewerCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
      Array.from(thumbs.querySelectorAll(".thumb-item")).forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentIndex);
      });
      requestAnimationFrame(() => {
        if (isVideo && lightboxVideo) {
          lightboxVideo.style.opacity = "1";
        } else {
          lightboxImg.style.opacity = "1";
          applyImageZoom();
        }
      });
    }

    function openLightbox(index) {
      if (!galleryItems.length) return;
      currentIndex = index;
      renderThumbs();
      lightbox.classList.add("show");
      lightbox.setAttribute("aria-hidden", "false");
      setScrollLocked(true);
      updateLightbox();
      closeLightbox.focus();
    }

    function closeGallery() {
      resetImageZoom();
      if (lightboxVideo) lightboxVideo.pause();
      lightbox.classList.remove("show");
      lightbox.setAttribute("aria-hidden", "true");
      if (overlay.classList.contains("hidden")) {
        setScrollLocked(false);
      }
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateLightbox();
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightbox();
    }

    function nextPreview() {
      updateGalleryPreview(previewIndex + 1);
    }

    function prevPreview() {
      updateGalleryPreview(previewIndex - 1);
    }

    function normalizeWhatsAppPhone(phone, countryCode = "52") {
      let digits = String(phone || "").replace(/\D/g, "");
      const cleanCountryCode = String(countryCode || "").replace(/\D/g, "");
      if (digits.startsWith("00")) digits = digits.slice(2);
      if (digits.length === 10 && cleanCountryCode) digits = `${cleanCountryCode}${digits}`;
      return digits;
    }

    function rsvpReceiptStorageKey() {
      const personalization = getRsvpPersonalization();
      const identity = [
        window.location.pathname,
        INVITATION_CONFIG.meta?.pageTitle || "",
        personalization.recipient,
        personalization.passes
      ].join("|");
      let hash = 2166136261;
      for (let index = 0; index < identity.length; index += 1) {
        hash ^= identity.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
      }
      return `${RSVP_RECEIPT_KEY_PREFIX}:${(hash >>> 0).toString(36)}`;
    }

    function resolveAttendanceCount(count, familyMode) {
      const numericCount = Number.parseInt(count, 10);
      if (Number.isFinite(numericCount)) return Math.max(1, numericCount);
      if (familyMode) return 1;
      if (count === "Asistiré solo") return 1;
      const companions = Number.parseInt(String(count || "").match(/\d+/)?.[0] || "0", 10);
      return Math.max(1, companions + 1);
    }

    function createConfirmationFolio() {
      const alphabet = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
      const randomBytes = new Uint8Array(10);
      crypto.getRandomValues(randomBytes);
      const token = Array.from(randomBytes, (byte) => alphabet[byte & 31]).join("");
      return `DI-${token.slice(0, 5)}-${token.slice(5)}`;
    }

    function buildConfirmationQrPayload(receipt) {
      const attendees = Array.isArray(receipt.memberNames) ? receipt.memberNames.filter(Boolean) : [];
      return [
        "Confirmación de asistencia",
        "",
        receipt.name,
        receipt.count === 1 ? "1 persona confirmada" : `${receipt.count} personas confirmadas`,
        ...(attendees.length ? ["", ...attendees] : []),
        ...(receipt.event ? ["", receipt.event] : []),
        "",
        receipt.folio
      ].join("\n");
    }

    function getRsvpFirestore() {
      const cfg = INVITATION_CONFIG.rsvp?.firebase || {};
      const hasConfig = cfg.enabled === true
        && cfg.apiKey
        && cfg.authDomain
        && cfg.projectId
        && cfg.appId
        && typeof window.firebase !== "undefined"
        && typeof window.firebase.firestore === "function";
      if (!hasConfig) return null;
      if (rsvpFirestore) return rsvpFirestore;
      const appName = `digital-invita-rsvp-${cfg.projectId}`;
      try {
        rsvpFirebaseApp = window.firebase.apps.find((app) => app.name === appName)
          || window.firebase.initializeApp({
            apiKey: cfg.apiKey,
            authDomain: cfg.authDomain,
            projectId: cfg.projectId,
            appId: cfg.appId
          }, appName);
        rsvpFirestore = rsvpFirebaseApp.firestore();
        return rsvpFirestore;
      } catch (error) {
        console.warn("No se pudo inicializar Firebase RSVP.", error);
        return null;
      }
    }

    function buildRsvpFirebaseRecord({ attending, name, count, familyMode, memberNames, eventCopy, message, receipt }) {
      const personalization = getRsvpPersonalization();
      return {
        attending: Boolean(attending),
        name: String(name || "").trim(),
        mode: familyMode ? "family" : "personal",
        count: resolveAttendanceCount(count, familyMode),
        memberNames: Array.isArray(memberNames) ? memberNames.filter(Boolean) : [],
        personalized: personalization.active,
        recipient: personalization.recipient || "",
        reservedPasses: personalization.passes || 0,
        event: eventCopy.celebrationText || eventCopy.eventHeader || "",
        message,
        folio: receipt?.folio || "",
        confirmedAt: receipt?.confirmedAt || new Date().toISOString(),
        userAgent: navigator.userAgent || "",
        page: window.location.href.split("#")[0]
      };
    }

    async function saveRsvpConfirmationToFirebase(payload) {
      const db = getRsvpFirestore();
      if (!db) return false;
      const cfg = INVITATION_CONFIG.rsvp.firebase;
      const record = {
        ...payload,
        createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
      };
      try {
        await db.collection(cfg.collectionRoot)
          .doc(cfg.eventId)
          .collection("confirmaciones")
          .add(record);
        const personalization = getRsvpPersonalization();
        if (personalization.code) {
          await db.collection(cfg.collectionRoot)
            .doc(cfg.eventId)
            .collection("invitados")
            .doc(personalization.code)
            .set({
              status: payload.attending ? "confirmed" : "declined",
              attending: payload.attending,
              confirmedAt: payload.attending ? window.firebase.firestore.FieldValue.serverTimestamp() : null,
              declinedAt: payload.attending ? null : window.firebase.firestore.FieldValue.serverTimestamp(),
              lastResponseAt: window.firebase.firestore.FieldValue.serverTimestamp(),
              responseName: payload.name,
              responseCount: payload.count,
              folio: payload.folio || ""
            }, { merge: true });
        }
        return true;
      } catch (error) {
        console.warn("No se pudo guardar la confirmación RSVP en Firebase.", error);
        return false;
      }
    }

    function saveRsvpReceipt(receipt) {
      if (document.documentElement.classList.contains("preview-embed")) return;
      writeStorageItem(rsvpReceiptStorageKey(), JSON.stringify(receipt));
    }

    function clearRsvpReceipt() {
      if (!document.documentElement.classList.contains("preview-embed")) {
        try {
          localStorage.removeItem(rsvpReceiptStorageKey());
        } catch {}
      }
      activeRsvpReceipt = null;
    }

    function restoreRsvpReceipt() {
      if (INVITATION_CONFIG.rsvp.advancedConfirmationEnabled !== true) {
        activeRsvpReceipt = null;
        showRsvpForm();
        return;
      }
      if (document.documentElement.classList.contains("preview-embed")) {
        if (!activeRsvpReceipt) showRsvpForm();
        return;
      }
      try {
        const raw = readStorageItem(rsvpReceiptStorageKey());
        if (!raw) {
          showRsvpForm();
          return;
        }
        renderRsvpReceipt(JSON.parse(raw));
      } catch {
        clearRsvpReceipt();
        showRsvpForm();
      }
    }

    function showRsvpForm() {
      rsvpReceipt.hidden = true;
      rsvpCard.hidden = false;
      const personalization = getRsvpPersonalization();
      rsvpPersonalization.hidden = !personalization.active;
    }

    function renderRsvpReceipt(receipt) {
      if (!receipt?.folio || !receipt?.name) return;
      activeRsvpReceipt = receipt;
      rsvpCard.hidden = true;
      rsvpPersonalization.hidden = true;
      rsvpReceipt.hidden = false;
      rsvpReceiptTitle.textContent = INVITATION_CONFIG.rsvp.receiptTitle;
      rsvpReceiptText.textContent = INVITATION_CONFIG.rsvp.receiptText;
      rsvpReceiptName.textContent = receipt.name;
      rsvpReceiptCount.textContent = receipt.count === 1 ? "1 persona confirmada" : `${receipt.count} personas confirmadas`;
      rsvpReceiptFolio.textContent = `Folio · ${receipt.folio}`;
      rsvpReceiptAttendees.innerHTML = "";
      const visibleMembers = Array.isArray(receipt.memberNames) ? receipt.memberNames.filter(Boolean) : [];
      rsvpReceiptAttendees.hidden = visibleMembers.length === 0;
      visibleMembers.forEach((memberName) => {
        const item = document.createElement("span");
        item.textContent = memberName;
        rsvpReceiptAttendees.appendChild(item);
      });

      if (typeof window.QRCodeStyling !== "function") {
        rsvpReceiptQr.textContent = "No fue posible generar el código QR.";
        return;
      }
      const qrBackgroundColor = INVITATION_CONFIG.rsvp.qrBackgroundColor;
      const qrSize = Math.max(128, Math.floor(rsvpReceiptQr.getBoundingClientRect().width - 16));
      rsvpReceiptQr.style.setProperty("--rsvp-qr-size", `${qrSize}px`);
      rsvpReceiptQr.style.backgroundColor = qrBackgroundColor;
      const qrOptions = {
        width: qrSize,
        height: qrSize,
        type: "svg",
        data: buildConfirmationQrPayload(receipt),
        margin: Math.max(8, Math.round(qrSize * .055)),
        qrOptions: { errorCorrectionLevel: "Q" },
        dotsOptions: { color: INVITATION_CONFIG.rsvp.qrColor, type: INVITATION_CONFIG.rsvp.qrDotStyle },
        cornersSquareOptions: { color: INVITATION_CONFIG.rsvp.qrColor, type: "extra-rounded" },
        cornersDotOptions: { color: INVITATION_CONFIG.rsvp.qrAccentColor, type: "dot" },
        backgroundOptions: { color: qrBackgroundColor }
      };
      if (!confirmationQrCode) {
        confirmationQrCode = new window.QRCodeStyling(qrOptions);
        rsvpReceiptQr.innerHTML = "";
        confirmationQrCode.append(rsvpReceiptQr);
      } else {
        confirmationQrCode.update(qrOptions);
      }
      requestAnimationFrame(() => centerRenderedQr(rsvpReceiptQr, qrSize));
    }

    function centerRenderedQr(container, size) {
      const mount = container?.firstElementChild;
      if (!mount) return;
      Object.assign(mount.style, {
        position: "static",
        display: "grid",
        placeItems: "center",
        width: `${size}px`,
        height: `${size}px`,
        minWidth: "0",
        minHeight: "0",
        margin: "0",
        padding: "0",
        overflow: "visible",
        transform: "none"
      });
      const graphic = mount.querySelector("svg, canvas");
      if (!graphic) return;
      Object.assign(graphic.style, {
        position: "static",
        display: "block",
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: "none",
        maxHeight: "none",
        margin: "0",
        transform: "none"
      });
    }

    function createRsvpReceipt({ name, count, familyMode, memberNames, eventCopy, message }) {
      const confirmedAt = new Date().toISOString();
      const receipt = {
        name,
        count: resolveAttendanceCount(count, familyMode),
        familyMode,
        memberNames: memberNames.filter(Boolean),
        event: eventCopy.celebrationText || eventCopy.eventHeader,
        confirmedAt,
        folio: createConfirmationFolio(),
        message
      };
      saveRsvpReceipt(receipt);
      renderRsvpReceipt(receipt);
      return receipt;
    }

    function sendReceiptByWhatsApp() {
      if (!activeRsvpReceipt) return;
      const phone = normalizeWhatsAppPhone(RSVP_PHONE, RSVP_COUNTRY_CODE);
      if (!phone) {
        showToast("Revisa el número de WhatsApp en el panel.");
        return;
      }
      activeRsvpReceipt.sentAt = new Date().toISOString();
      saveRsvpReceipt(activeRsvpReceipt);
      const message = `${activeRsvpReceipt.message}\n\nFolio de confirmación: ${activeRsvpReceipt.folio}`;
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    }

    function downloadConfirmationQr() {
      if (!confirmationQrCode || !activeRsvpReceipt) return;
      confirmationQrCode.download({
        name: `confirmacion-${slugifyText(activeRsvpReceipt.name)}-${activeRsvpReceipt.folio.toLowerCase()}`,
        extension: "png"
      });
    }

    function sendConfirmation(attending) {
      const personalization = getRsvpPersonalization();
      if (INVITATION_CONFIG.rsvp.personalizedPassesEnabled === true && !personalization.active) {
        setRsvpBlocked(INVITATION_CONFIG.rsvp.firebase?.invalidInviteMessage);
        return;
      }
      if (requiresRsvpInviteValidation() && personalization.source !== "firebase") {
        setRsvpBlocked("Esta invitación necesita validación.", "Abre el enlace personalizado que recibiste para poder confirmar.");
        return;
      }
      const name = personalization.active ? personalization.recipient : guestName.value.trim();
      const count = guestCount.value;
      const familyMode = isFamilyRsvp(personalization);
      const memberNames = familyMode ? getFamilyMemberNames() : [];
      const eventCopy = getEventCopy();

      if (!name) {
        showToast(familyMode ? "Escribe el apellido o nombre de la familia." : "Por favor escribe tu nombre.");
        if (!personalization.active) guestName.focus();
        return;
      }

      if (attending) {
        if ((familyMode || INVITATION_CONFIG.rsvp.showGuestCount !== false) && !count) {
          showToast("Selecciona cuántas personas asistirán.");
          guestCount.focus();
          return;
        }
        if (familyMode) {
          const missingMemberIndex = memberNames.findIndex((memberName) => !memberName);
          if (missingMemberIndex !== -1) {
            showToast(`Escribe el nombre del integrante ${missingMemberIndex + 1}.`);
            familyMembersList.querySelectorAll("input")[missingMemberIndex]?.focus();
            return;
          }
        }
      }

      const message = buildRsvpMessage(attending, {
        name,
        count,
        familyMode,
        memberNames,
        eventCopy
      });

      if (attending && INVITATION_CONFIG.rsvp.advancedConfirmationEnabled === true) {
        try {
          const receipt = createRsvpReceipt({ name, count, familyMode, memberNames, eventCopy, message });
          saveRsvpConfirmationToFirebase(buildRsvpFirebaseRecord({
            attending,
            name,
            count,
            familyMode,
            memberNames,
            eventCopy,
            message,
            receipt
          }));
          sendReceiptByWhatsApp();
          downloadConfirmationQr();
        } catch (error) {
          console.error("No se pudo generar el comprobante RSVP.", error);
          showToast("No fue posible generar el QR. Intenta nuevamente.");
        }
        return;
      }

      const button = attending ? confirmYes : confirmNo;
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = attending ? "Preparando mensaje..." : "Avisando...";
      showToast(attending ? "Estamos preparando tu confirmación." : "Estamos preparando tu mensaje.");

      setTimeout(() => {
        const phone = normalizeWhatsAppPhone(RSVP_PHONE, RSVP_COUNTRY_CODE);
        if (!phone) {
          showToast("Revisa el número de WhatsApp en el panel.");
          button.disabled = false;
          button.textContent = originalText;
          return;
        }
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
        saveRsvpConfirmationToFirebase(buildRsvpFirebaseRecord({
          attending,
          name,
          count,
          familyMode,
          memberNames,
          eventCopy,
          message
        }));
        button.disabled = false;
        button.textContent = originalText;
      }, 520);
    }

    function buildRsvpMessage(attending, { name, count, familyMode, memberNames, eventCopy }) {
      const template = familyMode
        ? attending
          ? (INVITATION_CONFIG.rsvp.familyConfirmMessage || DEFAULT_FAMILY_CONFIRM_MESSAGE)
          : (INVITATION_CONFIG.rsvp.familyDeclineMessage || DEFAULT_FAMILY_DECLINE_MESSAGE)
        : attending
          ? (INVITATION_CONFIG.rsvp.confirmMessage || DEFAULT_CONFIRM_MESSAGE)
          : (INVITATION_CONFIG.rsvp.declineMessage || DEFAULT_DECLINE_MESSAGE);
      const personalization = getRsvpPersonalization();
      const passes = personalization.active
        ? (Number(count) === 1 ? "1 pase reservado" : `${count} pases reservados`)
        : familyMode || INVITATION_CONFIG.rsvp.showGuestCount !== false ? count : "";
      const familyCount = Number(count) === 1 ? "1 persona" : `${count} personas`;
      const members = memberNames.map((memberName, index) => `${index + 1}. ${memberName}`).join("\n");
      const familyName = String(name || "").replace(/^familia\s+/i, "").trim() || name;
      return template
        .replaceAll("{nombre}", name)
        .replaceAll("{familia}", familyName)
        .replaceAll("{cantidad}", familyCount)
        .replaceAll("{integrantes}", members)
        .replaceAll("{evento}", eventCopy.eventHeader)
        .replaceAll("{festejada}", INVITATION_CONFIG.event.celebrantName || "")
        .replaceAll("{celebracion}", eventCopy.celebrationText)
        .replaceAll("{pases}", passes)
        .split("\n")
        .filter((line) => line.trim() || (!line.includes("{pases}") && !line.includes("{integrantes}")))
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }

    function fadeInAudio() {
      if (INVITATION_CONFIG.audio?.showControl === false) return;
      audio.volume = 0;
      audio.play().then(() => {
        let volume = 0;
        const interval = setInterval(() => {
          volume = Math.min(1, volume + 0.08);
          audio.volume = volume;
          if (volume >= 1) clearInterval(interval);
        }, 120);
      }).catch(() => {});
    }

    function applyMusicControlState() {
      if (!musicBtn) return;
      const enabled = INVITATION_CONFIG.audio?.showControl !== false;
      musicBtn.hidden = !enabled;
      musicBtn.classList.toggle("is-disabled", !enabled);
      if (!enabled) {
        audio.pause();
        musicBtn.classList.remove("show");
        musicBtn.classList.add("is-paused");
        musicBtn.setAttribute("aria-label", "Música desactivada");
      } else {
        musicBtn.setAttribute("aria-label", audio.paused ? "Reproducir música" : "Pausar música");
      }
    }

    function applyHeroParallax() {
      const hero = document.querySelector(".hero");
      const heroImage = hero.querySelector("img:not([hidden]), video:not([hidden])");
      if (!heroImage) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
      heroImage.style.transform = `scale(1.03) translate3d(0, ${progress * -18}px, 0)`;
    }

    function escapeICSValue(value) {
      return String(value || "")
        .replace(/\\/g, "\\\\")
        .replace(/\r?\n/g, "\\n")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;");
    }

    function foldICSLine(line) {
      const limit = 74;
      if (line.length <= limit) return line;
      let output = "";
      for (let index = 0; index < line.length; index += limit) {
        const chunk = line.slice(index, index + limit);
        output += index === 0 ? chunk : `\r\n ${chunk}`;
      }
      return output;
    }

    function getCalendarTimeZone() {
      return INVITATION_CONFIG.event.timeZone || "America/Mexico_City";
    }

    function getConfiguredDateParts(value) {
      const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
      if (match) {
        return {
          year: match[1],
          month: match[2],
          day: match[3],
          hour: match[4],
          minute: match[5],
          second: "00"
        };
      }

      const date = new Date(value);
      return {
        year: String(date.getFullYear()).padStart(4, "0"),
        month: String(date.getMonth() + 1).padStart(2, "0"),
        day: String(date.getDate()).padStart(2, "0"),
        hour: String(date.getHours()).padStart(2, "0"),
        minute: String(date.getMinutes()).padStart(2, "0"),
        second: "00"
      };
    }

    function formatCalendarLocalDate(value) {
      const parts = getConfiguredDateParts(value);
      return `${parts.year}${parts.month}${parts.day}T${parts.hour}${parts.minute}${parts.second}`;
    }

    function formatUrlLocalDate(value) {
      const parts = getConfiguredDateParts(value);
      return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}`;
    }

    function formatUTCStamp(date) {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    }

    function buildICSFile(title, details, location) {
      const uidBase = `${slugifyText(title || "evento")}-${EVENT_DATE.getTime()}`;
      const timeZone = getCalendarTimeZone();
      const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Digital Invita//Invitacion Digital//ES",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        foldICSLine(`X-WR-CALNAME:${escapeICSValue(title)}`),
        "BEGIN:VEVENT",
        foldICSLine(`UID:${escapeICSValue(uidBase)}@digitalinvita`),
        `DTSTAMP:${formatUTCStamp(new Date())}`,
        `DTSTART;TZID=${timeZone}:${formatCalendarLocalDate(INVITATION_CONFIG.event.eventDate)}`,
        `DTEND;TZID=${timeZone}:${formatCalendarLocalDate(INVITATION_CONFIG.event.eventEnd)}`,
        foldICSLine(`SUMMARY:${escapeICSValue(title)}`),
        foldICSLine(`DESCRIPTION:${escapeICSValue(details)}`),
        foldICSLine(`LOCATION:${escapeICSValue(location)}`),
        "STATUS:CONFIRMED",
        "TRANSP:OPAQUE",
        foldICSLine(`URL:${escapeICSValue(window.location.href)}`),
        "END:VEVENT",
        "END:VCALENDAR"
      ];
      return lines.join("\r\n");
    }

    function downloadICSFile(filename, content) {
      try {
        const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 1200);
        return true;
      } catch (error) {
        console.warn("No se pudo generar el archivo de calendario.", error);
        return false;
      }
    }

    function buildGoogleCalendarUrl(title, details, location) {
      const start = formatCalendarLocalDate(INVITATION_CONFIG.event.eventDate);
      const end = formatCalendarLocalDate(INVITATION_CONFIG.event.eventEnd);
      const timeZone = getCalendarTimeZone();
      return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&ctz=${encodeURIComponent(timeZone)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    }

    function buildOutlookCalendarUrl(title, details, location) {
      const start = formatUrlLocalDate(INVITATION_CONFIG.event.eventDate);
      const end = formatUrlLocalDate(INVITATION_CONFIG.event.eventEnd);
      return `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(title)}&startdt=${encodeURIComponent(start)}&enddt=${encodeURIComponent(end)}&body=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    }

    function openCalendarProvider(url) {
      try {
        const opened = window.open(url, "_blank", "noopener,noreferrer");
        return Boolean(opened);
      } catch (error) {
        console.warn("No se pudo abrir el proveedor de calendario.", error);
        return false;
      }
    }

    function addToCalendar(event) {
      event.preventDefault();

      const eventCopy = getEventCopy();
      const title = eventCopy.calendarTitle;
      const details = eventCopy.calendarDetails;
      const userAgent = navigator.userAgent;
      const isApple = /iPad|iPhone|iPod|Mac/i.test(userAgent);
      const isWindows = /Windows/i.test(userAgent);
      const isAndroid = /Android/i.test(userAgent);
      const icsContent = buildICSFile(title, details, EVENT_LOCATION);
      const filename = `${slugifyText(eventCopy.calendarTitle)}.ics`;
      const downloaded = downloadICSFile(filename, icsContent);

      if (isApple) {
        showToast(downloaded ? "Calendario listo para Apple Calendar." : "Calendario listo. Si no se descargó, intenta de nuevo.");
        return;
      }

      const providerUrl = isWindows
        ? buildOutlookCalendarUrl(title, details, EVENT_LOCATION)
        : buildGoogleCalendarUrl(title, details, EVENT_LOCATION);
      const opened = openCalendarProvider(providerUrl);

      if (opened) {
        showToast(isWindows
          ? "Se abrió Outlook y también se descargó respaldo .ics."
          : "Se abrió Google Calendar y también se descargó respaldo .ics.");
        return;
      }

      showToast(isAndroid
        ? "Se descargó un archivo .ics compatible con Samsung Calendar."
        : "Se descargó un archivo .ics compatible con tu calendario.");
    }

    function initParticles() {
      const canvas = document.getElementById("particles");
      if (!canvas) return null;
      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return null;
      const heroCanvas = document.getElementById("heroParticles");
      const heroCtx = heroCanvas?.getContext("2d", { alpha: true }) || null;

      let width = 0;
      let height = 0;
      let particles = [];
      let animationId = 0;
      let lastFrameTime = 0;
      const lowPower = IS_LOW_POWER_DEVICE
        || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
        || (navigator.deviceMemory && navigator.deviceMemory <= 4);

      function particlesEnabled() {
        return INVITATION_CONFIG.theme.particlesEnabled !== false;
      }

      function particleSetting(name, min, max, fallback = 100) {
        return clampNumber(INVITATION_CONFIG.theme[name], min, max, fallback) / 100;
      }

      function createParticle(index) {
        const depth = Math.random();
        const angle = Math.random() * Math.PI * 2;
        const baseSpeed = lowPower
          ? 0.035 + depth * 0.065
          : 0.045 + depth * 0.115;
        const hasTrail = index % (lowPower ? 8 : 5) === 0;
        const isLarge = index % (lowPower ? 11 : 6) === 2;
        const speed = hasTrail
          ? (lowPower ? 0.08 + depth * 0.1 : 0.14 + depth * 0.24)
          : baseSpeed;
        const radiusBase = isLarge
          ? 1.9 + Math.random() * 1.45
          : 0.46 + Math.pow(depth, 1.35) * 1.45;
        const radius = radiusBase * particleSetting("particleSize", 50, 180);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: radius,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed * (hasTrail ? 0.72 : 1),
          orbitX: (isLarge ? 1.5 : 3) + Math.random() * (isLarge ? 5 : 11),
          orbitY: (isLarge ? 1.5 : 2) + Math.random() * (isLarge ? 4 : 8),
          orbitSpeedX: 0.00045 + Math.random() * 0.0007,
          orbitSpeedY: 0.00035 + Math.random() * 0.00055,
          phase: Math.random() * Math.PI * 2,
          alpha: isLarge ? Math.random() * 0.08 + 0.08 : Math.random() * 0.2 + 0.14,
          trail: hasTrail,
          trailLimit: hasTrail ? Math.round(30 + Math.random() * 16) : 0,
          history: hasTrail ? [] : null,
          depth,
          drawX: 0,
          drawY: 0
        };
      }

      function wrapParticle(particle) {
        const margin = 34;
        let wrapped = false;
        if (particle.x < -margin) {
          particle.x = width + margin;
          wrapped = true;
        }
        if (particle.x > width + margin) {
          particle.x = -margin;
          wrapped = true;
        }
        if (particle.y < -margin) {
          particle.y = height + margin;
          wrapped = true;
        }
        if (particle.y > height + margin) {
          particle.y = -margin;
          wrapped = true;
        }
        if (wrapped && particle.history) particle.history.length = 0;
      }

      function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, USE_MOBILE_BEHAVIOR ? 1.15 : 1.6);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (heroCanvas && heroCtx) {
          heroCanvas.width = canvas.width;
          heroCanvas.height = canvas.height;
          heroCanvas.style.width = `${width}px`;
          heroCanvas.style.height = `${height}px`;
          heroCtx.setTransform(1, 0, 0, 1, 0, 0);
        }

        const baseTotal = USE_MOBILE_BEHAVIOR
          ? (width < 768 ? 16 : 24)
          : (lowPower
            ? (width < 768 ? 16 : 26)
            : (width < 768 ? 36 : 68));
        const total = Math.max(6, Math.round(baseTotal * particleSetting("particleDensity", 25, 180)));
        particles = Array.from({ length: total }, (_, index) => createParticle(index));
      }

      function stopParticles() {
        cancelAnimationFrame(animationId);
        animationId = 0;
        ctx.clearRect(0, 0, width, height);
        if (heroCanvas && heroCtx) heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
      }

      function syncParticleState() {
        const enabled = particlesEnabled();
        canvas.hidden = !enabled;
        if (heroCanvas) heroCanvas.hidden = !enabled;
        if (!enabled) {
          stopParticles();
          return;
        }
        if (!width || !height || !particles.length) resize();
        if (!animationId && !document.hidden) {
          lastFrameTime = 0;
          animationId = requestAnimationFrame(animate);
        }
      }

      function updateTrail(particle, x, y) {
        if (!particle.history) return;
        particle.history.push({ x, y });
        while (particle.history.length > particle.trailLimit) particle.history.shift();
      }

      function drawTrail(particle, particleRgb, alpha, radius) {
        if (!particle.history || particle.history.length < 2) return;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let index = 1; index < particle.history.length; index += 1) {
          const from = particle.history[index - 1];
          const to = particle.history[index];
          const progress = index / (particle.history.length - 1);
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.lineWidth = Math.max(0.4, radius * 0.68 * progress);
          ctx.strokeStyle = `rgba(${particleRgb}, ${alpha * 0.42 * progress})`;
          ctx.stroke();
        }
      }

      function drawParticle(particle, particleRgb, time) {
        const breath = Math.sin(time * 0.0012 + particle.phase) * 0.035;
        const brightness = particleSetting("particleBrightness", 40, 180);
        const alpha = Math.min(0.92, Math.max(0.05, (particle.alpha + breath) * brightness));
        const radius = particle.r;
        const drawX = particle.x + Math.sin(time * particle.orbitSpeedX + particle.phase) * particle.orbitX;
        const drawY = particle.y + Math.cos(time * particle.orbitSpeedY + particle.phase) * particle.orbitY;
        updateTrail(particle, drawX, drawY);
        drawTrail(particle, particleRgb, alpha, radius);

        ctx.beginPath();
        ctx.arc(drawX, drawY, radius * 2.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleRgb}, ${alpha * 0.08})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(drawX, drawY, radius * 1.25, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleRgb}, ${alpha * 0.22})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleRgb}, ${alpha * 0.76})`;
        ctx.fill();

        particle.drawX = drawX;
        particle.drawY = drawY;
      }

      function animate(time = 0) {
        if (!particlesEnabled()) {
          stopParticles();
          return;
        }
        const delta = lastFrameTime ? Math.min(2.2, (time - lastFrameTime) / 16.67) : 1;
        lastFrameTime = time;
        ctx.clearRect(0, 0, width, height);
        const particleRgb = getComputedStyle(document.documentElement).getPropertyValue("--particle-rgb").trim() || "255, 244, 207";
        particles.forEach((particle) => {
          particle.x += particle.vx * delta;
          particle.y += particle.vy * delta;
          wrapParticle(particle);

          drawParticle(particle, particleRgb, time);
        });
        if (heroCanvas && heroCtx) {
          heroCtx.setTransform(1, 0, 0, 1, 0, 0);
          heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
          heroCtx.drawImage(canvas, 0, 0);
        }
        animationId = requestAnimationFrame(animate);
      }

      resize();
      syncParticleState();
      window.addEventListener("resize", resize, { passive: true });
      window.addEventListener("digitalInvita:visualSettingsChanged", () => {
        if (particlesEnabled()) resize();
        syncParticleState();
      });
      const handleParticleVisibility = () => {
        if (document.hidden) {
          stopParticles();
        } else if (!animationId) {
          syncParticleState();
        }
      };
      document.addEventListener("visibilitychange", handleParticleVisibility);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
        window.removeEventListener("digitalInvita:visualSettingsChanged", syncParticleState);
        document.removeEventListener("visibilitychange", handleParticleVisibility);
      };
    }

    function initLightProtection() {
      document.addEventListener("contextmenu", (event) => {
        const protectedTarget = event.target.closest("img, video, .gallery-stage, .gallery, .lightbox, .hero");
        if (!protectedTarget) return;
        event.preventDefault();
        showToast("Esta vista está protegida.");
      });

      document.addEventListener("dragstart", (event) => {
        if (event.target.closest("img, video")) {
          event.preventDefault();
        }
      });

      document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        const isBlockedShortcut =
          key === "f12"
          || (event.ctrlKey && event.shiftKey && (key === "i" || key === "j" || key === "c"))
          || (event.ctrlKey && key === "u")
          || (event.metaKey && event.altKey && key === "i")
          || (event.metaKey && event.altKey && key === "j")
          || (event.metaKey && key === "u");

        if (!isBlockedShortcut) return;

        event.preventDefault();
        showToast("Acción desactivada en esta invitación.");
      });
    }

    function finishOpeningInvitation() {
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      setScrollLocked(false);
      heroLabel.classList.add("animate");
      heroName.classList.add("animate");
      fechaEvento.classList.add("animate");
      window.setTimeout(() => {
        overlay.classList.remove("opening", "elegant-opening");
        openBtn.disabled = false;
      }, 900);
    }

    function triggerWarpFlash() {
      if (!warpFlash) return;
      warpFlash.classList.remove("active");
      void warpFlash.offsetWidth;
      warpFlash.classList.add("active");
      window.setTimeout(() => {
        warpFlash.classList.remove("active");
      }, 1050);
    }

    function triggerElegantOpening() {
      if (!warpFlash) return;
      warpFlash.classList.remove("active");
      warpFlash.classList.add("elegant");
      void warpFlash.offsetWidth;
      warpFlash.classList.add("active");
      window.setTimeout(() => {
        warpFlash.classList.remove("active", "elegant");
      }, 1280);
    }

    function triggerMissionAccepted() {
      if (!missionAccepted) return;
      missionAccepted.classList.remove("active");
      void missionAccepted.offsetWidth;
      missionAccepted.classList.add("active");
      window.setTimeout(() => {
        missionAccepted.classList.remove("active");
      }, 1900);
    }

    openBtn.addEventListener("click", () => {
      if (overlay.classList.contains("hidden")) return;
      if (INVITATION_CONFIG.audio?.showControl !== false) musicBtn.classList.add("show");
      fadeInAudio();
      if (INVITATION_CONFIG.audio?.showControl !== false) musicBtn.classList.remove("is-paused");
      if (["space-ranger", "military"].includes(INVITATION_CONFIG.theme.styleMode)) {
        const militaryOpening = INVITATION_CONFIG.theme.styleMode === "military";
        openBtn.disabled = true;
        overlay.classList.add("opening");
        window.setTimeout(triggerWarpFlash, militaryOpening ? 180 : 260);
        window.setTimeout(() => {
          finishOpeningInvitation();
          window.setTimeout(triggerMissionAccepted, militaryOpening ? 260 : 420);
        }, militaryOpening ? 900 : 680);
        return;
      }
      const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
      if (INVITATION_CONFIG.theme.openingEffectEnabled !== false && !reduceMotion) {
        openBtn.disabled = true;
        overlay.classList.add("opening", "elegant-opening");
        window.setTimeout(triggerElegantOpening, 70);
        window.setTimeout(finishOpeningInvitation, 920);
        return;
      }
      finishOpeningInvitation();
    });

    musicBtn.addEventListener("click", () => {
      if (INVITATION_CONFIG.audio?.showControl === false) return;
      if (audio.paused) {
        audio.play().catch(() => {});
        musicBtn.classList.remove("is-paused");
        musicBtn.setAttribute("aria-label", "Pausar música");
      } else {
        audio.pause();
        musicBtn.classList.add("is-paused");
        musicBtn.setAttribute("aria-label", "Reproducir música");
      }
    });

    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    galleryGrid.addEventListener("mouseover", (event) => {
      const item = event.target.closest("[data-gallery-index]");
      if (!item) return;
      const index = Number(item.dataset.galleryIndex);
      if (index >= 0) updateGalleryPreview(index);
    });

    galleryPrev.addEventListener("click", prevPreview);
    galleryNext.addEventListener("click", nextPreview);
    galleryStage.addEventListener("click", (event) => {
      if (event.target.closest("video")) return;
      openLightbox(previewIndex);
    });

    closeLightbox.addEventListener("click", closeGallery);
    lightboxPrev?.addEventListener("click", prevImage);
    lightboxNext?.addEventListener("click", nextImage);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeGallery();
    });

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("show")) return;
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    });

    lightboxMain.addEventListener("dblclick", (event) => {
      if (lightboxMain.classList.contains("is-video")) return;
      event.preventDefault();
      if (zoomScale > 1.01) {
        resetImageZoom(true);
      } else {
        zoomScale = 2;
        zoomX = 0;
        zoomY = 0;
        applyImageZoom();
      }
    });

    lightboxMain.addEventListener("wheel", (event) => {
      if (lightboxMain.classList.contains("is-video")) return;
      event.preventDefault();
      const direction = event.deltaY < 0 ? 0.22 : -0.22;
      zoomScale = Math.max(1, Math.min(3, zoomScale + direction));
      if (zoomScale <= 1.02) {
        resetImageZoom();
      } else {
        applyImageZoom();
      }
    }, { passive: false });

    lightboxMain.addEventListener("touchstart", (event) => {
      if (lightboxMain.classList.contains("is-video")) {
        if (event.touches.length === 1) {
          panStartX = event.touches[0].clientX;
          panStartY = event.touches[0].clientY;
        }
        return;
      }
      if (event.touches.length === 2) {
        pinchStartDistance = getTouchDistance(event.touches);
        pinchStartScale = zoomScale;
        isPanningImage = false;
        return;
      }

      if (event.touches.length === 1) {
        const now = Date.now();
        if (now - lastTapTime < 280) {
          event.preventDefault();
          if (zoomScale > 1.01) resetImageZoom(true);
          else {
            zoomScale = 2;
            zoomX = 0;
            zoomY = 0;
            applyImageZoom();
          }
        }
        lastTapTime = now;

        if (zoomScale > 1.01) {
          isPanningImage = true;
          lightboxMain.classList.add("is-panning");
          dragOriginX = event.touches[0].clientX - zoomX;
          dragOriginY = event.touches[0].clientY - zoomY;
        } else {
          panStartX = event.touches[0].clientX;
          panStartY = event.touches[0].clientY;
        }
      }
    }, { passive: false });

    lightboxMain.addEventListener("touchmove", (event) => {
      if (lightboxMain.classList.contains("is-video")) return;
      if (event.touches.length === 2) {
        event.preventDefault();
        const distance = getTouchDistance(event.touches);
        zoomScale = Math.max(1, Math.min(3, pinchStartScale * (distance / Math.max(pinchStartDistance, 1))));
        if (zoomScale <= 1.02) {
          zoomScale = 1;
          zoomX = 0;
          zoomY = 0;
        }
        applyImageZoom();
        return;
      }

      if (event.touches.length === 1 && zoomScale > 1.01 && isPanningImage) {
        event.preventDefault();
        zoomX = event.touches[0].clientX - dragOriginX;
        zoomY = event.touches[0].clientY - dragOriginY;
        applyImageZoom();
      }
    }, { passive: false });

    lightboxMain.addEventListener("touchend", (event) => {
      if (lightboxMain.classList.contains("is-video")) {
        if (event.changedTouches.length === 1) {
          const diffX = panStartX - event.changedTouches[0].clientX;
          const diffY = panStartY - event.changedTouches[0].clientY;
          if (Math.abs(diffX) > 64 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) nextImage();
            else prevImage();
          }
        }
        return;
      }
      lightboxMain.classList.remove("is-panning");
      isPanningImage = false;

      if (zoomScale > 1.01) return;

      if (event.changedTouches.length === 1) {
        const diffX = panStartX - event.changedTouches[0].clientX;
        const diffY = panStartY - event.changedTouches[0].clientY;
        if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > 0) nextImage();
          else prevImage();
        }
      }
    });

    confirmYes.addEventListener("click", () => sendConfirmation(true));
    confirmNo.addEventListener("click", () => sendConfirmation(false));
    guestCount.addEventListener("change", renderFamilyMemberFields);
    calendarBtn.addEventListener("click", addToCalendar);
    verCuenta.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("countdown-section").scrollIntoView({ behavior: "smooth", block: "center" });
    });

    let scrollTicking = false;
    let mobileScrollTimer = 0;

    function handleScrollFrame() {
      revealOnScroll();
      updateFloatingButtons();
      updateSmartBackgroundLayout();
      if (!USE_MOBILE_BEHAVIOR) applyHeroParallax();
      scrollTicking = false;
    }

    updateCountdown();
    revealOnScroll();
    updateFloatingButtons();
    const cleanupParticles = initParticles();
    initLightProtection();
    if (!USE_MOBILE_BEHAVIOR) applyHeroParallax();
    updateOverlayScale();

    const countdownTimer = window.setInterval(updateCountdown, 1000);
    window.addEventListener("resize", () => {
      updateOverlayScale();
      updateSmartBackgroundLayout();
    }, { passive: true });
    window.addEventListener("scroll", () => {
      if (scrollTicking) return;
      scrollTicking = true;
      if (USE_MOBILE_BEHAVIOR) {
        clearTimeout(mobileScrollTimer);
        mobileScrollTimer = setTimeout(handleScrollFrame, 34);
      } else {
        requestAnimationFrame(handleScrollFrame);
      }
    }, { passive: true });

    window.addEventListener("pagehide", () => {
      window.clearInterval(countdownTimer);
      clearTimeout(mobileScrollTimer);
      if (typeof cleanupParticles === "function") cleanupParticles();
    }, { once: true });
})();
