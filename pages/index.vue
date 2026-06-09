<template>
  <div ref="topEl" class="bg-[#e8e8e8] font-sans text-[#111] antialiased">
    <header class="sticky top-0 z-40 border-b border-black/10 bg-black text-white">
      <div class="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-12">
        <div class="flex items-center gap-3">
          <img src="/rrt.png" alt="RTT logo" class="h-9 w-9 rounded-md bg-white/95 p-1" />
          <div>
            <p class="text-sm font-semibold tracking-wide sm:text-base">RTT Constructions CORP</p>
            <p class="text-[11px] uppercase tracking-[0.18em] text-white/70">Company Profile</p>
          </div>
        </div>

        <nav class="hidden items-center gap-8 md:flex" aria-label="Desktop Navigation">
          <a class="menuLink" href="#about" @click.prevent="scrollToSection('about')">About</a>
          <a class="menuLink" href="#services" @click.prevent="scrollToSection('services')">Services</a>
          <a class="menuLink" href="#showcase" @click.prevent="scrollToSection('showcase')">Portfolio</a>
          <button class="contactBtn" @click="scrollToSection('contact'); contactFlipped = true">Contact Me</button>
        </nav>

        <button class="md:hidden rounded-md border border-white/30 p-2" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 7H20M4 12H20M4 17H20" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div v-if="mobileOpen" class="border-t border-white/15 bg-black/95 px-4 py-4 md:hidden">
        <div class="grid gap-3 text-sm">
          <a class="mobileLink" href="#about" @click.prevent="scrollToSection('about')">About</a>
          <a class="mobileLink" href="#services" @click.prevent="scrollToSection('services')">Services</a>
          <a class="mobileLink" href="#showcase" @click.prevent="scrollToSection('showcase')">Portfolio</a>
          <button class="contactBtn mt-1 w-fit" @click="scrollToSection('contact'); contactFlipped = true">Contact Me</button>
        </div>
      </div>
    </header>

    <main>
      <section id="hero" data-section="hero" class="section-reveal hero-shell">
        <div class="grid min-h-[calc(100svh-4rem)] w-full overflow-hidden bg-[#efefef] lg:grid-cols-[1fr_1.15fr]">
          <div class="relative flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14">
            <div class="mb-4 h-10 w-10 rounded-md border border-black/20 bg-white p-1">
              <img src="/rrt.png" alt="RTT mini logo" class="h-full w-full object-contain" />
            </div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#0800f5]">Construction Excellence</p>
            <h1 class="mt-3 text-4xl font-bold leading-tight md:text-6xl">RTT Constructions</h1>
            <p class="mt-4 max-w-xl text-base text-black/65 md:text-lg">Delivering civil, structural, and fit-out projects with strong planning, safe execution, and reliable handover.</p>

            <div class="mt-9 flex items-center gap-3">
              <a href="#" class="socialBtn" aria-label="Email">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6H20V18H4V6Z" /><path d="M4 8L12 13L20 8" /></svg>
              </a>
              <a href="#" class="socialBtn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 8H16V4H13C10.8 4 9 5.8 9 8V10H6V14H9V20H13V14H16L17 10H13V8C13 7.4 13.4 7 14 7Z" /></svg>
              </a>
              <a href="#" class="socialBtn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="9" width="4" height="11" /><circle cx="6" cy="5.5" r="1.5" /><path d="M12 20V9H16C18.2 9 20 10.8 20 13V20" /></svg>
              </a>
            </div>
          </div>

          <div class="heroRight relative overflow-hidden bg-black">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(8,0,245,0.28),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(209,37,27,0.2),transparent_48%)]" />
            <div
              class="logoStage"
              :style="{ '--rx': `${logoTilt.x}deg`, '--ry': `${logoTilt.y}deg` }"
              @mousemove="onLogoMove"
              @mouseleave="resetLogoTilt"
            >
              <img src="/rrt.png" alt="RTT Constructions logo" class="logoMain" />
            </div>
          </div>
        </div>
      </section>

      <div class="sectionDivider" aria-hidden="true"></div>

      <section class="section-reveal px-4 sm:px-6 lg:px-8" data-section="band">
        <div class="mx-auto w-full max-w-6xl bg-[#151515] px-6 py-8 text-white sm:px-10 sm:py-10">
          <p class="text-xl font-semibold tracking-[0.18em]">RTT CONSTRUCTIONS CORP</p>
          <p class="mt-3 max-w-4xl text-sm leading-relaxed text-white/70 sm:text-base">
            We build infrastructure that lasts. Our team handles pre-construction planning, site execution, and quality control to deliver projects on schedule while meeting strict safety and workmanship standards.
          </p>
          <button class="mt-6 inline-flex items-center gap-2 border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-black">
            Read More
          </button>
        </div>
      </section>

      <div class="sectionDivider" aria-hidden="true"></div>

      <section id="about" data-section="about" class="section-reveal section-shell alt-soft px-4 py-14 sm:px-6 lg:px-8">
        <div class="mx-auto w-full max-w-6xl">
          <div class="sectionTag mx-auto"><span>Company Overview</span></div>
          <h2 class="mt-7 text-center text-3xl font-bold md:text-4xl">Built on trust, driven by discipline.</h2>
          <p class="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-black/70 sm:text-base">
            RTT Constructions CORP specializes in structural works, commercial fit-outs, and civil support packages. From planning and technical coordination to on-site delivery, we align every phase to quality, budget, and timeline goals.
          </p>
          <div class="mx-auto mt-8 w-fit border-x border-black/40 px-6 py-1 text-xs font-semibold uppercase tracking-[0.14em]">Explore</div>
        </div>
      </section>

      <div class="sectionDivider" aria-hidden="true"></div>

      <section id="services" data-section="services" class="section-reveal section-shell px-4 pb-14 sm:px-6 lg:px-8">
        <div class="mx-auto w-full max-w-6xl">
          <div class="sectionTag"><span>Core Services</span></div>
          <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article class="serviceCard">
            <h3>General Construction</h3>
            <p>Complete execution for vertical and horizontal works, from structural elements to architectural finishing.</p>
          </article>
          <article class="serviceCard">
            <h3>Project Management</h3>
            <p>Integrated scheduling, procurement coordination, and site supervision to keep projects on target.</p>
          </article>
          <article class="serviceCard sm:col-span-2 lg:col-span-1">
            <h3>Renovation & Fit-Out</h3>
            <p>Interior and exterior upgrades for offices, facilities, and commercial spaces with minimal disruption.</p>
          </article>
          <article class="serviceCard sm:col-span-2 lg:col-span-1">
            <h3>Site Safety & QA</h3>
            <p>Strict safety implementation and quality assurance checks across all critical construction milestones.</p>
          </article>
          <article class="serviceCard">
            <h3>Maintenance Support</h3>
            <p>Post-turnover preventive maintenance, repairs, and structural checks for long-term asset performance.</p>
          </article>
          <article class="serviceCard">
            <h3>Technical Consulting</h3>
            <p>Practical design and constructability advice for owners and teams before site mobilization begins.</p>
          </article>
          </div>
        </div>
      </section>

      <div class="sectionDivider" aria-hidden="true"></div>

      <section class="carousel-section" data-section="carousel">
        <div class="carousel-wrapper">
          <div class="carousel-track" :style="{ transform: `translateX(-${carouselIndex * 100}%)` }">
            <div v-for="(image, index) in carouselImages" :key="index" class="carousel-slide">
              <img :src="image" alt="Construction project" loading="lazy" />
            </div>
          </div>
          <div class="carousel-overlay" />
          <div class="carousel-content">
            <h2 class="animate-fade-in">Quality Craftsmanship</h2>
            <p class="animate-fade-in-delayed">From planning to execution, we ensure every detail meets our standards.</p>
          </div>
        </div>
      </section>

      <div class="sectionDivider" aria-hidden="true"></div>

      <section id="showcase" data-section="showcase" class="section-reveal section-shell alt-soft px-4 pb-14 sm:px-6 lg:px-8">
        <div class="mx-auto w-full max-w-6xl">
          <div class="sectionTag"><span>Project Showcase</span></div>
          <div class="mt-10 overflow-hidden rounded-[16px] border border-black/15 bg-white">
          <div class="relative h-48 bg-[linear-gradient(120deg,#202020,#353535)]">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(8,0,245,0.45),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(209,37,27,0.3),transparent_42%)]" />
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="border-[3px] border-white px-12 py-3 text-xl font-semibold uppercase tracking-[0.25em] text-white">Completed Works</div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-[1px] bg-black/15 md:grid-cols-3">
            <article
              v-for="(item, index) in showcasePhotos"
              :key="item.title"
              class="showItem photo-reveal h-40 md:h-52"
              :style="{ transitionDelay: `${index * 90}ms` }"
              data-reveal
            >
              <img :src="item.image" :alt="item.title" loading="lazy" />
              <span>{{ item.title }}</span>
            </article>
          </div>
        </div>
        </div>
      </section>

      <div class="sectionDivider" aria-hidden="true"></div>

      <section id="contact" data-section="contact" class="section-reveal section-shell px-4 pb-16 sm:px-6 lg:px-8">
        <div class="mx-auto w-full max-w-6xl">
          <div class="sectionTag"><span>Get In Touch</span></div>
          <div class="mt-10 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
            
            <!-- FLIP CARD CONTAINER -->
            <div class="contactFlipContainer" :class="{ flipped: contactFlipped }">
              <!-- FRONT SIDE -->
              <div class="contactFlipFront">
                <div class="rounded-xl border border-black/15 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.06)] h-full flex flex-col justify-center items-center text-center">
                  <svg viewBox="0 0 24 24" class="h-16 w-16 mb-4 text-[#0800f5]" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M3 8L10.89 13.26C11.5475 13.7957 12.4525 13.7957 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h3 class="text-2xl font-bold mb-3">Ready to start?</h3>
                  <p class="text-sm text-black/70 mb-6 leading-relaxed">Click the button below to share your project details. We'll get back to you within 24 hours.</p>
                  <button type="button" class="contactBtn font-semibold" @click="contactFlipped = true">Flip & Send Message</button>
                </div>
              </div>

              <!-- BACK SIDE (FORM) -->
              <div class="contactFlipBack">
                <form class="rounded-xl border border-black/15 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-8 flex flex-col" @submit.prevent="onSubmit">
                  <h3 class="text-2xl font-semibold text-black">Contact us</h3>
                  <p class="mt-2 text-sm text-black/60">Share your project requirement, location, and timeline.</p>

                  <label class="mt-6 block">
                    <span class="text-xs font-bold uppercase tracking-[0.14em] text-black/80">Name</span>
                    <input v-model.trim="form.name" required class="formInput mt-2.5 w-full" placeholder="John Smith" />
                  </label>
                  <label class="mt-4 block">
                    <span class="text-xs font-bold uppercase tracking-[0.14em] text-black/80">Email</span>
                    <input v-model.trim="form.email" type="email" required class="formInput mt-2.5 w-full" placeholder="john@example.com" />
                  </label>
                  <label class="mt-4 block">
                    <span class="text-xs font-bold uppercase tracking-[0.14em] text-black/80">Message</span>
                    <textarea v-model.trim="form.message" required class="formInput formTextarea mt-2.5 w-full" placeholder="Tell us about your project..." />
                  </label>

                  <div class="mt-5 flex gap-3">
                    <button class="contactBtn font-semibold" type="submit">Send Message</button>
                    <button class="formBackBtn" type="button" @click="contactFlipped = false">Back</button>
                  </div>
                  <p v-if="submitted" class="mt-3 text-sm font-semibold text-[#0800f5]">✓ Message ready! (Demo form)</p>
                </form>
              </div>
            </div>

            <div id="map" class="overflow-hidden rounded-xl border border-black/15 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <iframe
                class="h-full min-h-[380px] w-full"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Manila%20Philippines&output=embed"
                title="RTT Constructions location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-black text-white">
      <div class="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p class="text-lg font-semibold">RTT Constructions CORP</p>
          <p class="mt-2 text-sm text-white/70">Reliable structures. Strong partnerships. Built for long-term performance.</p>
        </div>

        <div>
          <p class="footerTitle">Services</p>
          <ul class="footerList">
            <li>General Construction</li>
            <li>Fit-Out Works</li>
            <li>Project Management</li>
            <li>Maintenance Support</li>
          </ul>
        </div>

        <div>
          <p class="footerTitle">Office</p>
          <ul class="footerList">
            <li>Manila, Philippines</li>
            <li>Mon-Sat • 8:00 AM - 5:00 PM</li>
            <li>+63 000 000 0000</li>
            <li>info@rttconstructions.example</li>
          </ul>
        </div>

        <div>
          <p class="footerTitle">Follow Us</p>
          <div class="mt-3 flex items-center gap-3">
            <a href="#" class="socialBtn socialBtnFooter" aria-label="Facebook">
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 8H16V4H13C10.8 4 9 5.8 9 8V10H6V14H9V20H13V14H16L17 10H13V8C13 7.4 13.4 7 14 7Z" /></svg>
            </a>
            <a href="#" class="socialBtn socialBtnFooter" aria-label="Instagram">
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="#" class="socialBtn socialBtnFooter" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="9" width="4" height="11" /><circle cx="6" cy="5.5" r="1.5" /><path d="M12 20V9H16C18.2 9 20 10.8 20 13V20" /></svg>
            </a>
          </div>
          <button class="contactBtn mt-5" @click="scrollToSection('contact'); contactFlipped = true">Back to Top</button>
        </div>
      </div>

      <div class="border-t border-white/10">
        <div class="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 text-xs text-white/60 sm:px-6 lg:px-8">
          <span>© {{ new Date().getFullYear() }} RTT Constructions CORP. All rights reserved.</span>
          <span class="inline-flex items-center gap-2"><i class="h-2 w-2 rounded-full bg-[#0800f5]"></i><i class="h-2 w-2 rounded-full bg-[#d1251b]"></i></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const topEl = ref<HTMLElement | null>(null)
