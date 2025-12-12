<script setup lang="ts">
const { $animate, $stagger, $animeUtils } = useNuxtApp();

useHead({
    title: 'About Me - Ardy Putra',
    meta: [
        { name: 'description', content: 'About Ardy Putra' }
    ]
})

onMounted(() => {
    const quoteTitle = document.querySelector('.about-me__quote-title');
    if (quoteTitle && quoteTitle.textContent) {
        const text = quoteTitle.textContent.trim();
        const words = text.split(' ');
        quoteTitle.innerHTML = words.map(word => `<span class="quote-word" style="display:inline-block;">${word}&nbsp;</span>`).join('');
    }

    $animeUtils.set('.about-me__hero-visual', {
        scale: 0.8,
        rotate: -5,
        opacity: 0
    });

    $animeUtils.set('.about-me__back-cta', {
        scale: 0,
        opacity: 0,
        rotate: 15
    });

    $animeUtils.set('.quote-word', { opacity: 0, translateY: 20, rotate: 10 });
    $animeUtils.set('.about-me__quote-subtitle', { opacity: 0, translateX: -20 });
    $animeUtils.set('.about-me__content p', { opacity: 0, translateY: 30 });
    $animeUtils.set('.about-me__showcase', { opacity: 0, scale: 0.9, rotate: 2 });
    $animeUtils.set('.about-me__cta', { opacity: 0, translateY: 50 });

    $animate('.about-me__hero-visual', {
        scale: [0.8, 1],
        opacity: [0, 1],
        rotate: [-5, 0],
        duration: 1000,
        ease: 'outElastic(1, .6)',
        delay: 200
    });

    $animate('.about-me__back-cta', {
        scale: [0, 1],
        opacity: [0, 1],
        rotate: [15, -5],
        duration: 800,
        ease: 'outElastic(1, .5)',
        delay: 800
    });

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                if (target.classList.contains('about-me__quote')) {
                    $animate('.quote-word', {
                        opacity: [0, 1],
                        translateY: [20, 0],
                        rotate: [10, 0],
                        duration: 800,
                        delay: $stagger(100),
                        ease: 'outBack'
                    });
                    $animate('.about-me__quote-subtitle', {
                        opacity: [0, 1],
                        translateX: [-20, 0],
                        duration: 800,
                        delay: 600,
                        ease: 'out(3)'
                    });
                } else if (target.tagName.toLowerCase() === 'p') {
                    $animate(target, {
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        ease: 'out(3)'
                    });
                } else if (target.classList.contains('about-me__showcase')) {
                    $animate(target, {
                        opacity: [0, 1],
                        scale: [0.9, 1],
                        rotate: [2, 0],
                        duration: 1000,
                        ease: 'outElastic(1, .8)'
                    });
                } else if (target.classList.contains('about-me__cta')) {
                    $animate(target, {
                        opacity: [0, 1],
                        translateY: [50, 0],
                        duration: 800,
                        ease: 'out(3)'
                    });
                }

                observer.unobserve(target);
            }
        });
    }, observerOptions);

    const elementsToObserve = [
        document.querySelector('.about-me__quote'),
        ...document.querySelectorAll('.about-me__content p'),
        document.querySelector('.about-me__showcase'),
        document.querySelector('.about-me__cta')
    ];

    elementsToObserve.forEach(el => {
        if (el) observer.observe(el);
    });
});
</script>

