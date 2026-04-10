/**
 * وكالة الفائق للسفريات والسياحة
 * Main Application JavaScript
 * Mobile-first | RTL | WhatsApp Lead System
 */

'use strict';

// ============================================================
// CONFIG
// ============================================================
const CONFIG = {
  whatsappNumber: '967771819404',
  agencyName: 'وكالة الفائق للسفريات والسياحة',
};

// ============================================================
// SERVICE DEFINITIONS
// ============================================================
const SERVICES = {
  umrah: {
    title: 'الحج والعمرة',
    emoji: '🕋',
    serviceName: 'الحج والعمرة',
    color: 'gold',
    steps: [
      {
        title: 'البيانات الشخصية',
        subtitle: 'ادخل معلوماتك الأساسية',
        fields: [
          { name: 'name', label: 'الاسم الكامل', type: 'text', placeholder: 'مثال: أحمد علي الأحمدي', required: true },
          { name: 'phone', label: 'رقم الجوال', type: 'tel', placeholder: 'مثال: 771819404', required: true },
        ]
      },
      {
        title: 'تفاصيل الرحلة',
        subtitle: 'حدد تفاصيل برنامجك',
        fields: [
          { name: 'program', label: 'البرنامج المطلوب', type: 'select', required: true, options: ['عمرة اقتصادية', 'عمرة مميزة', 'عمرة VIP', 'حج فردي', 'حج جماعي'] },
          { name: 'transport', label: 'نوع التنقل', type: 'select', required: true, options: ['بري', 'جوي', 'لا يوجد تفضيل'] },
        ]
      },
      {
        title: 'موعد الرحلة',
        subtitle: 'متى تريد الانطلاق؟',
        fields: [
          { name: 'count', label: 'عدد الأشخاص', type: 'number', placeholder: 'مثال: 3', required: true, min: 1 },
          { name: 'date', label: 'تاريخ الانطلاق المقترح', type: 'date', required: true },
        ]
      }
    ],
    buildMessage(data) {
      return `🕋 *الحج والعمرة*
• البرنامج: ${data.program || '-'}
• النقل: ${data.transport || '-'}
• عدد الأشخاص: ${data.count || '-'}
• تاريخ الانطلاق: ${data.date || '-'}`;
    }
  },

  visa: {
    title: 'التأشيرات',
    emoji: '🛂',
    serviceName: 'التأشيرات',
    color: 'blue',
    steps: [
      {
        title: 'البيانات الشخصية',
        subtitle: 'ادخل معلوماتك الأساسية',
        fields: [
          { name: 'name', label: 'الاسم الكامل', type: 'text', placeholder: 'مثال: أحمد علي الأحمدي', required: true },
          { name: 'phone', label: 'رقم الجوال', type: 'tel', placeholder: 'مثال: 771819404', required: true },
        ]
      },
      {
        title: 'نوع التأشيرة',
        subtitle: 'حدد نوع الفيزا المطلوبة',
        fields: [
          { name: 'visaType', label: 'نوع الفيزا', type: 'select', required: true, options: ['فيزا عمل سعودية', 'فيزا زيارة سعودية', 'فيزا عمل أوروبية', 'فيزا أمريكية', 'فيزا تجارية', 'فيزا أخرى'] },
          { name: 'job', label: 'المهنة', type: 'text', placeholder: 'مثال: مهندس، مدرس، طبيب', required: true },
        ]
      },
      {
        title: 'متطلبات الفيزا',
        subtitle: 'أكمل بيانات الملف',
        fields: [
          { name: 'medical', label: 'الفحص الطبي', type: 'select', required: true, options: ['تم الفحص', 'لم يتم بعد', 'قيد التجهيز'] },
          { name: 'sponsor', label: 'الكفيل / جهة العمل', type: 'text', placeholder: 'اسم الكفيل أو الشركة', required: true },
        ]
      }
    ],
    buildMessage(data) {
      return `🛂 *التأشيرات*
• نوع الفيزا: ${data.visaType || '-'}
• المهنة: ${data.job || '-'}
• الفحص الطبي: ${data.medical || '-'}
• الكفيل / جهة العمل: ${data.sponsor || '-'}`;
    }
  },

  passport: {
    title: 'الجوازات',
    emoji: '📄',
    serviceName: 'الجوازات',
    color: 'purple',
    steps: [
      {
        title: 'البيانات الشخصية',
        subtitle: 'ادخل معلوماتك الأساسية',
        fields: [
          { name: 'name', label: 'الاسم الكامل', type: 'text', placeholder: 'مثال: أحمد علي الأحمدي', required: true },
          { name: 'phone', label: 'رقم الجوال', type: 'tel', placeholder: 'مثال: 771819404', required: true },
        ]
      },
      {
        title: 'نوع خدمة الجواز',
        subtitle: 'ما الخدمة المطلوبة؟',
        fields: [
          { name: 'passportService', label: 'نوع الخدمة', type: 'select', required: true, options: ['إصدار جواز جديد', 'تجديد جواز منتهي', 'بدل جواز فاقد', 'تعديل بيانات', 'جواز طفل', 'خدمة مستعجلة'] },
        ]
      }
    ],
    buildMessage(data) {
      return `📄 *الجوازات*
• نوع الخدمة: ${data.passportService || '-'}`;
    }
  },

  flight: {
    title: 'الطيران',
    emoji: '✈️',
    serviceName: 'الطيران',
    color: 'blue',
    steps: [
      {
        title: 'البيانات الشخصية',
        subtitle: 'ادخل معلوماتك الأساسية',
        fields: [
          { name: 'name', label: 'الاسم الكامل', type: 'text', placeholder: 'مثال: أحمد علي الأحمدي', required: true },
          { name: 'phone', label: 'رقم الجوال', type: 'tel', placeholder: 'مثال: 771819404', required: true },
        ]
      },
      {
        title: 'تفاصيل الرحلة',
        subtitle: 'من أين وإلى أين؟',
        fields: [
          { name: 'from', label: 'مدينة المغادرة', type: 'text', placeholder: 'مثال: صنعاء', required: true },
          { name: 'to', label: 'مدينة الوصول', type: 'text', placeholder: 'مثال: جدة، الرياض، دبي', required: true },
        ]
      },
      {
        title: 'بيانات الحجز',
        subtitle: 'حدد التفاصيل النهائية',
        fields: [
          { name: 'date', label: 'تاريخ السفر', type: 'date', required: true },
          { name: 'airline', label: 'الشركة المفضلة', type: 'text', placeholder: 'مثال: اليمنية، فلاي دبي، العربية', required: false },
        ]
      },
      {
        title: 'عدد المقاعد',
        subtitle: 'كم مقعداً تحتاج؟',
        fields: [
          { name: 'seats', label: 'عدد المقاعد', type: 'number', placeholder: 'مثال: 2', required: true, min: 1 },
          { name: 'flightClass', label: 'درجة السفر', type: 'select', required: true, options: ['اقتصادية', 'رجال أعمال', 'أولى'] },
        ]
      }
    ],
    buildMessage(data) {
      return `✈️ *الطيران*
• من: ${data.from || '-'}
• إلى: ${data.to || '-'}
• التاريخ: ${data.date || '-'}
• الشركة المفضلة: ${data.airline || 'لا يوجد تفضيل'}
• عدد المقاعد: ${data.seats || '-'}
• درجة السفر: ${data.flightClass || '-'}`;
    }
  }
};

