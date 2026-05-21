/* ===== O3 PHYSIOTHERAPY CLINIC — script.js ===== */

/* ─────────────────────────────────────────────
   SVG ICON LIBRARY
───────────────────────────────────────────── */
const ICONS = {
  phone:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  pin:      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  close:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  send:     `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  heart:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  star:     `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  check:    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  run:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="1"/><path d="m7 21 3-6"/><path d="m16 21-3-6-3-4 6-2"/><path d="m5 11 5-1 4 3 4-1"/></svg>`,
  wa:       `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`,
};

/* ─────────────────────────────────────────────
   MOTION ENGINE — spring + smooth animations
───────────────────────────────────────────── */
const Motion = {
  springEase: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  smoothEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  bounceEase: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  animate(el, keyframes, options = {}) {
    const { duration = 400, delay = 0, easing = this.springEase, fill = 'forwards' } = options;
    return el.animate(keyframes, { duration, delay, easing, fill });
  },

  stagger(elements, keyframes, options = {}) {
    const staggerDelay = options.staggerDelay || 80;
    elements.forEach((el, i) => {
      this.animate(el, keyframes, { ...options, delay: (options.delay || 0) + i * staggerDelay });
    });
  },

  fadeUp(el, options = {}) {
    return this.animate(el, [
      { opacity: 0, transform: 'translateY(28px)' },
      { opacity: 1, transform: 'translateY(0px)' }
    ], { duration: 500, ...options });
  },

  scaleIn(el, options = {}) {
    return this.animate(el, [
      { opacity: 0, transform: 'scale(0.85)' },
      { opacity: 1, transform: 'scale(1)' }
    ], { duration: 380, ...options });
  },

  slideInLeft(el, options = {}) {
    return this.animate(el, [
      { opacity: 0, transform: 'translateX(-40px)' },
      { opacity: 1, transform: 'translateX(0)' }
    ], { duration: 480, ...options });
  },

  slideInRight(el, options = {}) {
    return this.animate(el, [
      { opacity: 0, transform: 'translateX(40px)' },
      { opacity: 1, transform: 'translateX(0)' }
    ], { duration: 480, ...options });
  },

  magnetic(el, strength = 0.3) {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.4s ' + this.springEase;
      el.style.transform = 'translate(0,0)';
      setTimeout(() => el.style.transition = '', 400);
    });
  }
};

/* ─────────────────────────────────────────────
   PARTICLE SYSTEM — floating background dots
───────────────────────────────────────────── */
function initParticles() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particleCanvas';
  canvas.style.cssText = `
    position:fixed; top:0; left:0; width:100%; height:100%;
    pointer-events:none; z-index:0; opacity:0.4;
  `;
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const particles = Array.from({ length: 28 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 2.5 + 1,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.4 + 0.08,
    color: Math.random() > 0.5 ? '0,180,216' : '26,107,60',
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
      ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,180,216,${0.07 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

/* ─────────────────────────────────────────────
   FLOATING ORBS
───────────────────────────────────────────── */
function initFloatingOrbs() {
  const orbData = [
    { size: 340, x: -80, y: 120, color: 'rgba(0,180,216,0.07)', duration: 18 },
    { size: 280, x: '75vw', y: 60, color: 'rgba(26,107,60,0.06)', duration: 22 },
    { size: 200, x: '40vw', y: '60vh', color: 'rgba(0,119,182,0.05)', duration: 15 },
  ];
  const orbContainer = document.createElement('div');
  orbContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;';
  orbData.forEach((o, i) => {
    const orb = document.createElement('div');
    orb.style.cssText = `
      position:absolute; width:${o.size}px; height:${o.size}px;
      left:${o.x}${typeof o.x === 'number' ? 'px' : ''};
      top:${o.y}${typeof o.y === 'number' ? 'px' : ''};
      background:radial-gradient(circle at 40% 40%, ${o.color}, transparent 70%);
      border-radius:50%; filter:blur(40px);
      animation:orbFloat${i} ${o.duration}s ease-in-out infinite alternate;
    `;
    orbContainer.appendChild(orb);
  });
  document.body.prepend(orbContainer);

  const style = document.createElement('style');
  style.textContent = `
    @keyframes orbFloat0 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(60px,80px) scale(1.15)} }
    @keyframes orbFloat1 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(-50px,60px) scale(1.1)} }
    @keyframes orbFloat2 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(40px,-70px) scale(1.2)} }
  `;
  document.head.appendChild(style);
}

/* ─────────────────────────────────────────────
   CURSOR GLOW
───────────────────────────────────────────── */
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.id = 'cursorGlow';
  glow.style.cssText = `
    position:fixed; width:320px; height:320px; border-radius:50%;
    background:radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%);
    pointer-events:none; z-index:1; transform:translate(-50%,-50%);
    transition:opacity 0.3s ease; opacity:0;
  `;
  document.body.appendChild(glow);
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
    glow.style.opacity = '1';
  });
  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
}

/* ─────────────────────────────────────────────
   INJECT MOTION STYLES
───────────────────────────────────────────── */
function injectMotionStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #navbar { animation: navSlideDown 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
    @keyframes navSlideDown { from{transform:translateY(-100%);opacity:0} to{transform:translateY(0);opacity:1} }

    .service-card, .testi-card, .loc-card, .cond-card {
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease !important;
    }

    @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
    .gradient-text { background-size:200% auto !important; animation:shimmer 4s linear infinite; }
    .hero-accent { background-size:200% auto !important; animation:shimmer 5s linear infinite; }

    @keyframes statPop { 0%{transform:scale(1)} 50%{transform:scale(1.12)} 100%{transform:scale(1)} }
    .stat-pop { animation:statPop 0.4s cubic-bezier(0.34,1.56,0.64,1); }

    .btn-primary, .btn-white, .hero-btn-primary {
      transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.25s ease, box-shadow 0.25s ease !important;
    }
    .btn-primary:active, .hero-btn-primary:active { transform:scale(0.96) !important; }

    /* Chatbot */
    .chatbot-window { transform:scale(0.85) translateY(20px); opacity:0; transform-origin:bottom right; transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease !important; }
    .chatbot-window.open { transform:scale(1) translateY(0) !important; opacity:1 !important; }
    .chat-msg { animation:msgSlideIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
    .chat-msg.user { animation:msgSlideInRight 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
    @keyframes msgSlideIn { from{opacity:0;transform:translateX(-16px) scale(0.95)} to{opacity:1;transform:translateX(0) scale(1)} }
    @keyframes msgSlideInRight { from{opacity:0;transform:translateX(16px) scale(0.95)} to{opacity:1;transform:translateX(0) scale(1)} }

    /* FAB */
    .fab-child { transform:scale(0) translateY(10px); opacity:0; transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease !important; }
    .fab-group.open .fab-child:nth-child(1) { transform:scale(1) translateY(0) !important; opacity:1 !important; transition-delay:0.12s !important; }
    .fab-group.open .fab-child:nth-child(2) { transform:scale(1) translateY(0) !important; opacity:1 !important; transition-delay:0.07s !important; }
    .fab-group.open .fab-child:nth-child(3) { transform:scale(1) translateY(0) !important; opacity:1 !important; transition-delay:0.02s !important; }
    .fab-trigger { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1) !important; }
    .fab-trigger.open { transform:rotate(135deg) scale(1.05) !important; }

    /* Toast */
    .o3-toast { position:fixed; bottom:90px; left:50%; transform:translateX(-50%) translateY(20px) scale(0.92); opacity:0; transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1); background:var(--navy); color:white; padding:12px 24px; border-radius:50px; font-size:.85rem; font-weight:600; z-index:9000; white-space:nowrap; pointer-events:none; }
    .o3-toast.show { transform:translateX(-50%) translateY(0) scale(1); opacity:1; }

    /* Nav scroll effect */
    #navbar.scrolled { box-shadow:0 4px 30px rgba(26,46,74,0.18) !important; }

    /* Smooth page transition */
    .page.active { animation:pageEnter 0.45s cubic-bezier(0.34,1.56,0.64,1) both !important; }
    @keyframes pageEnter { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

    /* Pulsing badge */
    @keyframes badgePulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,180,216,0.3)} 50%{box-shadow:0 0 0 8px rgba(0,180,216,0)} }
    .hero-slide-badge { animation:badgePulse 2.5s ease-in-out infinite; }

    /* Scroll indicator */
    @keyframes scrollBounce { 0%,100%{transform:translateY(0);opacity:1} 50%{transform:translateY(8px);opacity:.4} }
  `;
  document.head.appendChild(style);
}

