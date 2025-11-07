
---

### **Project Blueprint: Ardy Putra 2025 Portfolio**

#### 1. Core Purpose & Goals

* **Purpose:** To serve as the primary professional hub for Ardy Putra, a software engineer. This site is a high-fidelity digital resume designed to convert visitors (recruiters, peers, clients) into professional contacts.
* **Primary Goal:** To establish technical credibility and a clear, confident design sensibility. The site must be performant, content-focused, and highly polished.
* **Secondary Goals:**
    * **Funnel:** Drive users to key actions: View Works, Download Resume, View GitHub/LinkedIn, or Send Email.
    * **Brand:** Create a memorable personal brand that is technical, clean, and modern.
    * **Showcase:** Demonstrate skill through the site's own construction, fluid motion, and snappy performance.

#### 2. Design Language & Aesthetic

* **Core Style:** A modern, content-first aesthetic inspired by **neo-brutalism's** honesty. This means prioritizing clarity, structure, and hierarchy.
* **Guiding Principles:**
    * **Clarity:** The user should never be confused. Function dictates form.
    * **Structure:** Layouts are built on a strict grid and spacing system, managed by Sass tokens and exposed as CSS variables (e.g., `--gap-md`, `--padding-section-y`).
    * **High Contrast:** We use the clean, limited color palette (defined as CSS variables like `--bg-main` and `--text-main`) to ensure text is always readable and CTAs are obvious.
    * **Typography as Design:** Type is a primary design element. We are leveraging the established two-font system (`--font-family-heading` and `--font-family-body`) and the responsive modular type scale (defined in `_variables.scss` and `main.scss`) to create a strong, consistent visual hierarchy.

#### 3. Core Interaction & Motion Language

Motion is the key to making the site feel premium. All animations will be handled by `anime.js` for full control.

* **Macro-Interaction (Page):** The snap-scroll between panels must be precise and smooth.
* **Micro-Interaction (Hover):**
    * **Buttons:** On hover, provide instant, tactile feedback. This could be a color swap, or a "press" effect by animating the `transform` of the button and its `box-shadow`.
    * **Cards (`ExperienceCard.vue`, Project Cards):** On hover, use a subtle "lift" effect. Animate `transform: translateY(-4px)` and a slight change in the `box-shadow`.
* **Micro-Interaction (Load):**
    * **Staggering:** All list-based content (Projects, Experience bullets, Social Buttons) *must* stagger-load as they enter the viewport.
    * **Animation Detail:** Use `anime.js` to animate both `opacity` and `translateY` (e.g., from `[0, 20px]` to `[1, 0]`) with an `easeOutQuart` easing function for a polished feel.
* **Ambient Motion (Loop):**
    * **Marquee:** The `ConnectMarquee.vue` must be a flawless, seamless, and performant infinite loop.

#### 4. Feature Breakdown by Component

* **Global (`Header.vue`)**
    * **Feature:** A sticky header with a clean 1px border (`--border-main`).
    * **Feature:** Full-screen navigation menu. When triggered, it should animate in smoothly (`anime.js`) with a solid background and clear, bold links using `--font-size-nav`.

* **Panel 1: Hero (`sections/Hero.vue`)**
    * **Feature:** Animated tagline (stagger-load by word or line) using `--font-size-h1`.
    * **Feature:** Optimized profile image using `@nuxt/image` for performance.
    * **Feature:** Clear Call-to-Action (CTA) hierarchy using `HeroButton.vue`. "View My Works" should be the primary, most visually distinct button.

* **Panel 2: Projects (`sections/Projects.vue`)**
    * **Feature:** Staggered Project Grid. Cards will be clean, structured (`--border-radius-card`), and use the hover-lift effect.
    * **Feature:** **Case Study Modals.** Clicking "See full case study" must open a modal (or a new page) that tells a compelling story:
        1.  **The Problem:** What was the goal?
        2.  **My Solution:** What tech did I use and *why*?
        3.  **The Outcome:** Show screenshots, a live link, or a video.

* **Panel 3: Experience (`sections/Experiences.vue`)**
    * **Feature:** Interactive `ExperienceCard.vue`.
    * **Feature:** "What I've done" toggle.
    * **Detail:** Clicking this must smoothly animate the `height` of the card (using `anime.js`) to reveal bullet points of achievements. These bullet points should also stagger-load.

* **Panel 4: Connect (`sections/Connect.vue`)**
    * **Feature:** High-contrast final "Connect" panel using `--bg-accent` to serve as a powerful final CTA.
    * **Feature:** The seamless `ConnectMarquee.vue`.
    * **Feature:** A grid of `SocialMediaButton.vue` components, each with a clear icon (`@iconoir/vue`) and tactile hover micro-interaction.

#### 5. Technical & Performance Goals

* **Stack:** Nuxt 4 (Vue 3), Sass (with its token-based architecture feeding CSS variables), `anime.js`, `@nuxt/image`, `@nuxtjs/google-fonts` (to serve the `--font-family-heading` and `--font-family-body` fonts), `@iconoir/vue`.
* **Performance:** Target a 95+ Lighthouse score. All assets must be optimized. Images served by `@nuxt/image` with correct `format` and `sizes`.
* **Accessibility (a11y):** The site must be fully keyboard-navigable. All images must have `alt` tags, and color contrast must meet WCAG AA standards.
* **SEO:** Full `useHead` implementation in `pages/index.vue` for title, description, and Open Graph (OG) tags for perfect link previews on social media.

---