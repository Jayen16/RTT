<template>
  <div ref="topEl" class="bg-white font-sans text-slate-800 antialiased min-h-screen">
    
    <!-- HEADER & GLASS NAVIGATION -->
    <header class="sticky top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#0505D9]/10 text-slate-900">
      <div class="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div class="flex items-center gap-3">
          <img src="/rrt.png" alt="RTT Logo" class="h-9 w-9 rounded-md bg-white p-0.5 object-contain border border-[#0505D9]/10 transition-transform duration-500 hover:rotate-6" />
          <div>
            <p class="text-sm font-display font-extrabold tracking-wider sm:text-base text-[#0505D9]">RTT CONSTRUCTORS CORP</p>
            <p class="text-[10px] font-display uppercase tracking-[0.25em] text-[#D31310] font-semibold">Engineering Excellence</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-8 md:flex" aria-label="Desktop Navigation">
          <a 
            class="menuLink py-2" 
            :class="{ 'text-[#0505D9] border-[#D31310] font-bold border-b-2': activeSection === 'about' }"
            href="#about" 
            @click.prevent="scrollToSection('about')"
          >About</a>
          <a 
            class="menuLink py-2" 
            :class="{ 'text-[#0505D9] border-[#D31310] font-bold border-b-2': activeSection === 'services' }"
            href="#services" 
            @click.prevent="scrollToSection('services')"
          >Services</a>
          <a 
            class="menuLink py-2" 
            :class="{ 'text-[#0505D9] border-[#D31310] font-bold border-b-2': activeSection === 'showcase' }"
            href="#showcase" 
            @click.prevent="scrollToSection('showcase')"
          >Portfolio</a>
          <button 
            class="px-4 py-2 border border-[#0505D9] text-[#0505D9] hover:bg-[#0505D9] hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300"
            @click="scrollToSection('contact'); contactFlipped = true"
          >
            Inquire Now
          </button>
        </nav>

        <!-- Mobile Menu Toggle Button -->
        <button class="md:hidden rounded-md border border-[#0505D9]/20 p-2 text-slate-800 hover:bg-[#0505D9]/5 transition-colors" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path v-if="!mobileOpen" d="M4 7H20M4 12H20M4 17H20" stroke-linecap="round" />
            <path v-else d="M6 18L18 6M6 6l12 12" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div v-if="mobileOpen" class="border-t border-slate-200 bg-white px-4 py-4 md:hidden animate-fade-in">
        <div class="grid gap-3 text-sm">
          <a class="mobileLink py-1 text-slate-700 hover:text-[#0505D9]" href="#about" @click.prevent="scrollToSection('about')">About</a>
          <a class="mobileLink py-1 text-slate-700 hover:text-[#0505D9]" href="#services" @click.prevent="scrollToSection('services')">Services</a>
          <a class="mobileLink py-1 text-slate-700 hover:text-[#0505D9]" href="#showcase" @click.prevent="scrollToSection('showcase')">Portfolio</a>
          <button class="px-4 py-2 border border-[#0505D9] text-[#0505D9] hover:bg-[#0505D9] hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider text-center" @click="scrollToSection('contact'); contactFlipped = true">Inquire Now</button>
        </div>
      </div>
    </header>

    <main>
      
      <!-- HERO SECTION WITH TINTED BLUE GRID BACKGROUND -->
      <section id="hero" class="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-white bg-blueprint text-slate-900 flex items-center">
        <div class="grid w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 lg:grid-cols-[1.1fr_0.9fr] py-12 lg:py-0 gap-12 items-center">
          
          <!-- Hero Copy -->
          <div class="relative flex flex-col justify-center reveal-on-scroll">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0505D9]/10 border border-[#0505D9]/20 text-[#0505D9] text-xs font-bold tracking-wider w-fit mb-6">
              <span class="h-2 w-2 rounded-full bg-[#0505D9] animate-ping" />
              CIVIL, STRUCTURAL & FIT-OUT SPECIALISTS
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight text-slate-900">
              Building Structures,<br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0505D9] to-[#D31310]">
                Engineering Trust.
              </span>
            </h1>
            
            <p class="mt-6 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              RTT Constructors CORP delivers vertical and horizontal structures with meticulous project planning, safety protocols, and strict schedule enforcement.
            </p>

            <!-- CTA Buttons -->
            <div class="mt-10 flex flex-wrap gap-4 items-center">
              <button 
                @click="scrollToSection('showcase')"
                class="px-6 py-3.5 bg-[#0505D9] hover:bg-[#0404B5] text-white text-sm font-bold rounded-lg tracking-wider uppercase shadow-[0_4px_20px_rgba(5,5,217,0.25)] hover:-translate-y-0.5 transition-all duration-300"
              >
                View Showcase
              </button>
              <button 
                @click="scrollToSection('contact')"
                class="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#D31310] border border-[#D31310] text-sm font-bold rounded-lg tracking-wider uppercase hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                Get Free Estimate
              </button>
            </div>

            <!-- Social Links shortcuts -->
            <div class="mt-12 flex items-center gap-4 text-slate-500 border-t border-slate-200 pt-8 w-fit">
              <span class="text-xs uppercase tracking-widest text-slate-600 font-bold">Connect With Us:</span>
              <div class="flex gap-2">
                <a href="#" class="socialBtnHero hover:text-[#0505D9] hover:border-[#0505D9]/30 hover:bg-[#0505D9]/5" aria-label="Email Us">
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6H20V18H4V6Z" /><path d="M4 8L12 13L20 8" /></svg>
                </a>
                <a href="#" class="socialBtnHero hover:text-[#0505D9] hover:border-[#0505D9]/30 hover:bg-[#0505D9]/5" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 8H16V4H13C10.8 4 9 5.8 9 8V10H6V14H9V20H13V14H16L17 10H13V8C13 7.4 13.4 7 14 7Z" /></svg>
                </a>
                <a href="#" class="socialBtnHero hover:text-[#0505D9] hover:border-[#0505D9]/30 hover:bg-[#0505D9]/5" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="9" width="4" height="11" /><circle cx="6" cy="5.5" r="1.5" /><path d="M12 20V9H16C18.2 9 20 10.8 20 13V20" /></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Hero Right: Logo Tilt and Glows -->
          <div 
            class="heroRight relative overflow-hidden bg-slate-50 border border-slate-200 shadow-xl rounded-2xl h-[420px] sm:h-[500px] flex items-center justify-center reveal-on-scroll delay-100"
            @mousemove="onHeroMouseMove"
            @mouseleave="resetHeroMouse"
            ref="heroRightEl"
          >
            <!-- Ambient Glow Lights inside container (using company red/blue) -->
            <div 
              class="absolute w-80 h-80 rounded-full bg-[#0505D9]/10 blur-[100px] pointer-events-none transition-all duration-300 ease-out"
              :style="{ left: `${glowPos.x - 160}px`, top: `${glowPos.y - 160}px` }"
            />
            <div 
              class="absolute w-72 h-72 rounded-full bg-[#D31310]/10 blur-[85px] pointer-events-none transition-all duration-500 ease-out"
              :style="{ left: `${glowPos.redX - 144}px`, top: `${glowPos.redY - 144}px` }"
            />
            
            <!-- Structural blueprint pattern overlay -->
            <div class="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />

            <!-- Interactive 3D Logo Stage -->
            <div
              class="logoStage relative flex items-center justify-center"
              :style="{ transform: `rotateX(${logoTilt.x}deg) rotateY(${logoTilt.y}deg)` }"
            >
              <img src="/rrt.png" alt="RTT Constructors Logo" class="logoMain w-44 sm:w-56 drop-shadow-[0_20px_50px_rgba(5,5,217,0.18)]" />
              <!-- Geometric frame highlight -->
              <div class="absolute -inset-10 border border-[#0505D9]/5 rounded-full pointer-events-none animate-pulse duration-4000" />
              <div class="absolute -inset-16 border border-[#D31310]/5 border-dashed rounded-full pointer-events-none" />
            </div>
            
            <div class="absolute bottom-6 left-6 text-left border-l-2 border-[#D31310] pl-3">
              <p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">EST. 2011</p>
              <p class="text-[10px] text-[#0505D9] font-bold uppercase tracking-wider mt-0.5">MANILA, PH</p>
            </div>
          </div>

        </div>
      </section>

      <!-- METRICS COUNTER BAND (HIGH CONVERTING TRUST) -->
      <section ref="statsSection" class="relative z-10 bg-white border-y border-slate-200 py-12 px-4 sm:px-6 lg:px-12 shadow-sm">
        <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="(stat, index) in stats" :key="index" class="flex flex-col justify-center">
            <p class="text-3xl sm:text-5xl font-display font-black text-[#0505D9]">
              <span v-if="stat.special">{{ stat.special }}</span>
              <span v-else>{{ stat.current.value }}{{ stat.suffix }}</span>
            </p>
            <p class="text-[10px] sm:text-xs font-bold tracking-widest text-[#D31310] mt-2 uppercase font-display">{{ stat.label }}</p>
          </div>
        </div>
      </section>

      <!-- ABOUT SECTION - EDITORIAL SPLIT GRID -->
      <section id="about" class="py-24 bg-slate-50 px-4 sm:px-6 lg:px-12">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          
          <!-- Left side overview details -->
          <div class="reveal-on-scroll">
            <div class="sectionTag border-[#0505D9]/30 text-[#0505D9]"><span>Our Profile</span></div>
            <h2 class="text-3xl sm:text-4xl font-display font-black mt-6 tracking-tight text-slate-900">
              Engineered with Discipline, Built for Durability.
            </h2>
            <p class="mt-6 text-slate-600 leading-relaxed text-base">
              RTT Constructors CORP specializes in civil engineering support, structural works, and commercial architectural fit-outs. Over the last decade, we have partnered with developers and industrial owners to execute builds that meet precise safety and QA certifications.
            </p>
            
            <div class="mt-8 flex gap-6 items-center p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div class="h-12 w-12 rounded-lg bg-[#D31310]/10 flex items-center justify-center text-[#D31310] shrink-0">
                <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-bold text-slate-900 uppercase tracking-wide">Fully Licensed & Certified</p>
                <p class="text-xs text-slate-500 mt-1">Authorized civil contracting team, strictly aligning with regional zoning and building codes.</p>
              </div>
            </div>
          </div>

          <!-- Right side interactive tabs component -->
          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md reveal-on-scroll delay-100">
            <!-- Tabs Menu -->
            <div class="flex gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
              <button 
                v-for="tab in aboutTabs" 
                :key="tab.id"
                @click="activeAboutTab = tab.id"
                class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-300 shrink-0"
                :class="activeAboutTab === tab.id ? 'bg-[#0505D9] text-white' : 'text-slate-500 hover:text-[#0505D9] hover:bg-slate-100'"
              >
                {{ tab.title }}
              </button>
            </div>

            <!-- Tab Content Display -->
            <div class="mt-6 min-h-[200px] animate-fade-in">
              <div v-if="activeAboutTab === 'values'">
                <p class="text-xs font-bold text-[#0505D9] uppercase tracking-wider">How we work on-site</p>
                <div class="grid gap-4 mt-4">
                  <div v-for="point in aboutTabs[0].points" :key="point.name" class="border-l-2 border-[#D31310] pl-4 py-1">
                    <p class="text-sm font-bold text-slate-800 uppercase tracking-wide">{{ point.name }}</p>
                    <p class="text-xs text-slate-500 mt-1">{{ point.desc }}</p>
                  </div>
                </div>
              </div>

              <div v-if="activeAboutTab === 'story'">
                <p class="text-xs font-bold text-[#0505D9] uppercase tracking-wider">Our Journey</p>
                <p class="text-sm text-slate-600 mt-3 leading-relaxed">{{ aboutTabs[1].content }}</p>
                <div class="mt-6 grid grid-cols-2 gap-4">
                  <div class="p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                    <p class="text-2xl font-bold text-slate-800 font-display">100%</p>
                    <p class="text-[10px] uppercase text-slate-500 tracking-wider font-semibold">Engineers On-site</p>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                    <p class="text-2xl font-bold text-slate-800 font-display">Zero</p>
                    <p class="text-[10px] uppercase text-slate-500 tracking-wider font-semibold">Compliance Violations</p>
                  </div>
                </div>
              </div>

              <div v-if="activeAboutTab === 'standards'">
                <p class="text-xs font-bold text-[#0505D9] uppercase tracking-wider">Industry-standard metrics</p>
                <div class="grid gap-4 mt-4">
                  <div v-for="point in aboutTabs[2].points" :key="point.name" class="border-l-2 border-[#0505D9] pl-4 py-1">
                    <p class="text-sm font-bold text-slate-800 uppercase tracking-wide">{{ point.name }}</p>
                    <p class="text-xs text-slate-500 mt-1">{{ point.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- SERVICES SECTION (GRID CARD DISPLAY WITH UNIQUE CUSTOM SVGS) -->
      <section id="services" class="py-24 bg-white text-slate-800 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <!-- background blueprint mesh grid detail -->
        <div class="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
        
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center reveal-on-scroll">
            <div class="sectionTag mx-auto border-[#0505D9]/30 text-[#0505D9]"><span>Core Capabilities</span></div>
            <h2 class="text-3xl sm:text-4xl font-display font-black mt-6 tracking-tight text-slate-900">
              Integrated Engineering & Building Services
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base leading-relaxed">
              We offer comprehensive scope coordination for commercial and heavy industrial infrastructure builds.
            </p>
          </div>

          <!-- Services Grid -->
          <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article 
              v-for="(service, idx) in servicesList" 
              :key="service.title" 
              class="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 hover:border-[#0505D9]/40 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll shadow-sm hover:shadow-md"
              :class="`delay-${(idx % 3) * 100}`"
            >
              <!-- Glowing corner hover accent (using company blue) -->
              <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0505D9]/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <!-- Icon Container -->
              <div class="h-12 w-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0505D9] group-hover:text-white group-hover:bg-[#0505D9] group-hover:border-[#0505D9] transition-all duration-300">
                <!-- Dynamic SVG Rendered inline -->
                <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path v-for="(path, pIdx) in service.svgPaths" :key="pIdx" :d="path" />
                </svg>
              </div>

              <h3 class="mt-6 text-lg font-display font-extrabold text-slate-900 group-hover:text-[#0505D9] transition-colors">
                {{ service.title }}
              </h3>
              <p class="mt-3 text-sm text-slate-500 group-hover:text-slate-600 leading-relaxed transition-colors">
                {{ service.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- PORTFOLIO / SHOWCASE SECTION WITH CATEGORY FILTERS & SPECIFICATION MODALS -->
      <section id="showcase" class="py-24 bg-slate-50 px-4 sm:px-6 lg:px-12">
        <div class="max-w-7xl mx-auto">
          
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-on-scroll">
            <div>
              <div class="sectionTag border-[#0505D9]/30 text-[#0505D9]"><span>Our Projects</span></div>
              <h2 class="text-3xl sm:text-4xl font-display font-black mt-6 tracking-tight text-slate-900">
                Completed Works & Operations
              </h2>
            </div>

            <!-- Categories filters -->
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="cat in portfolioCategories" 
                :key="cat"
                @click="activeCategory = cat"
                class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all duration-300"
                :class="activeCategory === cat ? 'bg-[#0505D9] border-[#0505D9] text-white shadow-md' : 'bg-white border-slate-200 text-slate-600 hover:border-[#0505D9] hover:text-[#0505D9]'"
              >
                {{ cat }}
              </button>
            </div>
          </div>

          <!-- Project Gallery Grid -->
          <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-on-scroll">
            <article 
              v-for="(item, index) in filteredProjects" 
              :key="item.title"
              class="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#0505D9]/20 transition-all duration-300 cursor-pointer"
              @click="openProjectModal(item)"
            >
              <!-- Project Image Container -->
              <div class="relative h-56 overflow-hidden bg-slate-900">
                <img 
                  :src="item.image" 
                  :alt="item.title" 
                  loading="lazy" 
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-[1px]" 
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90 transition-opacity" />
                <span class="absolute top-4 left-4 bg-[#0505D9] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {{ item.category }}
                </span>
              </div>

              <!-- Project Info -->
              <div class="p-6">
                <h3 class="text-lg font-display font-extrabold text-slate-900 group-hover:text-[#0505D9] transition-colors">
                  {{ item.title }}
                </h3>
                <p class="mt-2 text-xs text-[#D31310] font-bold tracking-wide uppercase flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 text-[#D31310] shrink-0" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {{ item.specs.location }}
                </p>
                <p class="mt-3 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {{ item.description }}
                </p>
                
                <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span class="text-xs text-slate-500 font-semibold">Value: <strong class="text-slate-800">{{ item.specs.value }}</strong></span>
                  <span class="text-xs font-bold text-[#0505D9] group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                    Details
                    <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </article>
          </div>

          <div v-if="filteredProjects.length === 0" class="text-center py-16 text-slate-400 font-medium animate-fade-in">
            No projects matched this category filters.
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS / REVIEW CAROUSEL SECTION (USING COMPANY BLUE TINT) -->
      <section class="py-24 bg-[#0505D9]/5 text-slate-800 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <!-- background lighting spots -->
        <div class="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#0505D9]/10 blur-[120px] pointer-events-none" />
        <div class="absolute bottom-1/2 right-1/4 w-96 h-96 rounded-full bg-[#D31310]/5 blur-[120px] pointer-events-none" />

        <div class="max-w-5xl mx-auto relative z-10">
          <div class="text-center reveal-on-scroll">
            <div class="sectionTag mx-auto border-[#0505D9]/30 text-[#0505D9]"><span>Partner Reviews</span></div>
            <h2 class="text-3xl sm:text-4xl font-display font-black mt-6 tracking-tight text-slate-900">
              What Our Clients Say
            </h2>
          </div>

          <!-- Testimonial Slider Container -->
          <div class="mt-16 relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-md reveal-on-scroll">
            
            <!-- Slide Content wrapper -->
            <div class="min-h-[220px] sm:min-h-[180px] flex flex-col justify-between">
              
              <!-- Quote Marks & Star rating -->
              <div>
                <div class="flex gap-1 text-[#D31310] mb-4">
                  <svg v-for="star in 5" :key="star" viewBox="0 0 24 24" class="h-4.5 w-4.5 fill-current" stroke="none">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                
                <p class="text-base sm:text-xl font-bold leading-relaxed text-slate-800 italic">
                  "{{ testimonials[testimonialIndex].quote }}"
                </p>
              </div>

              <!-- Author Info -->
              <div class="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <div class="flex items-center gap-4">
                  <img 
                    :src="testimonials[testimonialIndex].avatar" 
                    :alt="testimonials[testimonialIndex].author" 
                    class="h-12 w-12 rounded-full border-2 border-[#0505D9] object-cover" 
                  />
                  <div>
                    <p class="text-sm font-extrabold text-slate-900 font-display">{{ testimonials[testimonialIndex].author }}</p>
                    <p class="text-xs text-slate-500 font-bold mt-0.5">{{ testimonials[testimonialIndex].role }}</p>
                  </div>
                </div>

                <!-- Navigation Controls -->
                <div class="flex items-center gap-2">
                  <button 
                    @click="prevTestimonial" 
                    class="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#0505D9] hover:text-white transition-colors"
                    aria-label="Previous Testimonial"
                  >
                    <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                  </button>
                  <button 
                    @click="nextTestimonial" 
                    class="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#0505D9] hover:text-white transition-colors"
                    aria-label="Next Testimonial"
                  >
                    <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

            </div>
          </div>

          <!-- Dot Indicators -->
          <div class="flex justify-center gap-2 mt-6">
            <button 
              v-for="(t, idx) in testimonials" 
              :key="idx" 
              @click="testimonialIndex = idx"
              class="h-2 rounded-full transition-all duration-300"
              :class="testimonialIndex === idx ? 'w-6 bg-[#0505D9]' : 'w-2 bg-slate-300'"
              :aria-label="`Go to testimonial ${idx + 1}`"
            />
          </div>
        </div>
      </section>

      <!-- CONTACT & LOCATION SECTION (WITH DOUBLE CARD FLIP FORM) -->
      <section id="contact" class="py-24 bg-white px-4 sm:px-6 lg:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="text-center reveal-on-scroll">
            <div class="sectionTag mx-auto border-[#0505D9]/30 text-[#0505D9]"><span>Inquire</span></div>
            <h2 class="text-3xl sm:text-4xl font-display font-black mt-6 tracking-tight text-slate-900">
              Let's Build Something Lasting
            </h2>
            <p class="mx-auto mt-4 max-w-xl text-slate-500 text-sm">
              We respond to all site assessment and quotation estimates requests within 1 business day.
            </p>
          </div>

          <div class="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            
            <!-- FLIP CARD CONTAINER -->
            <div class="reveal-on-scroll w-full">
              <div class="contactFlipContainer" :class="{ flipped: contactFlipped }">
                
                <!-- FRONT CARD: CTA PANEL -->
                <div class="contactFlipFront">
                  <div class="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-md h-full flex flex-col justify-center items-center text-center">
                    <div class="h-16 w-16 bg-[#0505D9]/10 rounded-full flex items-center justify-center text-[#0505D9] mb-6">
                      <svg viewBox="0 0 24 24" class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path d="M3 8l7.89 5.26a3 3 0 003.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 class="text-2xl font-display font-extrabold text-slate-900">Request Project Quotation</h3>
                    <p class="text-sm text-slate-500 mt-3 max-w-sm leading-relaxed">
                      Provide your blueprint dimensions, project scope, and timeline variables. We'll run a preliminary cost review.
                    </p>
                    <button 
                      type="button" 
                      class="mt-8 px-6 py-3 bg-[#0505D9] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#0404B5] transition-colors shadow-md"
                      @click="contactFlipped = true"
                    >
                      Open Estimator Form
                    </button>
                  </div>
                </div>

                <!-- BACK CARD: PROJECT FORM -->
                <div class="contactFlipBack">
                  <form class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg flex flex-col justify-between h-full" @submit.prevent="onSubmit">
                    <div>
                      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 class="text-lg font-display font-extrabold text-slate-900">Project Estimator Info</h3>
                        <button type="button" class="text-xs font-bold text-slate-400 hover:text-[#0505D9] uppercase tracking-wider" @click="contactFlipped = false">
                          Go Back
                        </button>
                      </div>

                      <div class="grid sm:grid-cols-2 gap-4 mt-6">
                        <label class="block">
                          <span class="text-xs font-bold uppercase tracking-wider text-slate-700">Full Name</span>
                          <input v-model.trim="form.name" required class="formInput mt-1.5 w-full" placeholder="John Doe" />
                        </label>
                        <label class="block">
                          <span class="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</span>
                          <input v-model.trim="form.email" type="email" required class="formInput mt-1.5 w-full" placeholder="john@example.com" />
                        </label>
                      </div>

                      <label class="mt-4 block">
                        <span class="text-xs font-bold uppercase tracking-wider text-slate-700">Project Type</span>
                        <select v-model="form.projectType" class="formInput mt-1.5 w-full bg-slate-50">
                          <option value="Civil Works">Civil/Structural Concrete</option>
                          <option value="Commercial">Commercial Shell Construction</option>
                          <option value="Fit-Out">Architectural Fit-out & Renovation</option>
                          <option value="Other">Consultation & Planning Support</option>
                        </select>
                      </label>

                      <label class="mt-4 block">
                        <span class="text-xs font-bold uppercase tracking-wider text-slate-700">Scope Details & Location</span>
                        <textarea v-model.trim="form.message" required class="formInput formTextarea mt-1.5 w-full" placeholder="Briefly describe site conditions, square footage, and targets..." />
                      </label>
                    </div>

                    <div class="mt-2 flex gap-3">
                      <button 
                        class="px-5 py-3 bg-[#D31310] hover:bg-[#B00F0C] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex-1 flex justify-center items-center gap-2 shadow-md"
                        type="submit"
                        :disabled="submitting || submitted"
                      >
                        <span v-if="submitting">Verifying Details...</span>
                        <span v-else-if="submitted">✓ Submitted!</span>
                        <span v-else>Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>

            <!-- GOOGLE MAP CARD WITH RADIUS FRAME -->
            <div id="map" class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 h-[380px] sm:h-auto reveal-on-scroll delay-100">
              <iframe
                class="h-full min-h-[340px] w-full rounded-xl"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Manila%20Philippines&output=embed"
                title="RTT Constructors Manila Location"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </main>

    <!-- FOOTER WITH DETAILED CHANNELS -->
    <footer class="bg-slate-950 text-white border-t border-white/10 relative overflow-hidden">
      <!-- background styling grids -->
      <div class="absolute inset-0 bg-blueprint-dark opacity-5 pointer-events-none" />
      
      <div class="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12 relative z-10">
        <div>
          <div class="flex items-center gap-2">
            <img src="/rrt.png" alt="RTT Mini Logo" class="h-7 w-7 rounded bg-white p-0.5 object-contain" />
            <p class="text-base font-display font-extrabold tracking-wide text-white">RTT CONSTRUCTORS</p>
          </div>
          <p class="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Leading contractor for commercial fit-outs and civil execution packages. Delivering compliance, structural safety, and precision schedules.
          </p>
        </div>

        <div>
          <p class="footerTitle text-[#0505D9] font-bold">Our Core Services</p>
          <ul class="footerList text-xs sm:text-sm">
            <li class="hover:text-white transition-colors cursor-default">General Structural Works</li>
            <li class="hover:text-white transition-colors cursor-default">Commercial Fit-Out</li>
            <li class="hover:text-white transition-colors cursor-default">Quality Management (QA)</li>
            <li class="hover:text-white transition-colors cursor-default">Preventive Maintenance</li>
          </ul>
        </div>

        <div>
          <p class="footerTitle text-[#0505D9] font-bold">Manila HQ</p>
          <ul class="footerList text-xs sm:text-sm">
            <li class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" class="h-4 w-4 text-[#D31310] shrink-0" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" /></svg>
              Metro Manila, Philippines
            </li>
            <li class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" class="h-4 w-4 text-[#0505D9] shrink-0" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              Mon - Sat • 8:00 AM - 5:00 PM
            </li>
            <li class="flex items-center gap-2">
              <svg viewBox="0 0 24 24" class="h-4 w-4 text-[#0505D9] shrink-0" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              info@rttconstructors.com.ph
            </li>
          </ul>
        </div>

        <div class="flex flex-col justify-between items-start">
          <div>
            <p class="footerTitle text-[#0505D9] font-bold">Stay Updated</p>
            <p class="text-xs text-slate-400 mt-2">Join our monthly newsletter for engineering updates and project reveals.</p>
            <div class="mt-3 flex rounded-lg overflow-hidden border border-white/10 w-full max-w-xs bg-slate-900">
              <input type="email" placeholder="email@domain.com" class="bg-transparent px-3 py-2 text-xs outline-none flex-1 text-white placeholder-slate-500" />
              <button class="bg-[#0505D9] hover:bg-[#0404B5] text-white text-xs px-3 font-semibold transition-colors">Join</button>
            </div>
          </div>
          
          <button 
            class="mt-6 px-4 py-2 border border-white/20 hover:border-[#0505D9] hover:bg-slate-900 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 self-stretch text-center" 
            @click="scrollToTop()"
          >
            Back to Top ↑
          </button>
        </div>
      </div>

      <!-- Copyright band -->
      <div class="border-t border-white/5 py-6">
        <div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-12 text-xs text-slate-500">
          <span>© {{ new Date().getFullYear() }} RTT Constructors CORP. All rights reserved.</span>
          <div class="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
            <span class="h-2 w-2 rounded-full bg-[#0505D9]" />
            <span class="h-2 w-2 rounded-full bg-[#D31310]" />
            Safety • Quality • Speed
          </div>
        </div>
      </div>
    </footer>

    <!-- DETAILED PROJECT INTERACTIVE SPECIFICATION MODAL -->
    <Transition name="fade">
      <div v-if="isModalOpen && selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        <!-- Backdrop blur overlay -->
        <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" @click="closeProjectModal" />
        
        <!-- Modal Content Container -->
        <div class="relative bg-white text-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-scale-in flex flex-col">
          
          <!-- Sticky Modal Header -->
          <div class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-100 px-6 py-4 flex items-center justify-between">
            <div>
              <span class="bg-[#0505D9]/10 text-[#0505D9] text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded">
                {{ selectedProject.category }}
              </span>
              <h3 class="text-xl font-display font-extrabold text-slate-900 mt-1 leading-tight">{{ selectedProject.title }}</h3>
            </div>
            <button 
              @click="closeProjectModal"
              class="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
              aria-label="Close details"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6">
            <!-- Cover image -->
            <div class="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl bg-slate-100">
              <img :src="selectedProject.image" :alt="selectedProject.title" class="h-full w-full object-cover" />
            </div>

            <!-- Specs Grid -->
            <div class="mt-8 grid sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/50 flex flex-col gap-1">
                <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Client Operator</span>
                <span class="text-sm font-bold text-slate-800">{{ selectedProject.specs.client }}</span>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/50 flex flex-col gap-1">
                <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Construction Value</span>
                <span class="text-sm font-bold text-slate-800">{{ selectedProject.specs.value }}</span>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/50 flex flex-col gap-1">
                <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Site Location</span>
                <span class="text-sm font-bold text-slate-800">{{ selectedProject.specs.location }}</span>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/50 flex flex-col gap-1">
                <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Project Duration</span>
                <span class="text-sm font-bold text-slate-800">{{ selectedProject.specs.duration }}</span>
              </div>
            </div>

            <!-- Scope description block -->
            <div class="mt-6 border-t border-slate-100 pt-6">
              <h4 class="text-xs font-bold uppercase tracking-wider text-[#D31310]">Scope & Technical Specifications</h4>
              <p class="text-sm text-slate-700 font-semibold mt-1">{{ selectedProject.specs.scope }}</p>
              
              <h4 class="text-xs font-bold uppercase tracking-wider text-[#0505D9] mt-5">Summary Review</h4>
              <p class="text-sm text-slate-600 leading-relaxed mt-1.5">{{ selectedProject.description }}</p>
            </div>
          </div>

          <!-- Sticky Modal Footer -->
          <div class="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-6 py-4 flex gap-3 justify-end">
            <button 
              @click="closeProjectModal"
              class="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
            >
              Close Overview
            </button>
            <button 
              @click="closeProjectModal(); scrollToSection('contact')"
              class="px-5 py-2.5 bg-[#0505D9] hover:bg-[#0404B5] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
            >
              Ask For Similar Build
            </button>
          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const topEl = ref<HTMLElement | null>(null)
const mobileOpen = ref(false)
const contactFlipped = ref(false)
const activeSection = ref('hero')
const activeAboutTab = ref('values')

const isDark = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// 3D Logo tilt values
const logoTilt = ref({ x: 0, y: 0 })
const glowPos = ref({ x: 180, y: 180, redX: 300, redY: 300 })
const heroRightEl = ref<HTMLElement | null>(null)

// Stats counting animation refs
const statsSection = ref<HTMLElement | null>(null)
const statsStarted = ref(false)
const stats = ref([
  { value: 15, suffix: '+', label: 'Years of Trust', current: ref(0) },
  { value: 250, suffix: '+', label: 'Projects Completed', current: ref(0) },
  { value: 99, suffix: '%', label: 'Satisfaction Rate', current: ref(0) },
  { value: 0, label: 'Safety Record', current: ref(0), special: '0 Incidents' }
])

// Testimonials details
const testimonials = [
  {
    quote: "RTT Constructors delivered our logistics terminal 3 weeks ahead of schedule. Their QA processes were rigorous, and the structural integrity is world-class.",
    author: "Engr. Ricardo de Vega",
    role: "VP of Operations, LogiCore Corp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The office fit-out work was clean, quiet, and completed exactly to our design drawings. Their project managers coordinated perfectly with our office schedule.",
    author: "Marianne Cruz",
    role: "Facilities Director, Apex Commercials",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "We hired RTT for complex seismic retrofitting on our city administrative buildings. Their engineering team worked meticulously under tough constraints.",
    author: "Architect Leo Valero",
    role: "Lead Consultant, Municipal Planning Office",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
]
const testimonialIndex = ref(0)
let testimonialInterval: NodeJS.Timeout | null = null

// Portfolio data
const showcasePhotos = [
  {
    title: 'Commercial Build',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
    description: 'A state-of-the-art office skyscraper featuring a structural steel frame and dynamic glass curtain walls.',
    specs: {
      location: 'Manila, Philippines',
      client: 'Apex Commercial Properties',
      duration: '18 Months',
      scope: 'Structural Concrete, Core Fit-out, MEPFS Coordination',
      value: '$4.2M'
    }
  },
  {
    title: 'Industrial Facility',
    category: 'Civil Works',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    description: 'High-capacity logistics warehouse featuring durable post-tensioned floor slabs and custom drainage systems.',
    specs: {
      location: 'Laguna, Philippines',
      client: 'LogiCore Logistics',
      duration: '12 Months',
      scope: 'Foundation Works, Superstructure, Floor Slabs',
      value: '$2.8M'
    }
  },
  {
    title: 'Structural Upgrade',
    category: 'Civil Works',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'Seismic retrofitting and reinforcement of a multi-story civic building to meet the latest building code standards.',
    specs: {
      location: 'Makati, Philippines',
      client: 'City Government',
      duration: '6 Months',
      scope: 'Carbon Fiber Reinforcement, Shear Walls, Column Jacketing',
      value: '$1.5M'
    }
  },
  {
    title: 'Road & Drainage',
    category: 'Civil Works',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    description: 'Expansion of a 4-lane secondary road with pre-cast concrete box culverts and localized slope protection.',
    specs: {
      location: 'Cavite, Philippines',
      client: 'Department of Infrastructure',
      duration: '9 Months',
      scope: 'Earthworks, Concrete Paving, Box Culverts',
      value: '$1.9M'
    }
  },
  {
    title: 'Warehouse Works',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: 'An expansive distribution facility featuring precision concrete flat floors and structural steel columns.',
    specs: {
      location: 'Batangas, Philippines',
      client: 'Global Logistics Group',
      duration: '14 Months',
      scope: 'Superstructure, Metal Decking, QA Concrete Testing',
      value: '$3.5M'
    }
  },
  {
    title: 'Exterior Finishes',
    category: 'Fit-Out',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern corporate headquarters interior and exterior cladding, featuring acoustic ceilings and wood wall accents.',
    specs: {
      location: 'Taguig, Philippines',
      client: 'Nove Corporate Offices',
      duration: '5 Months',
      scope: 'Drywall Partitioning, Drop Ceilings, Architectural Painting',
      value: '$0.8M'
    }
  }
]
const portfolioCategories = ['All', 'Commercial', 'Civil Works', 'Fit-Out']
const activeCategory = ref('All')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return showcasePhotos
  return showcasePhotos.filter(p => p.category === activeCategory.value)
})

// Modal active states
const selectedProject = ref<typeof showcasePhotos[0] | null>(null)
const isModalOpen = ref(false)

// Services List with Custom Inline SVG Paths
const servicesList = [
  {
    title: 'General Construction',
    description: 'Complete project execution for heavy foundations, reinforced masonry, high-rise framing, and industrial structural shells.',
    svgPaths: [
      'M6 18h12', 
      'M12 2v16', 
      'M9 12V8a3 3 0 0 1 6 0v4',
      'M8 6h8'
    ]
  },
  {
    title: 'Project Management',
    description: 'Detailed scheduling and digital CPM timeline monitoring. Proactive supply procurement and rigorous on-site subcontractor supervision.',
    svgPaths: [
      'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2',
      'M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2',
      'M9 12h6',
      'M9 16h6'
    ]
  },
  {
    title: 'Renovation & Fit-Out',
    description: 'High-end structural modifications, drywall partition adjustments, drop ceiling works, and luxury corporate architectural finishes.',
    svgPaths: [
      'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94.77',
      'M4.83 19.17a4 4 0 0 0 5.66 0l5.65-5.66-3.53-3.53-5.66 5.65a4 4 0 0 0 0 5.66l-2.12 2.12'
    ]
  },
  {
    title: 'Site Safety & QA',
    description: 'Strict, zero-incident safety routines. Comprehensive PPE compliance checks and structural concrete compression core testing.',
    svgPaths: [
      'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      'm9 11 2 2 4-4'
    ]
  },
  {
    title: 'Maintenance Support',
    description: 'Preventive concrete core scanning, foundation seismic integrity checks, and post-turnover warranty facility inspections.',
    svgPaths: [
      'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94.77',
      'M12 15H9v-3H6V9h3V6h3v3h3v3h-3v3z'
    ]
  },
  {
    title: 'Technical Consulting',
    description: 'Cost estimators, blueprint constructability analysis, quantity surveying, and materials compatibility guidance.',
    svgPaths: [
      'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
      'M12 22V12',
      'M12 12 4 7.5',
      'M12 12l8-4.5'
    ]
  }
]

// About tabs details
const aboutTabs = [
  {
    id: 'values',
    title: 'Core Values',
    points: [
      { name: 'Discipline', desc: 'Strict planning schedules, careful coordination, and precise execution on all sites.' },
      { name: 'Quality first', desc: 'Sourcing premium materials and conducting rigid QA checks at every milestone.' },
      { name: 'Safety Above All', desc: 'Maintaining zero-accident procedures and ensuring comprehensive gear usage.' }
    ]
  },
  {
    id: 'story',
    title: 'Our Story',
    content: 'Founded with a vision to streamline civil and structural execution, RTT Constructors CORP has grown from a specialized foundation subcontractor to a premier contractor for complex industrial and commercial builds across the region. We continue to invest in engineering talent and advanced planning software to ensure seamless project delivery.'
  },
  {
    id: 'standards',
    title: 'Our Standards',
    points: [
      { name: 'ISO Alignment', desc: 'Following standardized protocols for quality assurance and compliance.' },
      { name: 'Certified Staff', desc: 'All site managers are licensed civil or structural engineers.' },
      { name: 'Transparent Pricing', desc: 'Providing clear breakdowns of materials, labor, and timeline contingency.' }
    ]
  }
]

// Contact Form states
const form = ref({
  name: '',
  email: '',
  projectType: 'Civil Works',
  message: ''
})
const submitting = ref(false)
const submitted = ref(false)

function onSubmit() {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    setTimeout(() => {
      submitted.value = false
      contactFlipped.value = false
      form.value = { name: '', email: '', projectType: 'Civil Works', message: '' }
    }, 2500)
  }, 1000)
}

// Dialog control functions
function openProjectModal(project: typeof showcasePhotos[0]) {
  selectedProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeProjectModal() {
  isModalOpen.value = false
  setTimeout(() => {
    selectedProject.value = null
  }, 300)
  document.body.style.overflow = ''
}

// Carousel and sliders triggers
function nextTestimonial() {
  testimonialIndex.value = (testimonialIndex.value + 1) % testimonials.length
}

function prevTestimonial() {
  testimonialIndex.value = (testimonialIndex.value - 1 + testimonials.length) % testimonials.length
}

// Scrollspy helpers
function scrollToTop() {
  topEl.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Custom Scroll Offset logic
function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  mobileOpen.value = false
  if (section) {
    const yOffset = -70 // Navbar height offset
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

// Hero lighting and tilt coordinates calculation
function onHeroMouseMove(event: MouseEvent) {
  if (!heroRightEl.value) return
  const rect = heroRightEl.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  
  glowPos.value.x = x
  glowPos.value.y = y
  
  glowPos.value.redX = glowPos.value.redX + (x - glowPos.value.redX) * 0.15
  glowPos.value.redY = glowPos.value.redY + (y - glowPos.value.redY) * 0.15

  const lx = (x / rect.width)
  const ly = (y / rect.height)
  logoTilt.value = {
    x: (0.5 - ly) * 16,
    y: (lx - 0.5) * 18
  }
}

function resetHeroMouse() {
  logoTilt.value = { x: 0, y: 0 }
  if (!heroRightEl.value) return
  const rect = heroRightEl.value.getBoundingClientRect()
  glowPos.value = {
    x: rect.width / 3,
    y: rect.height / 3,
    redX: (rect.width / 3) * 2,
    redY: (rect.height / 3) * 2
  }
}

// Count up logic trigger
function startStatsCounter() {
  if (statsStarted.value) return
  statsStarted.value = true
  
  stats.value.forEach((stat) => {
    if (stat.special) return
    const duration = 2000
    const start = 0
    const end = stat.value
    const startTime = performance.now()
    
    function update(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = progress * (2 - progress) // Ease out quad
      stat.current.value = Math.floor(ease * (end - start) + start)
      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        stat.current.value = end
      }
    }
    requestAnimationFrame(update)
  })
}

// Observers declarations
let scrollSpyObserver: IntersectionObserver | null = null
let statsObserver: IntersectionObserver | null = null
let revealObserver: IntersectionObserver | null = null

onMounted(() => {
  // Initialize dark mode from localStorage or system preferences
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }

  // 1. Scrollspy for header highlighting
  scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
        activeSection.value = entry.target.id
      }
    })
  }, {
    rootMargin: '-80px 0px -40% 0px',
    threshold: [0.1, 0.2, 0.4]
  })

  document.querySelectorAll('section[id]').forEach((t) => {
    scrollSpyObserver?.observe(t)
  })

  // 2. Reveal on scroll animations observer
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    revealObserver?.observe(el)
  })

  // 3. Stats Section Intersection for count-up triggers
  statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startStatsCounter()
      }
    })
  }, {
    threshold: 0.25
  })

  if (statsSection.value) {
    statsObserver.observe(statsSection.value)
  }

  // 4. Testimonials autoslide
  testimonialInterval = setInterval(() => {
    nextTestimonial()
  }, 7500)
})