// ============================================================
// STATE
// ============================================================
const state = {
  currentService: null,
  currentStep: 0,
  formData: {},
  isSubmitting: false,
};

// ============================================================
// DOM HELPERS
// ============================================================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const el = (tag, attrs = {}, ...children) => {
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'className') e.className = v;
    else if (k === 'innerHTML') e.innerHTML = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
    else e.setAttribute(k, v);
  });
  children.forEach(c => c && e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));
  return e;
};

// ============================================================
// MODAL SYSTEM
// ============================================================
const modal = {
  overlay: null,
  box: null,
  titleEl: null,
  emojiEl: null,
  progressFill: null,
  stepLabelEl: null,
  stepSubtitleEl: null,
  formContainer: null,
  prevBtn: null,
  nextBtn: null,
  submitBtn: null,
  successState: null,

  init() {
    this.overlay = $('#modal-overlay');
    this.box = $('#modal-box');
    this.titleEl = $('#modal-title');
    this.emojiEl = $('#modal-emoji');
    this.progressFill = $('#progress-fill');
    this.stepLabelEl = $('#step-label');
    this.stepSubtitleEl = $('#step-subtitle');
    this.formContainer = $('#form-container');
    this.prevBtn = $('#prev-btn');
    this.nextBtn = $('#next-btn');
    this.submitBtn = $('#submit-btn');
    this.successState = $('#success-state');

    this.overlay?.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });

    this.prevBtn?.addEventListener('click', () => this.prevStep());
    this.nextBtn?.addEventListener('click', () => this.nextStep());
    this.submitBtn?.addEventListener('click', () => this.submit());
  },

  open(serviceKey) {
    state.currentService = serviceKey;
    state.currentStep = 0;
    state.formData = {};
    state.isSubmitting = false;

    const service = SERVICES[serviceKey];
    if (!service) return;

    if (this.titleEl) this.titleEl.textContent = service.title;
    if (this.emojiEl) this.emojiEl.textContent = service.emoji;
    if (this.successState) this.successState.style.display = 'none';
    if (this.formContainer) this.formContainer.style.display = 'block';

    this.renderStep();
    this.overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.overlay?.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      state.currentService = null;
      state.currentStep = 0;
      state.formData = {};
      if (this.formContainer) this.formContainer.innerHTML = '';
    }, 300);
  },

  renderStep() {
    const service = SERVICES[state.currentService];
    if (!service) return;

    const step = service.steps[state.currentStep];
    const totalSteps = service.steps.length;
    const pct = ((state.currentStep + 1) / totalSteps) * 100;

    // Update progress
    if (this.progressFill) this.progressFill.style.width = `${pct}%`;
    if (this.stepLabelEl) this.stepLabelEl.textContent = `الخطوة ${state.currentStep + 1} من ${totalSteps}: ${step.title}`;
    if (this.stepSubtitleEl) this.stepSubtitleEl.textContent = step.subtitle;

    // Render fields
    const isSingle = step.fields.length === 1;
    const gridClass = isSingle ? 'form-grid single' : 'form-grid';

    let fieldsHTML = `<div class="${gridClass}">`;
    step.fields.forEach(field => {
      fieldsHTML += this.buildField(field);
    });
    fieldsHTML += `</div>`;

    if (this.formContainer) {
      this.formContainer.innerHTML = `<div class="form-step active">${fieldsHTML}</div>`;

      // Restore saved values
      step.fields.forEach(f => {
        const input = this.formContainer.querySelector(`[name="${f.name}"]`);
        if (input && state.formData[f.name]) {
          input.value = state.formData[f.name];
        }
      });

      // Animate
      const stepEl = this.formContainer.querySelector('.form-step');
      if (stepEl) {
        stepEl.style.opacity = 0;
        stepEl.style.transform = 'translateY(12px)';
        requestAnimationFrame(() => {
          stepEl.style.transition = 'all 0.28s ease';
          stepEl.style.opacity = 1;
          stepEl.style.transform = 'translateY(0)';
        });
      }
    }

    // Update nav buttons
    if (this.prevBtn) {
      this.prevBtn.style.display = state.currentStep === 0 ? 'none' : 'flex';
    }

    const isLast = state.currentStep === totalSteps - 1;
    if (this.nextBtn) this.nextBtn.style.display = isLast ? 'none' : 'flex';
    if (this.submitBtn) this.submitBtn.style.display = isLast ? 'flex' : 'none';
  },

  buildField(field) {
    if (field.type === 'select') {
      const optionsHTML = field.options.map(o => `<option value="${o}">${o}</option>`).join('');
      return `
        <div class="field-group glass" style="border-radius:22px;padding:16px 18px 14px;">
          <label class="field-label">${field.label}${field.required ? ' <span style="color:#f87171;">*</span>' : ''}</label>
          <select name="${field.name}" class="field" ${field.required ? 'required' : ''}>
            <option value="">— اختر —</option>
            ${optionsHTML}
          </select>
        </div>`;
    }

    return `
      <div class="field-group glass" style="border-radius:22px;padding:16px 18px 14px;">
        <label class="field-label">${field.label}${field.required ? ' <span style="color:#f87171;">*</span>' : ''}</label>
        <input
          type="${field.type}"
          name="${field.name}"
          placeholder="${field.placeholder || ''}"
          class="field"
          ${field.required ? 'required' : ''}
          ${field.min !== undefined ? `min="${field.min}"` : ''}
        />
      </div>`;
  },

  collectCurrentStep() {
    const service = SERVICES[state.currentService];
    if (!service) return;
    const step = service.steps[state.currentStep];
    step.fields.forEach(f => {
      const input = this.formContainer?.querySelector(`[name="${f.name}"]`);
      if (input) state.formData[f.name] = input.value.trim();
    });
  },

  validateCurrentStep() {
    const service = SERVICES[state.currentService];
    if (!service) return false;
    const step = service.steps[state.currentStep];
    let valid = true;

    step.fields.forEach(f => {
      if (!f.required) return;
      const input = this.formContainer?.querySelector(`[name="${f.name}"]`);
      if (!input) return;
      const val = input.value.trim();
      if (!val) {
        valid = false;
        input.classList.add('field-error');
        input.style.animation = 'shake 0.35s ease';
        input.addEventListener('input', () => {
          input.classList.remove('field-error');
          input.style.animation = '';
        }, { once: true });
        if (valid === false) input.focus();
      }
    });

    return valid;
  },

  nextStep() {
    if (!this.validateCurrentStep()) return;
    this.collectCurrentStep();
    state.currentStep++;
    this.renderStep();
  },

  prevStep() {
    this.collectCurrentStep();
    state.currentStep--;
    this.renderStep();
  },

  submit() {
    if (!this.validateCurrentStep()) return;
    if (state.isSubmitting) return;
    state.isSubmitting = true;

    this.collectCurrentStep();

    const service = SERVICES[state.currentService];
    const details = service.buildMessage(state.formData);

    const message = `🚀 *إشعار طلب خدمة جديد*
━━━━━━━━━━━━━━━━━━━━━━━
🏢 *الوكالة:* وكالة الفائق للسفريات والسياحة وخدمات الحج والعمرة
📍 *الفرع:* صنعاء - شارع الخمسين - جوار السفارة الهندية
━━━━━━━━━━━━━━━━━━━━━━━
📍 *الخدمة المطلوبة:* ${service.serviceName}
👤 *اسم العميل:* ${state.formData.name || '-'}
📞 *رقم الجوال:* ${state.formData.phone || '-'}

📝 *تفاصيل الطلب:*
${details}

━━━━━━━━━━━━━━━━━━━━━━━
🌐 *مرسل من الموقع الرسمي للوكالة*
⏰ *وقت الطلب:* ${new Date().toLocaleString('ar-YE')}`;

    // Show success
    if (this.formContainer) this.formContainer.style.display = 'none';
    if (this.successState) this.successState.style.display = 'flex';
    if (this.prevBtn) this.prevBtn.style.display = 'none';
    if (this.nextBtn) this.nextBtn.style.display = 'none';
    if (this.submitBtn) this.submitBtn.style.display = 'none';

    // Open WhatsApp after short delay
    setTimeout(() => {
      const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');

      // Close modal after 3s
      setTimeout(() => this.close(), 3000);
    }, 800);
  }
};