const submitted = ref(false)
const mobileOpen = ref(false)
const logoTilt = ref({ x: 0, y: 0 })
const carouselIndex = ref(0)
const contactFlipped = ref(false)
let observer: IntersectionObserver | null = null
let carouselInterval: NodeJS.Timeout | null = null

const carouselImages = [
  'https://images.unsplash.com/photo-1581092156056-04a27b38ee8d?auto=format&fit=crop&w=1600&q=60',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=60',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=60',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=60'
]

const showcasePhotos = [
  {
    title: 'Commercial Build',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Industrial Facility',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Structural Upgrade',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Road & Drainage',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Warehouse Works',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Exterior Finishes',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
  }
]

const form = ref({
  name: '',
  email: '',
  message: ''
})

function onSubmit() {
  submitted.value = true
}

function scrollToTop() {
  topEl.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  mobileOpen.value = false
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onLogoMove(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement | null
  if (!target) {
    return
  }

  const rect = target.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height

  logoTilt.value = {
    x: (0.5 - y) * 16,
    y: (x - 0.5) * 18
  }
}

function resetLogoTilt() {
  logoTilt.value = { x: 0, y: 0 }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.22 }
  )

  document.querySelectorAll<HTMLElement>('[data-section], [data-reveal]').forEach((element) => {
    observer?.observe(element)
  })

  carouselInterval = setInterval(() => {
    carouselIndex.value = (carouselIndex.value + 1) % carouselImages.length
  }, 5000)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
})
</script>