/* ─────────────────────────────────────────────
   CHATBOT
───────────────────────────────────────────── */
const chatbotReplies = {
  'book': 'To book an appointment, please call <strong>+91 94625 91098</strong> or <a href="https://wa.me/919462591098" target="_blank" style="color:#00b4d8;">WhatsApp us</a>. We\'re open Mon–Sat, 8AM–8PM.',
  'location': 'We have 7 clinics across Ahmedabad and Mumbai:<br>Ganpati Vihar, B-97, Tijara Rd, Patak,<br>Bhagwanpura, Alwar, Rajasthan – 301001',
  'timing': 'We are open <strong>Monday to Saturday, 9:00 AM – 9:00 PM</strong>. Sunday is closed.',
  'service': 'We offer: Pharmacy & Medicines, General Physician Consultations, Health Supplements, Baby & Mother Care, Surgical Supplies, and Diagnostics Support. Tap a service above or ask me anything!',
  'fee': 'Fees vary by service and location. Please WhatsApp or call us for current pricing: <strong>+91 94625 91098</strong>.',
  'doctor': 'Our clinic is led by <strong>Dr. Hiren Patel (MPT – Ortho & Sports)</strong>, one of India\'s most qualified physiotherapists, alumnus of RGUHS Bengaluru.',
  'pain': 'We treat back pain, neck pain, sports injuries, frozen shoulder, knee pain, chronic headaches, posture issues and much more. What\'s troubling you?',
  'hello': 'Hello! 👋 I\'m the Riddhi Medical assistant. I can help with bookings, locations, services, fees or any questions. How can I help?',
  'hi': 'Hi there! 👋 Welcome to O3 Physio Clinic. What can I help you with today?',
  'default': 'I\'d be happy to help! For detailed information, please <a href="https://wa.me/919462591098" target="_blank" style="color:#00b4d8;">WhatsApp us</a> or call <strong>+91 94625 91098</strong>.',
};