<template>
    <div class="about-me">
        <div class="about-me__bg">
            <div class="about-me__grid-bg"></div>
            <div class="about-me__bg-mask"></div>
        </div>
        <div class="about-me__container">
            <NuxtLink to="/" class="about-me__hero">
                <div class="about-me__back-cta">
                    Back
                </div>
                <div class="about-me__hero-visual">
                    <div class="about-me__hero-container">
                        <img src="/images/hero-image-flower-2.svg" alt="" class="about-me__hero-bg" />
                        <NuxtImg src="/images/ardy-putra-photo-2.png" alt="Ardy Putra" class="about-me__hero-photo"
                            format="webp" />
                    </div>
                </div>
            </NuxtLink>

            <section class="about-me__quote">
                <h2 class="about-me__quote-title">“les voyages forment la jeunesse”</h2>
                <p class="about-me__quote-subtitle">- travel broadens the mind.</p>
            </section>

            <div class="about-me__content">
                <p>
                    Beatiful phrases from French that suits for who I am and what am I do
                    in life that travel to explore the world, experiencing diverse culture,
                    and self development to ourself with open-mindedness.
                </p>
                <p>
                    And that part also shaped me to myself right now especially in the
                    career path. Curiosity to learn, experience different tools and scope,
                    also collaborate with many diverse culture people from many countries.
                </p>
                <p>
                    In 2024, I started my professional experiences at Hitachi Energy. it gives
                    me the privilege of multicultural collaboration with other countries.
                    I've also involved to the projects that not just makes my knowledge and
                    skills improved but also contributed to profitable projects.
                </p>
            </div>

            <div class="about-me__showcase">
                <NuxtImg src="/images/student-exchange.png" alt="Student Exchange group photo"
                    class="about-me__showcase-photo" />
            </div>

            <div class="about-me__content">
                <p>
                    Before I've involved in professional careers, I've also selected to be one
                    of the student exchange that going to the Germany through IISMAVO
                    programs in Indonesia. Being contributed to the countries where I
                    belong was also one of my proud that exchange cultures and see the new
                    whole perspective in another countries.
                </p>
                <p>
                    I'm still craved and want to learn more about the world as an engineer
                    that always hungry, evolving, and create creative solutions for myself
                    and for the society.
                </p>
            </div>

            <section class="about-me__cta">
                <h2 class="about-me__cta-title">Let’s collaborate and do some fun things to the worlds</h2>
                <NuxtLink to="mailto:ardy.putrautama53@gmail.com" class="about-me__cta-btn">
                    Let's Talk
                </NuxtLink>
            </section>

            <NuxtLink to="/" class="about-me__logo-link">
                <img src="/ardy-putra-logo.svg" alt="Ardy Putra Logo" class="about-me__logo" />
            </NuxtLink>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-me {
    display: flex;
    position: relative;

    &__bg {
        display: flex;
        position: absolute;
        flex: 1;
        width: 100%;
        height: 100%;
    }

    &__grid-bg {
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(to right, #e4e4e7 1px, transparent 1px),
            linear-gradient(to bottom, #e4e4e7 1px, transparent 1px);
        background-size: 40px 40px;
        z-index: 0;
        opacity: 0.5;
    }

    &__bg-mask {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--bg-main);

        mask-image: radial-gradient(ellipse at center, transparent 20%, black);
        -webkit-mask-image: radial-gradient(ellipse at center, transparent 20%, black);
    }

    &__container {
        padding: $space-lg $space-md;
        color: $token-black;
        font-family: $font-family-body;
        min-height: 100vh;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: $space-lg;
        z-index: 3;

        @media (min-width: $breakpoint-md) {
            max-width: 600px;
        }
    }

    &__hero {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: $space-md;
        position: relative;
        text-decoration: none;
        cursor: pointer;
        z-index: 2;
        /* Removed overflow hidden to let CTA pop out */

        &:hover {
            .about-me__hero-visual {
                transform: scale(1.02);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
            }
        }

        &-visual {
            background-color: $token-yellow;
            overflow: hidden;
            border-radius: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            width: 100%;
        }

        &-container {
            position: relative;
            width: 100%;
            max-width: 350px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            aspect-ratio: 4/3;
        }

        &-bg {
            position: absolute;
            width: 80%;
            height: auto;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.1);

            @include mq('sm') {
                width: 100%;
            }
        }

        &-photo {
            position: relative;
            z-index: 3;
            width: 80%;
            height: auto;
            display: block;
            margin-bottom: 0;

        }
    }

    &__quote {
        text-align: left;
        margin-bottom: $space-sm;
        z-index: 3;

        &-title {
            font-family: $font-family-heading;
            font-weight: 700;
            font-size: $font-size-xl;
            font-style: italic;
            margin-bottom: $space-xs;
            line-height: 1.2;
        }

        &-subtitle {
            font-style: italic;
            font-weight: 400;
            color: $token-gray-dark;
            font-size: $font-size-md;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: $space-md;
        z-index: 3;

        p {
            line-height: 1.6;
            font-size: $font-size-base;
            color: $token-black;
            font-weight: 700;
        }
    }

    &__showcase {
        width: 100%;
        border-radius: $space-lg;
        overflow: hidden;
        margin: $space-md 0;

        &-photo {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 24px;
            object-fit: cover;
        }
    }

    &__cta {
        text-align: center;
        margin-top: $space-xl;
        margin-bottom: $space-xl;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-title {
            font-family: $font-family-heading;
            font-weight: 700;
            font-size: $font-size-xl;
            margin-bottom: $space-xl;
            line-height: 1.3;
        }

        &-btn {
            display: inline-block;
            border: 3px solid $token-black;
            padding: $space-sm $space-xl;
            font-weight: 700;
            background-color: $token-white;
            color: $token-black;
            font-family: $font-family-heading;
            font-size: $font-size-lg;
            box-shadow: 6px 6px 0px 0px $token-black;
            transition: all 0.2s ease;

            &:hover {
                transform: translate(-2px, -2px);
                box-shadow: 8px 8px 0px 0px $token-black;
            }
        }
    }

    &__back-cta {
        position: absolute;
        top: -15px;
        left: -15px;
        background-color: #fff;
        border: 2px solid $token-black;
        padding: 8px 12px;
        color: $token-black;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.8rem;
        box-shadow: 4px 4px 0px 0px $token-black;
        z-index: 10;
        transform: rotate(-5deg);
        border-radius: 0px;
        white-space: nowrap;
        pointer-events: none;

        &::after {
            content: '';
            position: absolute;
            bottom: -6px;
            right: 15px;
            width: 10px;
            height: 10px;
            background-color: #fff;
            border-bottom: 2px solid $token-black;
            border-right: 2px solid $token-black;
            transform: rotate(45deg);
        }
    }

    &__logo-link {
        margin: $space-xl;
        align-self: center;
        display: flex;
        cursor: pointer;
        transition: transform 0.3s ease, opacity 0.3s ease;

        &:hover {
            transform: scale(1.1) rotate(5deg);
            opacity: 0.8;
        }
    }

    &__logo {
        width: 48px;
        height: auto;
    }
}
</style>