<style scoped>
.section-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms ease, transform 700ms ease;
}

.carousel-section {
  position: relative;
  height: 420px;
  overflow: hidden;
  background: #1a1a1a;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 900ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.carousel-slide {
  position: relative;
  min-width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(3px) brightness(0.7);
}

.carousel-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(8, 0, 245, 0.15), rgba(209, 37, 27, 0.1));
  pointer-events: none;
}

.carousel-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 2rem;
}

.carousel-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 1rem;
}

.carousel-content p {
  font-size: 1rem;
  max-width: 500px;
  opacity: 0.9;
  line-height: 1.6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 700ms ease 320ms both;
}

.animate-fade-in-delayed {
  animation: fadeIn 700ms ease 520ms both;
}

.contactFlipContainer {
  position: relative;
  width: 100%;
  min-height: auto;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.contactFlipFront,
.contactFlipBack {
  position: absolute;
  width: 100%;
  min-height: 100%;
  backface-visibility: hidden;
  transition: transform 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.contactFlipFront {
  transform: rotateY(0deg);
}

.contactFlipBack {
  transform: rotateY(180deg);
}

.contactFlipContainer.flipped .contactFlipFront {
  transform: rotateY(-180deg);
}

.contactFlipContainer.flipped .contactFlipBack {
  transform: rotateY(0deg);
}

.formInput {
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  background: #f8f8f8;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  color: #111;
  outline: none;
  transition: all 260ms ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.formInput::placeholder {
  color: rgba(0, 0, 0, 0.45);
  font-weight: 500;
}

.formInput:focus {
  border-color: #0800f5;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(8, 0, 245, 0.08), 0 2px 6px rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.formTextarea {
  font-family: inherit;
  resize: none;
  height: 120px !important;
  max-height: 140px;
}

.formBackBtn {
  border: 1.5px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  background: #ffffff;
  color: #111;
  padding: 0.75rem 1.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: all 220ms ease;
  cursor: pointer;
}

.formBackBtn:hover {
  border-color: #0800f5;
  background: #f8f8f8;
  color: #0800f5;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(8, 0, 245, 0.15);
}

.hero-shell {
  padding: 0;
}

.section-shell {
  min-height: 100svh;
  display: flex;
  align-items: center;
}

.sectionTag {
  position: relative;
  width: fit-content;
  padding: 0.6rem 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.74rem;
  font-weight: 700;
  color: #111;
}

.sectionTag::before,
.sectionTag::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.sectionTag::before {
  border-top: 2px solid rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid rgba(0, 0, 0, 0.8);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 560ms ease;
}

.sectionTag::after {
  border-left: 2px solid rgba(0, 0, 0, 0.8);
  border-right: 2px solid rgba(0, 0, 0, 0.8);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 560ms ease 220ms;
}

.section-reveal.is-visible .sectionTag::before {
  transform: scaleX(1);
}

.section-reveal.is-visible .sectionTag::after {
  transform: scaleY(1);
}

.sectionTag span {
  position: relative;
  padding-inline: 0.35rem;
}

.sectionTag span::before,
.sectionTag span::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  transform: translateY(-50%);
}

.sectionTag span::before {
  left: -10px;
  background: #0800f5;
}

.sectionTag span::after {
  right: -10px;
  background: #d1251b;
}

.alt-soft {
  background: linear-gradient(180deg, #f1f1f1 0%, #e9e9e9 100%);
}

.sectionDivider {
  height: 28px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.08), transparent);
}

.section-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.menuLink {
  position: relative;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
  transition: color 220ms ease;
}

.menuLink::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  height: 2px;
  width: 100%;
  background: #ffffff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease;
}