function getBotReply(msg) {
  const m = msg.toLowerCase();
  if (m.includes('book') || m.includes('appoint')) return chatbotReplies.book;
  if (m.includes('locat') || m.includes('address') || m.includes('where') || m.includes('clinic')) return chatbotReplies.location;
  if (m.includes('time') || m.includes('hour') || m.includes('timing') || m.includes('open')) return chatbotReplies.timing;
  if (m.includes('service') || m.includes('treat') || m.includes('offer')) return chatbotReplies.service;
  if (m.includes('fee') || m.includes('cost') || m.includes('price') || m.includes('charge')) return chatbotReplies.fee;
  if (m.includes('doctor') || m.includes('hiren') || m.includes('dr')) return chatbotReplies.doctor;
  if (m.includes('pain') || m.includes('back') || m.includes('neck') || m.includes('knee') || m.includes('shoulder')) return chatbotReplies.pain;
  if (m.includes('hello') || m.includes('hey')) return chatbotReplies.hello;
  if (m.includes('hi')) return chatbotReplies.hi;
  return chatbotReplies.default;
}

function initChatbot() {
  // FAB group
  const fabGroup = document.createElement('div');
  fabGroup.className = 'fab-group';
  fabGroup.style.cssText = 'position:fixed;bottom:28px;right:28px;z-index:900;display:flex;flex-direction:column;align-items:flex-end;gap:10px;';

  const fabCall = document.createElement('a');
  fabCall.href = 'tel:919462591098';
  fabCall.className = 'fab-child';
  fabCall.title = 'Call: +91 94625 91098';
  fabCall.style.cssText = 'display:flex;align-items:center;gap:10px;background:white;color:#1a2e4a;padding:10px 18px 10px 14px;border-radius:50px;box-shadow:0 4px 20px rgba(26,46,74,.18);font-size:.82rem;font-weight:700;text-decoration:none;white-space:nowrap;';
  fabCall.innerHTML = `<span style="background:#1a2e4a;color:white;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;">${ICONS.phone}</span> Call: +91 94625 91098`;

  const fabWA = document.createElement('a');
  fabWA.href = 'https://wa.me/919462591098';
  fabWA.target = '_blank';
  fabWA.className = 'fab-child';
  fabWA.title = 'WhatsApp';
  fabWA.style.cssText = 'display:flex;align-items:center;gap:10px;background:#25D366;color:white;padding:10px 18px 10px 14px;border-radius:50px;box-shadow:0 4px 20px rgba(37,211,102,.35);font-size:.82rem;font-weight:700;text-decoration:none;white-space:nowrap;';
  fabWA.innerHTML = `<span style="display:flex;align-items:center;justify-content:center;">${ICONS.wa}</span> WhatsApp`;

  const fabChat = document.createElement('button');
  fabChat.className = 'fab-child';
  fabChat.title = 'Chat';
  fabChat.style.cssText = 'display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#00b4d8,#0077b6);color:white;padding:10px 18px 10px 14px;border-radius:50px;box-shadow:0 4px 20px rgba(0,180,216,.4);font-size:.82rem;font-weight:700;border:none;cursor:pointer;white-space:nowrap;';
  fabChat.innerHTML = `<span style="font-size:1.1rem;">💬</span> Chat with Us`;
  fabChat.onclick = () => toggleChatbot();

  const fabTrigger = document.createElement('button');
  fabTrigger.className = 'fab-trigger';
  fabTrigger.title = 'Get Help';
  fabTrigger.style.cssText = 'width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#1a6b3c,#00b4d8);color:white;border:none;font-size:1.6rem;cursor:pointer;box-shadow:0 8px 24px rgba(0,180,216,.5);display:flex;align-items:center;justify-content:center;';
  fabTrigger.textContent = '+';
  let fabOpen = false;
  fabTrigger.onclick = () => {
    fabOpen = !fabOpen;
    fabGroup.classList.toggle('open', fabOpen);
    fabTrigger.classList.toggle('open', fabOpen);
  };

  fabGroup.appendChild(fabCall);
  fabGroup.appendChild(fabWA);
  fabGroup.appendChild(fabChat);
  fabGroup.appendChild(fabTrigger);

  // Remove old float-wa if exists
  const oldWa = document.querySelector('.float-wa');
  if (oldWa) oldWa.remove();

  document.body.appendChild(fabGroup);

  // Chatbot window
  const chatWin = document.createElement('div');
  chatWin.id = 'chatbotWindow';
  chatWin.className = 'chatbot-window';
  chatWin.style.cssText = `
    position:fixed; bottom:100px; right:28px; z-index:901;
    width:340px; max-height:480px;
    background:white; border-radius:24px;
    box-shadow:0 20px 60px rgba(26,46,74,.2);
    display:none; flex-direction:column; overflow:hidden;
  `;
  chatWin.innerHTML = `
    <div style="background:linear-gradient(135deg,#0077b6,#00b4d8);padding:18px 20px;display:flex;align-items:center;gap:12px;">
      <div style="width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;color:white;position:relative;">
        ${ICONS.run}
        <div style="position:absolute;width:10px;height:10px;background:#00e5b0;border-radius:50%;bottom:0;right:0;border:2px solid white;"></div>
      </div>
      <div style="flex:1;">
        <div style="color:white;font-weight:700;font-size:.9rem;">Riddhi Medical Assistant</div>
        <div style="color:rgba(255,255,255,.75);font-size:.72rem;">Usually replies instantly</div>
      </div>
      <button onclick="toggleChatbot()" style="background:rgba(255,255,255,.15);border:none;color:white;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;">${ICONS.close}</button>
    </div>
    <div id="chatMessages" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;max-height:280px;">
      <div class="chat-msg" style="background:#f4f7fb;border-radius:0 14px 14px 14px;padding:12px 14px;font-size:.84rem;line-height:1.6;max-width:85%;">
        Hi! 👋 I'm the Riddhi Medical assistant. I can help with:<br>
        <span style="color:#0077b6;font-weight:600;">bookings · locations · services · timings</span><br>
        What can I help you with today?
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        <button onclick="chatQuick('book appointment')" style="background:rgba(0,119,182,.1);color:#0077b6;border:1px solid rgba(0,119,182,.2);border-radius:50px;padding:5px 12px;font-size:.75rem;font-weight:600;cursor:pointer;transition:.2s;" class="quick-btn">📅 Book</button>
        <button onclick="chatQuick('our locations')" style="background:rgba(0,119,182,.1);color:#0077b6;border:1px solid rgba(0,119,182,.2);border-radius:50px;padding:5px 12px;font-size:.75rem;font-weight:600;cursor:pointer;transition:.2s;" class="quick-btn">📍 Locations</button>
        <button onclick="chatQuick('services offered')" style="background:rgba(0,119,182,.1);color:#0077b6;border:1px solid rgba(0,119,182,.2);border-radius:50px;padding:5px 12px;font-size:.75rem;font-weight:600;cursor:pointer;transition:.2s;" class="quick-btn">🏥 Services</button>
        <button onclick="chatQuick('clinic timing')" style="background:rgba(0,119,182,.1);color:#0077b6;border:1px solid rgba(0,119,182,.2);border-radius:50px;padding:5px 12px;font-size:.75rem;font-weight:600;cursor:pointer;transition:.2s;" class="quick-btn">🕐 Hours</button>
      </div>
    </div>
    <div style="padding:12px;border-top:1px solid #f0f0f0;display:flex;gap:8px;background:white;">
      <input id="chatInput" placeholder="Type a message..." style="flex:1;border:1.5px solid #e0e0e0;border-radius:50px;padding:9px 16px;font-size:.85rem;font-family:'DM Sans',sans-serif;outline:none;transition:.2s;" onkeypress="chatEnter(event)" onfocus="this.style.borderColor='#00b4d8'" onblur="this.style.borderColor='#e0e0e0'">
      <button onclick="sendChat()" style="background:linear-gradient(135deg,#0077b6,#00b4d8);color:white;border:none;width:38px;height:38px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.2s;" id="chatSendBtn">${ICONS.send}</button>
    </div>
  `;
  document.body.appendChild(chatWin);

  // Send btn hover
  const sendBtn = document.getElementById('chatSendBtn');
  if (sendBtn) {
    sendBtn.addEventListener('mouseenter', () => { sendBtn.style.transform = 'scale(1.12) rotate(-15deg)'; });
    sendBtn.addEventListener('mouseleave', () => { sendBtn.style.transform = 'scale(1) rotate(0deg)'; });
  }
}

