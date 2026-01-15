<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* Reset global styles for portfolio */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Hide scrollbar */
html {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE/Edge */
}

html::-webkit-scrollbar {
  display: none;
  /* Chrome/Safari/Opera */
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #e8e8ed;
  position: relative;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', sans-serif;
}

/* Static gradient background (optimized - no animation) */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background:
    radial-gradient(circle at 20% 20%, rgba(124, 106, 239, 0.25) 0%, transparent 50%),
    radial-gradient(circle at 80% 30%, rgba(232, 197, 71, 0.2) 0%, transparent 45%),
    radial-gradient(circle at 40% 80%, rgba(40, 200, 64, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(255, 95, 87, 0.15) 0%, transparent 40%),
    linear-gradient(135deg, #e8e8ed 0%, #dddde5 100%);
}

/* Simplified background - no expensive blur */
body::after {
  content: none;
}

#app {
  max-width: none;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1;
}
</style>