.menuLink:hover {
  color: #ffffff;
}

.menuLink:hover::after {
  transform: scaleX(1);
}

.mobileLink {
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

.contactBtn {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.65);
  background: #ffffff;
  color: #111111;
  padding: 0.52rem 1rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.contactBtn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(255, 255, 255, 0.18);
}

.heroRight {
  clip-path: polygon(16% 0, 100% 0, 100% 100%, 0 100%);
}

.logoStage {
  position: relative;
  height: 100%;
  min-height: 380px;
  display: grid;
  place-items: center;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transition: transform 180ms ease;
}

.logoMain {
  width: min(60%, 280px);
  filter: drop-shadow(0 20px 42px rgba(8, 0, 245, 0.36));
  transform: translateZ(22px);
  transition: transform 220ms ease;
}

.logoStage::after {
  content: '';
  position: absolute;
  bottom: 18%;
  width: 190px;
  height: 26px;
  border-radius: 999px;
  background: rgba(8, 0, 245, 0.32);
  filter: blur(16px);
}

.logoStage:hover .logoMain {
  transform: translateZ(34px) scale(1.03);
}

.socialBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 0.35rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #ffffff;
  color: #111111;
  transition: transform 200ms ease, background-color 200ms ease;
}

.socialBtn:hover {
  transform: translateY(-2px);
  background: #f4f4f4;
}