// ============================================================
// TRACK ORDER MODAL
// ============================================================
const trackModal = {
  overlay: null,

  init() {
    this.overlay = $('#track-overlay');
    this.overlay?.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });
  },

  open() {
    this.overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const input = this.overlay?.querySelector('#track-phone');
      if (input) input.focus();
    }, 300);
  },

  close() {
    this.overlay?.classList.remove('active');
    document.body.style.overflow = '';
  },

  submit() {
    const phoneInput = $('#track-phone');
    const phone = phoneInput?.value.trim();

    if (!phone) {
      if (phoneInput) {
        phoneInput.classList.add('field-error');
        phoneInput.focus();
        phoneInput.addEventListener('input', () => phoneInput.classList.remove('field-error'), { once: true });
      }
      return;
    }

    const message = `📦 *متابعة معاملة - وكالة الفائق*
━━━━━━━━━━━━━━━━━━━━━━━
أريد الاستفسار عن حالة معاملتي.
📞 *رقم جوالي:* ${phone}
⏰ *وقت الطلب:* ${new Date().toLocaleString('ar-YE')}
━━━━━━━━━━━━━━━━━━━━━━━
🌐 مرسل من الموقع الرسمي`;

    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    this.close();
  }
};

// ============================================================
// SCROLL EFFECTS
// ============================================================
function initScrollEffects() {
  const navbar = $('#navbar');
  const scrollProgress = $('#scroll-progress');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrolled / total) * 100;

    // Navbar glass on scroll
    if (navbar) {
      navbar.classList.toggle('scrolled', scrolled > 60);
    }

    // Scroll progress bar
    if (scrollProgress) {
      scrollProgress.style.width = `${pct}%`;
    }
  }, { passive: true });
}

// ============================================================
// REVEAL ON SCROLL (Intersection Observer)
// ============================================================
function initReveal() {
  const revealEls = $$('.reveal');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => obs.observe(el));
}

// ============================================================
// STATS COUNTER ANIMATION
// ============================================================
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;

    el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString('ar');

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = $$('[data-count]');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.dataset.count);
        animateCounter(entry.target, target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
}

// ============================================================
// YEAR
// ============================================================
function setYear() {
  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

// ============================================================
// CSS SHAKE ANIMATION
// ============================================================
function injectShakeAnimation() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-6px); }
      40%, 80% { transform: translateX(6px); }
    }
  `;
  document.head.appendChild(style);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  modal.init();
  trackModal.init();
  initScrollEffects();
  initReveal();
  initCounters();
  setYear();
  injectShakeAnimation();

  // Global open functions
  window.openService = (key) => modal.open(key);
  window.closeModal = () => modal.close();
  window.openTrack = () => trackModal.open();
  window.closeTrack = () => trackModal.close();
  window.submitTrack = () => trackModal.submit();
});