function toggleChatbot() {
  const win = document.getElementById('chatbotWindow');
  if (!win) return;
  if (win.style.display === 'flex') {
    win.classList.remove('open');
    setTimeout(() => win.style.display = 'none', 350);
  } else {
    win.style.display = 'flex';
    requestAnimationFrame(() => win.classList.add('open'));
    document.getElementById('chatInput')?.focus();
  }
}

function addChatMsg(text, isUser = false) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const msg = document.createElement('div');
  msg.className = 'chat-msg' + (isUser ? ' user' : '');
  msg.style.cssText = isUser
    ? `background:linear-gradient(135deg,#1a6b3c,#00b4d8);color:white;border-radius:14px 0 14px 14px;padding:11px 14px;font-size:.84rem;line-height:1.6;max-width:85%;align-self:flex-end;`
    : `background:#f4f7fb;border-radius:0 14px 14px 14px;padding:11px 14px;font-size:.84rem;line-height:1.6;max-width:85%;`;
  msg.innerHTML = text;
  msgs.appendChild(msg);
  msgs.scrollTop = msgs.scrollHeight;
}

function sendChat() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  addChatMsg(text, true);
  input.value = '';
  setTimeout(() => addChatMsg(getBotReply(text)), 600);
}

function chatQuick(text) { addChatMsg(text, true); setTimeout(() => addChatMsg(getBotReply(text)), 500); }
function chatEnter(e) { if (e.key === 'Enter') sendChat(); }