onBeforeUnmount(() => {
  scrollSpyObserver?.disconnect()
  statsObserver?.disconnect()
  revealObserver?.disconnect()
  if (testimonialInterval) {
    clearInterval(testimonialInterval)
  }
})
</script>

<style scoped>
.menuLink {
  position: relative;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #475569;
  border-bottom: 2px solid transparent;
  transition: color 250ms ease, border-color 250ms ease;
}

.menuLink:hover {
  color: #0505D9;
}

.socialBtnHero {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  color: #64748b;
  transition: transform 200ms ease, background-color 200ms ease, color 200ms ease;
}

.socialBtnHero:hover {
  transform: translateY(-2px);
}

.logoStage {
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 180ms ease-out;
}

.logoMain {
  transform: translateZ(30px);
  transition: transform 250ms ease-out;
}

.logoStage:hover .logoMain {
  transform: translateZ(50px) scale(1.05);
}

.sectionTag {
  position: relative;
  width: fit-content;
  padding: 0.5rem 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.7rem;
  font-weight: 800;
  border: 1.5px solid rgba(5, 5, 217, 0.25);
  border-radius: 4px;
}

.sectionTag span {
  position: relative;
}

.contactFlipContainer {
  position: relative;
  width: 100%;
  min-height: 460px;
  perspective: 1500px;
  transform-style: preserve-3d;
}

