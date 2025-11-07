
---

### **Project Blueprint: Ardy Putra 2025 Portfolio (Final)**

#### 1. Core Purpose & Goals

* **Purpose:** To serve as the primary professional hub for Ardy Putra, a software engineer. This site is a high-fidelity digital resume designed to convert visitors (recruiters, peers, clients) into professional contacts.
* **Primary Goal:** To establish immediate technical credibility and a bold, confident design sensibility. The site's *raw feel* is as important as its content.
* **Secondary Goals:**
    * **Funnel:** Drive users to one of four key actions: 1) View Works, 2) Download Resume, 3) View GitHub/LinkedIn, or 4) Send Email.
    * **Brand:** Create a memorable personal brand that is bold, technical, and unapologetically digital.
    * **Showcase:** Not just *list* projects, but *demonstrate* skill through the site's own construction, stark motion, and performance.

#### 2. Design Language & Aesthetic

* **Core Style: "Neo-Brutalism."** This design is honest, raw, and opinionated. It celebrates the "digital-ness" of the medium.
    * **No Fakes:** We use hard, 1-2px solid `box-shadow`s (e.g., `4px 4px 0 $token-black`) or none at all. Forget soft shadows, gradients, or blurs.
    * **High-Contrast:** We're dealing in absolutes. Text is `$token-black` on `$token-gray-light` or `$token-white`.
    * **Raw Components:** Buttons and cards are simple, blocky rectangles with hard `1px` borders. Their function is their form.
    * **Bold Typography:** Type is a primary design element. It's big, it's structured, and it has authority.
* **Inspiration:** Figma's branding, Linear, and other modern brutalist-inspired tech sites.
* **Layout Model:** A four-panel "page" system.
    * **Desktop:** Horizontal snap-scroll (panels are `100vw` / `100vh`).
    * **Mobile:** Reflows to a vertical snap-scroll (panels are `100vw` / `100vh`).
* **Color Palette (Source of Truth):**
    * `$token-blue: #0368FC` (Primary CTA, links, hover states)
    * `$token-black: #111827` (Text, borders, hard shadows, UI elements)
    * `$token-yellow: #F0DB4F` (High-energy accent, likely for Panel 4)
    * `$token-gray-light: #F4F4F0` (Primary light background for Panels 1-3)
    * `$token-orange: #FCA503` (Secondary accent or CTA)
    * `$token-white: #FFFFFF` (Card backgrounds, or alternate light panel)
* **Visual Motifs:**
    * **Wavy Grid:** `wavy-grid-bg.svg` will provide a great textural contrast to the hard-edged components.
    * **Icons:** `Iconoir` icons, used cleanly and functionally.

#### 3. Core Interaction & Motion Language

This is where the neo-brutalist style comes alive. Motion is smooth (`anime.js`), but the *visual feedback* is stark and immediate.

* **Macro-Interaction (Page):** The "snap-scroll" between the four panels. This should be a clean, precise, and non-bouncy transition.
* **Micro-Interaction (Hover):**
    * **Buttons:** On hover, effects are instant. No soft fades.
        * **Option 1 (Color Swap):** Instantly swap `background-color` and `color`.
        * **Option 2 (Push):** Instantly apply `transform: translate(2px, 2px)` and shift its hard shadow.
    * **Cards:** On hover, apply a hard `2px` border in `$token-blue`. Or, use `transform: translate(-4px, -4px)` against a hard shadow to create a "lifting" effect.
* **Micro-Interaction (Load):**
    * **Staggering:** All lists (Projects, Experience, Social Buttons) *must* stagger-load as they enter the viewport. Use `anime.stagger(100)` to fade/slide them in one by one. This contrast of smooth motion on raw components is the key.
* **Ambient Motion (Loop):**
    * **Marquee:** The `ConnectMarquee.vue` ("LETS CONNECT") must be a flawless, seamless infinite loop.

#### 4. Feature Breakdown by Component

* **Global (`Header.vue`)**
    * **Feature:** Sticky Header with a hard `1px` bottom border in `$token-black`.
    * **Feature:** Full-Screen Navigation.
    * **Detail:** Clicking the hamburger menu triggers a full-screen overlay (animating in *fast* with `anime.js`) with a solid `$token-black` background and bold, white links.

* **Panel 1: Hero (`sections/Hero.vue`)**
    * **Feature:** Animated Tagline. Text is large and in `$token-black`.
    * **Feature:** Optimized Profile Image.
    * **Feature:** High-Priority CTAs.
    * **Detail:** "View My Works" (`HeroButton.vue`) is a blocky rectangle, likely using `$token-blue` for primary emphasis. "Get in Touch" and "My Resume" are secondary, perhaps with just a hard border.

* **Panel 2: Projects (`sections/Projects.vue`)**
    * **Feature:** Staggered Project Grid.
    * **Detail:** Project cards are simple rectangles (`$token-white`) on the `$token-gray-light` background. They each have a standard `1px $token-black` border and a hard `box-shadow` (e.g., `4px 4px 0 $token-black`).
    * **Feature:** Case Study Links.
    * **Enrichment:** "See full case study" must open a **Modal** (or new page). This modal will be a stark, hard-shadowed panel detailing:
        1.  **The Problem:** What was the goal?
        2.  **My Solution:** What tech did I use?
        3.  **The Outcome:** Show screenshots, a live link, or a video.

* **Panel 3: Experience (`sections/Experiences.vue`)**
    * **Feature:** Interactive Experience Card (`ExperienceCard.vue`).
    * **Detail:** Same brutalist card styling as projects.
    * **Feature:** "What I've done" Dropdown.
    * **Detail:** Clicking this smoothly animates the `height` of the card to reveal bullet points of your achievements.

* **Panel 4: Connect (`sections/Connect.vue`)**
    * **Feature:** High-Contrast "Connect" Panel.
    * **Detail:** This panel's background *must* be `$token-yellow` to act as the final, high-energy call to action. The `wavy-grid-bg.svg` can be layered here (perhaps in `$token-black` at 10% opacity).
    * **Feature:** Animated `ConnectMarquee.vue`.
    * **Feature:** Social Button Grid (`SocialMediaButton.vue`).
    * **Detail:** A grid of large, blocky, black-bordered buttons.

#### 5. Technical & Performance Goals

* **Stack:** Nuxt 4 (Vue 3), Sass, `anime.js`, `@nuxt/image`.
* **Performance:** Target a 95+ Lighthouse score. All assets optimized, all images served by `@nuxt/image`.
* **Responsiveness:** Must be 100% mobile-first. The 4-panel layout must stack vertically and remain fully usable.
* **SEO & Meta:** Full `useHead` implementation in `pages/index.vue` for title, description, and Open Graph (OG) tags for perfect link previews.

---