/* ─────────────────────────────────────────────
   MAGNETIC BUTTONS
───────────────────────────────────────────── */
function initMagneticButtons() {
  document.querySelectorAll('.btn-primary, .btn-white, .hero-btn-primary, .nav-book-btn').forEach(btn => {
    Motion.magnetic(btn, 0.2);
  });
}

/* ─────────────────────────────────────────────
   SCROLL EFFECTS
───────────────────────────────────────────── */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 60);

    // Parallax blobs
    document.querySelectorAll('.hero-blob-1').forEach(b => {
      b.style.transform = `translateY(${scrollY * 0.13}px)`;
    });
    document.querySelectorAll('.hero-blob-2').forEach(b => {
      b.style.transform = `translateY(${scrollY * -0.09}px)`;
    });

    lastScroll = scrollY;
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function initRevealAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add('visible');

      if (el.hasAttribute('data-reveal-left')) {
        Motion.slideInLeft(el, { duration: 550, delay: parseInt(el.dataset.delay || 0) });
      } else if (el.hasAttribute('data-reveal-right')) {
        Motion.slideInRight(el, { duration: 550, delay: parseInt(el.dataset.delay || 0) });
      } else {
        Motion.fadeUp(el, { duration: 520, delay: parseInt(el.dataset.delay || 0) });
      }
      obs.unobserve(el);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal],[data-reveal-left],[data-reveal-right]').forEach(el => obs.observe(el));

  // Stagger grids
  const gridObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const cards = e.target.querySelectorAll('.service-card, .testi-card, .loc-card, .cond-card, .pn-pcard');
      if (cards.length) {
        Motion.stagger(Array.from(cards), [
          { opacity: 0, transform: 'translateY(24px) scale(0.97)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' }
        ], { duration: 480, staggerDelay: 75, easing: Motion.smoothEase });
      }
      gridObs.unobserve(e.target);
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.services-grid, .testi-grid, .locations-grid, .conditions-grid, .pn-promise-cards').forEach(el => gridObs.observe(el));
}

/* ─────────────────────────────────────────────
   COUNTER ANIMATIONS
───────────────────────────────────────────── */
function animateCounters() {
  const statsEl = document.querySelector('.dynamic-stats-section');
  if (!statsEl) return;

  const obs = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();

    const items = [
      { id: 'stat-patients', target: 10000, suffix: '+', format: true },
      { id: 'stat-locations', target: 5000, suffix: '+', format: false },
      { id: 'stat-exp', target: 500, suffix: '+', format: false },
      { id: 'stat-satisfaction', target: 100, suffix: '%', format: false },
    ];

    items.forEach(({ id, target, suffix, format }) => {
      const el = document.getElementById(id);
      if (!el) return;
      let start = 0;
      const duration = 2200;
      const fps = 60;
      const increment = target / (duration / (1000 / fps));
      const timer = setInterval(() => {
        start = Math.min(start + increment, target);
        const display = format ? Math.floor(start).toLocaleString() : Math.floor(start);
        el.textContent = display + suffix;
        if (start >= target) {
          el.textContent = (format ? target.toLocaleString() : target) + suffix;
          el.classList.add('stat-pop');
          clearInterval(timer);
        }
      }, 1000 / fps);
    });
  }, { threshold: 0.3 });

  obs.observe(statsEl);
}