.contactFlipFront,
.contactFlipBack {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.contactFlipFront {
  transform: rotateY(0deg);
  z-index: 2;
}

.contactFlipBack {
  transform: rotateY(180deg);
  z-index: 1;
}

.contactFlipContainer.flipped .contactFlipFront {
  transform: rotateY(-180deg);
  z-index: 1;
}

.contactFlipContainer.flipped .contactFlipBack {
  transform: rotateY(0deg);
  z-index: 2;
}

.formInput {
  display: block;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  padding: 0.65rem 0.9rem;
  font-size: 0.85rem;
  color: #0b132b;
  outline: none;
  transition: all 200ms ease;
}

.formInput:focus {
  border-color: #0505D9;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(5, 5, 217, 0.12);
}

.formTextarea {
  font-family: inherit;
  resize: none;
  height: 96px;
}

.footerTitle {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.footerList {
  display: grid;
  gap: 0.6rem;
  color: #94a3b8;
}

/* Modal Vue Transitions styling */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1023px) {
  .heroRight {
    min-height: 380px;
  }
}

@media (max-width: 767px) {
  .contactFlipContainer {
    min-height: 500px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll,
  .logoStage,
  .logoMain,
  .contactFlipFront,
  .contactFlipBack {
    transition: none !important;
    transform: none !important;
    animation: none !important;
    opacity: 1 !important;
  }
}
</style>
