<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

const tagThemes: Record<string, string> = {
  'vue': '#42b883',   
  'nuxt': '#00DC82',
  'react': '#61DAFB',
  'angular': '#FF5555',
  'svelte': '#FF3E00',
  'next': '#FFFFFF',
  'inertia.js': '#9553E9',
  
  'tailwindcss': '#38B2AC',
  'sass': '#CC6699',
  'scss': '#CC6699',
  
  'typescript': '#3178C6',
  'javascript': '#F7DF1E',
  'go': '#00ADD8',
  'golang': '#00ADD8',
  'php': '#9999CC', 
  'java': '#ED8B00',
  'python': '#FFD43B',
  
  'laravel': '#FF2D20',
  'node': '#339933',
  'mysql': '#4479A1',
  'sql': '#00758F',
  'kafka': '#007396',
  'cassandra': '#1287B1',
  'docker': '#2496ED',
  'aws': '#FF9900',
  'firebase': '#FFCA28',
  'supabase': '#3ECF8E',

  'big data': '#9B59B6',
  'figma': '#F24E1E',
  'spotify': '#1DB954',
  'oauth': '#4285F4',
  'performance': '#F1C40F',
  'seo': '#8E44AD',
  'cms': '#1ABC9C',
};

const getTagColor = (originalLabel: string) => {
  const lower = originalLabel.toLowerCase();
  if (tagThemes[lower]) return tagThemes[lower];
  
  return '#E0E0E0'; 
};

const computedStyle = computed(() => {
  const bgColor = getTagColor(props.label);
  return {
    backgroundColor: bgColor,
  };
});
</script>

<template>
  <span class="tech-tag" :style="computedStyle">
    {{ label }}
  </span>
</template>

<style lang="scss" scoped>
.tech-tag {
  display: inline-block;
  padding: 4px 10px;
  
  font-family: var(--font-family-heading);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  color: var(--text-main); 
  border: 2px solid var(--text-main);
  border-radius: 4px; 
  
  box-shadow: 3px 3px 0px 0px var(--text-main);
  
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
  
  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0px 0px var(--text-main);
  }
}
</style>