/* ─────────────────────────────────────────────
   HERO ENTRANCE ANIMATION
───────────────────────────────────────────── */
function animateHeroEntrance() {
  const heroLeft = document.getElementById('heroLeft');
  if (!heroLeft) return;

  const children = Array.from(heroLeft.children);
  Motion.stagger(children, [
    { opacity: 0, transform: 'translateY(30px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], { duration: 600, staggerDelay: 110, easing: Motion.smoothEase });

  const oval = document.querySelector('.hero-oval-wrap');
  if (oval) {
    Motion.animate(oval, [
      { opacity: 0, transform: 'translateX(50px) scale(0.95)' },
      { opacity: 1, transform: 'translateX(0) scale(1)' }
    ], { duration: 700, delay: 200, easing: Motion.springEase });
  }

  const badges = document.querySelectorAll('.oval-badge');
  badges.forEach((badge, i) => {
    Motion.animate(badge, [
      { opacity: 0, transform: 'scale(0.7)' },
      { opacity: 1, transform: 'scale(1)' }
    ], { duration: 400, delay: 600 + i * 150, easing: Motion.bounceEase });
  });
}

/* ─────────────────────────────────────────────
   TOAST
───────────────────────────────────────────── */
function showToast(msg, duration = 3000) {
  let toast = document.querySelector('.o3-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'o3-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `${ICONS.check} <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ─────────────────────────────────────────────
   CARD HOVER EFFECTS
───────────────────────────────────────────── */
function initCardHovers() {
  document.querySelectorAll('.service-card, .testi-card, .loc-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      Motion.animate(card, [
        { transform: 'translateY(0) scale(1)' },
        { transform: 'translateY(-8px) scale(1.01)' }
      ], { duration: 280, fill: 'forwards', easing: Motion.springEase });
    });
    card.addEventListener('mouseleave', () => {
      Motion.animate(card, [
        { transform: 'translateY(-8px) scale(1.01)' },
        { transform: 'translateY(0) scale(1)' }
      ], { duration: 280, fill: 'forwards', easing: Motion.springEase });
    });
  });
}

/* ─────────────────────────────────────────────
   INIT ALL
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  injectMotionStyles();
  initParticles();
  initFloatingOrbs();
  initCursorGlow();
  initScrollEffects();
  initRevealAnimations();
  animateCounters();
  animateHeroEntrance();
  initChatbot();
  initMagneticButtons();
  initCardHovers();

  // Show toast after 3 seconds
  setTimeout(() => showToast('Welcome to Riddhi Medical, Alwar! 👋'), 3000);
});

// Re-init on page switch
const origShowPage = window.showPage;
if (typeof window.showPage === 'function') {
  const _orig = window.showPage;
  window.showPage = function(id) {
    _orig(id);
    setTimeout(() => {
      initRevealAnimations();
      initCardHovers();
      if (id === 'home') { animateHeroEntrance(); animateCounters(); }
    }, 100);
  };
}

/* End of script */
/* ─────────────────────────────────────────────
   MEDICINES / PHARMACY SECTION
───────────────────────────────────────────── */
const MEDICINES = [
  { id:1,  name:'Calcium + Vitamin D3',       category:'supplement', price:299,  mrp:399,  color:'#e3f2fd', tc:'#1565c0', label:'Supplement',   desc:'Bone strength & joint support. 60 tablets.',
    img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop&q=80' },
  { id:2,  name:'Omega-3 Fish Oil 1000mg',    category:'supplement', price:449,  mrp:599,  color:'#e8f5e9', tc:'#2e7d32', label:'Supplement',   desc:'Reduces inflammation, supports joint health. 90 softgels.',
    img:'https://images.unsplash.com/photo-1550572017-edd951aa8ca6?w=200&h=200&fit=crop&q=80' },
  { id:3,  name:'Multivitamin Daily',         category:'supplement', price:349,  mrp:499,  color:'#fff3e0', tc:'#e65100', label:'Supplement',   desc:'Complete daily nutrition. A-Z vitamins & minerals. 30 tabs.',
    img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&q=80' },
  { id:4,  name:'Magnesium 400mg',            category:'supplement', price:299,  mrp:449,  color:'#f3e5f5', tc:'#6a1b9a', label:'Supplement',   desc:'Muscle relaxation & cramp relief. 60 tablets.',
    img:'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=200&h=200&fit=crop&q=80' },
  { id:5,  name:'Vitamin B12',                category:'supplement', price:199,  mrp:279,  color:'#e0f2f1', tc:'#00695c', label:'Supplement',   desc:'Nerve health & energy support. 30 tablets.',
    img:'https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=200&h=200&fit=crop&q=80' },
  { id:6,  name:'Iron + Folic Acid',          category:'supplement', price:149,  mrp:219,  color:'#fce4ec', tc:'#880e4f', label:'Supplement',   desc:'Anaemia prevention & energy. 30 tablets.',
    img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop&q=80' },
  { id:7,  name:'Protein Powder 500g',        category:'supplement', price:1099, mrp:1499, color:'#e8f5e9', tc:'#1b5e20', label:'Supplement',   desc:'Muscle recovery. 25g protein/serving.',
    img:'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&h=200&fit=crop&q=80' },
  { id:8,  name:'Zinc + Vitamin C',           category:'supplement', price:199,  mrp:299,  color:'#fff8e1', tc:'#f57f17', label:'Supplement',   desc:'Immune boost & antioxidant. 60 effervescent tabs.',
    img:'https://images.unsplash.com/photo-1550572017-edd951aa8ca6?w=200&h=200&fit=crop&q=80' },
  { id:9,  name:'Diclofenac Gel 1%',          category:'pain',       price:89,   mrp:120,  color:'#fff3e0', tc:'#bf360c', label:'Pain Relief',  desc:'Topical NSAID for local pain. 30g.', rx:true,
    img:'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop&q=80' },
  { id:10, name:'Pain Relief Spray',          category:'pain',       price:149,  mrp:199,  color:'#e3f2fd', tc:'#0d47a1', label:'Pain Relief',  desc:'Instant muscle & sprain relief spray.',
    img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop&q=80' },
  { id:11, name:'Hot & Cold Gel Pack',        category:'pain',       price:199,  mrp:299,  color:'#e0f7fa', tc:'#00697a', label:'Pain Relief',  desc:'Reusable thermotherapy for muscle recovery.',
    img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&q=80' },
  { id:12, name:'Ibuprofen 400mg',            category:'pain',       price:29,   mrp:45,   color:'#fbe9e7', tc:'#bf360c', label:'Pain Relief',  desc:'Anti-inflammatory pain relief. Strip of 10.', rx:true,
    img:'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=200&h=200&fit=crop&q=80' },
  { id:13, name:'Deep Heat Cream 50g',        category:'pain',       price:119,  mrp:169,  color:'#fff3e0', tc:'#e65100', label:'Pain Relief',  desc:'Deep heat for muscle & joint pain. 50g.',
    img:'https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=200&h=200&fit=crop&q=80' },
  { id:14, name:'Paracetamol 650mg',          category:'pain',       price:22,   mrp:35,   color:'#fce4ec', tc:'#880e4f', label:'Pain Relief',  desc:'Fever & pain relief. Strip of 10 tablets.', rx:true,
    img:'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop&q=80' },
  { id:15, name:'Lumbar Back Support',        category:'support',    price:699,  mrp:999,  color:'#e3f2fd', tc:'#1565c0', label:'Brace',        desc:'Rigid lumbar support for back pain. S/M/L/XL.',
    img:'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&h=200&fit=crop&q=80' },
  { id:16, name:'Knee Cap (Neoprene)',        category:'support',    price:349,  mrp:499,  color:'#e8f5e9', tc:'#2e7d32', label:'Brace',        desc:'Compression knee support for stability.',
    img:'https://images.unsplash.com/photo-1550572017-edd951aa8ca6?w=200&h=200&fit=crop&q=80' },
  { id:17, name:'Cervical Neck Collar',       category:'support',    price:249,  mrp:399,  color:'#fff3e0', tc:'#e65100', label:'Brace',        desc:'Foam cervical collar for neck pain.',
    img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&q=80' },
  { id:18, name:'Ankle Brace (Lace-up)',      category:'support',    price:399,  mrp:599,  color:'#e0f2f1', tc:'#00695c', label:'Brace',        desc:'Lateral ankle support for sprains.',
    img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop&q=80' },
  { id:19, name:'Wrist Splint',               category:'support',    price:299,  mrp:449,  color:'#fff8e1', tc:'#f57f17', label:'Brace',        desc:'Carpal tunnel & wrist pain support.',
    img:'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=200&h=200&fit=crop&q=80' },
  { id:20, name:'Shoulder Support',           category:'support',    price:549,  mrp:799,  color:'#f3e5f5', tc:'#6a1b9a', label:'Brace',        desc:'Post-injury shoulder immobilizer. Adjustable.',
    img:'https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=200&h=200&fit=crop&q=80' },
  { id:21, name:'Resistance Bands Set',       category:'therapy',    price:499,  mrp:699,  color:'#e8f5e9', tc:'#1b5e20', label:'Therapy Aid',  desc:'5 resistance levels. Latex exercise bands.',
    img:'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&h=200&fit=crop&q=80' },
  { id:22, name:'Foam Roller 30cm',           category:'therapy',    price:599,  mrp:849,  color:'#e3f2fd', tc:'#0d47a1', label:'Therapy Aid',  desc:'Deep tissue myofascial release roller.',
    img:'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop&q=80' },
  { id:23, name:'Digital BP Monitor',         category:'therapy',    price:1299, mrp:1799, color:'#fff3e0', tc:'#bf360c', label:'Device',        desc:'Auto blood pressure & pulse monitor.',
    img:'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=200&h=200&fit=crop&q=80' },
  { id:24, name:'Glucometer Kit',             category:'therapy',    price:799,  mrp:1099, color:'#fce4ec', tc:'#880e4f', label:'Device',        desc:'Blood glucose monitor with 25 test strips.',
    img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&q=80' },
  { id:25, name:'Electric Heating Pad',       category:'therapy',    price:699,  mrp:999,  color:'#fff8e1', tc:'#f57f17', label:'Therapy Aid',  desc:'3-level electric heating pad. Auto shut-off.',
    img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop&q=80' },
  { id:26, name:'Pulse Oximeter',             category:'therapy',    price:499,  mrp:799,  color:'#f3e5f5', tc:'#6a1b9a', label:'Device',        desc:'Fingertip SpO2 & heart rate monitor.',
    img:'https://images.unsplash.com/photo-1550572017-edd951aa8ca6?w=200&h=200&fit=crop&q=80' },
  { id:27, name:'Turmeric + Curcumin',        category:'wellness',   price:299,  mrp:449,  color:'#fff8e1', tc:'#f57f17', label:'Wellness',      desc:'Anti-inflammatory & immunity support.',
    img:'https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=200&h=200&fit=crop&q=80' },
  { id:28, name:'Ashwagandha 600mg',          category:'wellness',   price:349,  mrp:499,  color:'#e8f5e9', tc:'#2e7d32', label:'Wellness',      desc:'Stress relief, recovery & energy. 60 caps.',
    img:'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop&q=80' },
  { id:29, name:'ORS Electrolyte Sachets',    category:'wellness',   price:99,   mrp:149,  color:'#e0f7fa', tc:'#00697a', label:'Wellness',      desc:'Rehydration & electrolyte balance. Pack of 10.',
    img:'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=200&h=200&fit=crop&q=80' },
  { id:30, name:'Baby Formula 400g',          category:'wellness',   price:599,  mrp:799,  color:'#fce4ec', tc:'#880e4f', label:'Baby Care',     desc:'Stage 1 infant nutrition. Nestle/Similac brands.',
    img:'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&h=200&fit=crop&q=80' },
  { id:31, name:'Antacid Syrup 170ml',        category:'wellness',   price:89,   mrp:129,  color:'#e8eaf6', tc:'#283593', label:'Wellness',      desc:'Fast acidity & gas relief. All ages.',
    img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop&q=80' },
  { id:32, name:'Vitamin D3 60K IU',          category:'supplement', price:129,  mrp:189,  color:'#fff3e0', tc:'#e65100', label:'Supplement',   desc:'Monthly dose softgel. Bone & immunity.',
    img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&q=80' },
];

function buildStorePhotoCard(med) {
  const card = document.createElement('div');
  card.className = 'store-photo-card';
  card.innerHTML = `
    <div class="store-photo-img-wrap">
      <img src="${med.img}" alt="${med.name}" class="store-photo-img"
        onerror="this.parentNode.innerHTML='<div style=\\'font-size:2.2rem;\\'>${med.id % 2 === 0 ? '💊' : '🏥'}</div>'">
    </div>
    <div class="store-photo-info">
      <div class="store-photo-name">${med.name}</div>
      <span class="store-photo-price">₹${med.price}</span><span class="store-photo-mrp">₹${med.mrp}</span>
    </div>
  `;
  card.onclick = () => enquireMed(med.name);
  return card;
}

function buildMedGridCard(med) {
  const disc = Math.round(((med.mrp - med.price) / med.mrp) * 100);
  const card = document.createElement('div');
  card.className = 'med-grid-card';
  card.dataset.category = med.category;
  card.innerHTML = `
    ${med.rx ? '<div class="med-rx-badge">Rx</div>' : ''}
    <div class="med-grid-img-wrap">
      <img src="${med.img}" alt="${med.name}" class="med-grid-photo"
        onerror="this.outerHTML='<div style=\\'font-size:3rem;\\'>${med.id % 3 === 0 ? '💊' : med.id % 3 === 1 ? '🏥' : '💉'}</div>'">
    </div>
    <div class="med-grid-body">
      <span class="med-grid-badge" style="background:${med.color};color:${med.tc};">${med.label}</span>
      <div class="med-grid-name">${med.name}</div>
      <div class="med-grid-desc">${med.desc}</div>
      <div class="med-grid-price-row">
        <div><span class="med-grid-price">₹${med.price}</span><span class="med-grid-mrp" style="margin-left:5px;">₹${med.mrp}</span></div>
        <span class="med-grid-discount">${disc}% OFF</span>
      </div>
      <button class="med-grid-enquire" onclick="enquireMed('${med.name.replace(/'/g,"\\'")}')">💬 Enquire</button>
    </div>
  `;
  return card;
}

function renderMedScrollStrip() {
  const track = document.getElementById('storePhotoTrack');
  if (!track) return;
  track.innerHTML = '';
  [...MEDICINES, ...MEDICINES].forEach(m => track.appendChild(buildStorePhotoCard(m)));
}

function renderMedGrid(category) {
  const grid = document.getElementById('medGrid');
  if (!grid) return;
  const list = category === 'all' ? MEDICINES : MEDICINES.filter(m => m.category === category);
  grid.innerHTML = '';
  list.forEach((med, i) => {
    const card = buildMedGridCard(med);
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    grid.appendChild(card);
    setTimeout(() => {
      card.style.transition = 'opacity .35s ease, transform .35s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 40);
  });
}

function filterMeds(category, btn) {
  document.querySelectorAll('.med-cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderMedGrid(category);
}

function enquireMed(name) {
  const msg = `Hello Riddhi Medical! I'd like to enquire about: *${name}*. Please let me know availability and price at your Bhagwanpura store.`;
  window.open('https://wa.me/919462591098?text=' + encodeURIComponent(msg), '_blank');
}

// Init medicines on load
window.addEventListener('DOMContentLoaded', () => {
  renderMedScrollStrip();
  renderMedGrid('all');
});
