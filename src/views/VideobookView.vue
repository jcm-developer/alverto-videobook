<script setup>
import { ref, computed } from 'vue'

// TODO: Add video URL here (YouTube, Vimeo, or Google Drive)
// Example YouTube: 'https://www.youtube.com/embed/VIDEO_ID'
// Example Drive: 'https://drive.google.com/file/d/FILE_ID/preview'
const videoUrl = ref('')

const isEmbedVideo = computed(() => {
    return videoUrl.value.includes('youtube.com') ||
        videoUrl.value.includes('vimeo.com') ||
        videoUrl.value.includes('drive.google.com')
})

// Video state
const videoRef = ref(null)
const isPlaying = ref(false)
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

            <!-- Video Content -->
            <main class="video-container">
                <div class="video-wrapper">
                    <!-- Embedded video (YouTube/Vimeo) -->
                    <iframe v-if="isEmbedVideo" :src="videoUrl" class="video-player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <!-- Local video file -->
                    <video v-else-if="videoUrl" ref="videoRef" class="video-player" controls @play="isPlaying = true"
                        @pause="isPlaying = false">
                        <source :src="videoUrl" type="video/mp4">
                        Tu navegador no soporta el elemento de video.
                    </video>

                    <!-- Placeholder when no video -->
                    <div v-else class="video-placeholder">
                        <div class="placeholder-content">
                            <svg class="placeholder-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <p class="placeholder-text">Videobook próximamente</p>
                            <p class="placeholder-subtext">El video se está preparando</p>
                        </div>
                    </div>
                </div>
                <div class="video-info">
                    <h1 class="video-title">Videobook</h1>
                    <p class="video-description">
                        Muestra de trabajo actoral y diferentes registros interpretativos.
                    </p>
                </div>
            </main>
        </div>
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
.nav-link.router-link-active {
    color: #1a1a1a;
}

/* Video Container */
.video-container {
    padding: 40px;
}

.video-wrapper {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    background: #000;
}

.video-player {
    width: 100%;
    display: block;
    aspect-ratio: 16/9;
}

.video-info {
    text-align: center;
    margin-top: 32px;
}

.video-title {
    font-size: 28px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 12px 0;
    letter-spacing: -0.5px;
}

.video-description {
    font-size: 16px;
    color: #666;
    margin: 0;
    line-height: 1.6;
}

/* Video Placeholder */
.video-placeholder {
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.placeholder-content {
    text-align: center;
    color: #fff;
}

.placeholder-icon {
    width: 80px;
    height: 80px;
    opacity: 0.6;
    margin-bottom: 20px;
}

.placeholder-text {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 8px 0;
    opacity: 0.9;
}

.placeholder-subtext {
    font-size: 14px;
    margin: 0;
    opacity: 0.5;
}

/* Responsive */
@media (max-width: 768px) {
    .video-container {
        padding: 20px;
    }

    .video-title {
        font-size: 22px;
    }

    .nav-links {
        gap: 16px;
    }

    .nav-link {
        font-size: 12px;
    }
}
</style>