.serviceCard {
  border: 1px solid rgba(0, 0, 0, 0.13);
  background: #ffffff;
  border-radius: 0.75rem;
  padding: 1.3rem;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.serviceCard h3 {
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #0800f5;
}

.serviceCard p {
  margin-top: 0.7rem;
  font-size: 0.93rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.68);
}

.serviceCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
}

.showItem {
  position: relative;
  overflow: hidden;
  background: #111111;
}

.showItem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 700ms ease;
}

.showItem::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), transparent 50%);
}

.showItem span {
  position: absolute;
  left: 0.85rem;
  bottom: 0.75rem;
  z-index: 1;
  color: #fff;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}

.footerTitle {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ffffff;
}

.footerList {
  margin-top: 0.7rem;
  display: grid;
  gap: 0.36rem;
  font-size: 0.86rem;
  color: rgba(255, 255, 255, 0.7);
}

.socialBtnFooter {
  border-color: rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.socialBtnFooter:hover {
  background: rgba(255, 255, 255, 0.16);
}

.showItem:hover img {
  transform: scale(1.12);
}

.photo-reveal {
  opacity: 0;
  transform: translateY(28px) scale(0.98);
  transition: opacity 700ms ease, transform 700ms ease;
}

.photo-reveal.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.photo-reveal.is-visible img {
  animation: kenburns 15s ease-in-out infinite alternate;
}

@keyframes kenburns {
  from {
    transform: scale(1.04);
  }
  to {
    transform: scale(1.14);
  }
}

@media (max-width: 1023px) {
  .heroRight {
    clip-path: none;
    min-height: 360px;
  }
}

@media (max-width: 767px) {
  .section-shell {
    min-height: auto;
  }

  .sectionTag {
    margin-inline: auto;
  }

  .sectionDivider {
    height: 18px;
  }

  .logoStage {
    min-height: 320px;
  }

  .logoMain {
    width: min(62%, 220px);
  }

  .carousel-section {
    height: 300px;
  }

  .carousel-content h2 {
    font-size: 1.8rem;
  }

  .carousel-content p {
    font-size: 0.9rem;
  }

  .formInput {
    padding: 0.65rem 0.875rem;
    font-size: 0.88rem;
  }

  .formTextarea {
    height: 100px !important;
    max-height: 120px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-reveal,
  .photo-reveal,
  .serviceCard,
  .carousel-track,
  .animate-fade-in,
  .animate-fade-in-delayed,
  .contactFlipFront,
  .contactFlipBack,
  .contactBtn,
  .menuLink,
  .socialBtn,
  .logoStage,
  .logoMain {
    transition: none;
    animation: none;
  }
}
</style>

