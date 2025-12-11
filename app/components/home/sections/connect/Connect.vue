<script lang="ts" setup>
import SocialMediaButton from './SocialMediaButton.vue';
import { Instagram, Linkedin, GithubCircle, SendMail, Copyright } from '@iconoir/vue';
import ConnectMarquee from './ConnectMarquee.vue';
</script>

<template>
  <section class="connect">
    <div class="connect__grid"></div>
    <div class="connect__section">
      <ConnectMarquee />
      <div class="connect__container">
        <div class="connect__content">
          <h2 class="connect__heading">Just want to be fwiends :)</h2>
          <SocialMediaButton to="https://www.instagram.com/ardy_putrautama">
            <template #icon>
              <Instagram />
            </template>
            Follow my IG
          </SocialMediaButton>
          <SocialMediaButton to="https://www.linkedin.com/in/ardy-putra-utama/">
            <template #icon>
              <Linkedin />
            </template>
            Connect my LinkedIn
          </SocialMediaButton>
          <SocialMediaButton to="https://github.com/ardyutama">
            <template #icon>
              <GithubCircle />
            </template>
            Follow my Github
          </SocialMediaButton>
          <SocialMediaButton to="mailto:ardy.putrautama53@gmail.com" style="margin-top: 24px;">
            <template #icon>
              <SendMail />
            </template>
            Say Hello to my Email
          </SocialMediaButton>
        </div>
      </div>
      <div class="connect__copyright-footer">
            <Copyright />
            <h4>2025 Ardy Putra Utama</h4>
          </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$background-black-shadow: rgb(from var(--text-main) r g b / 10%);

.connect {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: var(--bg-accent);

  &__section {
    display: flex;
    flex: 1;
    flex-direction: column;
    z-index: 20;
  }

  &__container {
    padding: var(--padding-section-x) var(--padding-section-y);
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__grid {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: linear-gradient(to right, $background-black-shadow 1px, transparent 1px), linear-gradient(to bottom, $background-black-shadow 1px, transparent 1px);
    background-size: 80px 80px;
    margin: 0 auto;
  }

  &__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--gap-lg);
    max-width: var(--container-max-width-sm);
  }

  &__heading {
    text-align: center;
  }

  &__copyright-footer {
    padding: 16px;
    display: inline-flex;
    justify-content: center;
    background-color: var(--bg-orange);
    align-items: center;
    color: $token-white;
    gap: $space-xs;

    h4 {
      margin-bottom: 0;
    }
  }
}
</style>