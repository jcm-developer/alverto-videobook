<script setup>
import { ref } from 'vue'

// Import optimized photos (compressed from ~150MB to ~690KB total)
import photo1 from '@/assets/book-optimized/DSC01136.jpg'
import photo2 from '@/assets/book-optimized/DSC01290.jpg'
import photo3 from '@/assets/book-optimized/DSC01324.jpg'
import photo4 from '@/assets/book-optimized/DSC01354.jpg'
import photo5 from '@/assets/book-optimized/DSC01412.jpg'
import photo6 from '@/assets/book-optimized/DSC01453.jpg'
import photo7 from '@/assets/book-optimized/DSC01472.jpg'
import photo8 from '@/assets/book-optimized/DSC01552.jpg'
import photo9 from '@/assets/book-optimized/DSC01584.jpg'
import photo10 from '@/assets/book-optimized/DSC01624.jpg'
import photo11 from '@/assets/book-optimized/DSC01688.jpg'

// Photos array - CSS columns will handle the masonry layout automatically
const photos = [
    photo1, photo2, photo3, photo4, photo5, photo6,
    photo7, photo8, photo9, photo10, photo11
]

// Lightbox state
const lightboxOpen = ref(false)
const currentPhoto = ref(null)

const openLightbox = (photo) => {
    currentPhoto.value = photo
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
    lightboxOpen.value = false
    currentPhoto.value = null
    document.body.style.overflow = ''
}
</script>

<template>
    <div class="portfolio-page">
        <!-- Main Container - MacBook Window Style -->
        <div class="window-container">
            <!-- Window bar with dots -->
            <div class="window-bar">
                <div class="window-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                </div>
            </div>

            <!-- Navigation Menu -->
            <nav class="nav">
                <img src="@/assets/logo.png" alt="" class="logo">
                <div class="nav-links">
                    <router-link to="/" class="nav-link">Book</router-link>
                    <router-link to="/videobook" class="nav-link">Videobook</router-link>
                    <router-link to="/about" class="nav-link">Sobre mí</router-link>
                </div>
            </nav>

            <!-- Main Content - Masonry Style (CSS Columns) -->
            <main class="masonry-grid">
                <div v-for="(photo, index) in photos" :key="index" class="photo-card"
                    @click="openLightbox({ src: photo })">
                    <img :src="photo" :alt="'Photo ' + (index + 1)" class="photo" loading="lazy">
                </div>
            </main>
        </div>

        <!-- Lightbox Overlay -->
        <Transition name="fade">
            <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
                <button class="lightbox-close" @click.stop="closeLightbox">×</button>
                <img :src="currentPhoto?.src" alt="Full size photo" class="lightbox-image" @click.stop>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
/* Portfolio Page Styles */
.portfolio-page {
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
}

/* Window Container - MacBook Window Style */
.window-container {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

/* Window bar with dots */
.window-bar {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

/* MacBook Window Dots */
.window-dots {
    display: flex;
    gap: 8px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.dot.red {
    background: #ff5f57;
}

.dot.yellow {
    background: #febc2e;
}

.dot.green {
    background: #28c840;
}

/* Navigation */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
}

.logo {
    width: 100px;
    object-fit: cover;
}

.nav-links {
    display: flex;
    gap: 32px;
}

.nav-link {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;
}

.nav-link:hover,
.nav-link.active,
.nav-link.router-link-exact-active {
    color: #1a1a1a;
}

/* Masonry Grid using CSS Columns - No gaps! */
.masonry-grid {
    column-count: 3;
    column-gap: 16px;
    padding: 20px;
}

/* Photo Cards */
.photo-card {
    break-inside: avoid;
    margin-bottom: 16px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-card:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.photo {
    width: 100%;
    height: auto;
    display: block;
}

/* Lightbox Overlay */
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    padding: 40px;
}

.lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 48px;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
    z-index: 1001;
}

.lightbox-close:hover {
    opacity: 1;
}

.lightbox-image {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    cursor: default;
}

/* Lightbox transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Responsive */
@media (max-width: 900px) {
    .masonry-grid {
        column-count: 2;
    }
}

@media (max-width: 600px) {
    .portfolio-page {
        padding: 12px;
    }

    .masonry-grid {
        column-count: 1;
    }

    .nav-links {
        gap: 16px;
    }

    .nav-link {
        font-size: 12px;
    }

    /* Lightbox mobile fixes */
    .lightbox {
        padding: 10px;
        align-items: center;
        justify-content: center;
    }

    .lightbox-image {
        max-width: 95%;
        max-height: 80vh;
        margin: auto;
    }

    .lightbox-close {
        top: 10px;
        right: 15px;
        font-size: 36px;
    }
}
</style>
