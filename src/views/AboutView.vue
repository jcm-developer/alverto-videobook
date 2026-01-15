<script setup>
import { ref } from 'vue'

// Form state
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  submitSuccess.value = true
  isSubmitting.value = false
  // Reset form
  formData.value = { name: '', email: '', subject: '', message: '' }
  // Hide success message after 3 seconds
  setTimeout(() => { submitSuccess.value = false }, 3000)
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
          <router-link to="/about" class="nav-link active">Sobre mí</router-link>
        </div>
      </nav>

      <!-- About Content -->
      <main class="about-container">
        <div class="about-grid">
          <!-- Photo Section -->
          <div class="photo-section">
            <div class="profile-photo-wrapper">
              <img src="@/assets/book-optimized/DSC01290.jpg" alt="Alverto Díaz" class="profile-photo">
            </div>
            <!-- Social Links -->
            <div class="social-links">
              <a href="https://www.instagram.com/alvertodiaz_/" target="_blank" class="social-link" title="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="mailto:alvertodiazact@gmail.com" class="social-link" title="Email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a href="#" target="_blank" class="social-link cv-link" title="Currículum">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Contact Form Section -->
          <div class="form-section">
            <h1 class="section-title">Contacto</h1>
            <p class="section-subtitle">¿Tienes un proyecto en mente? Me encantaría saber de ti.</p>

            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <input v-model="formData.name" type="text" placeholder="Nombre" required class="form-input">
              </div>
              <div class="form-group">
                <input v-model="formData.email" type="email" placeholder="Email" required class="form-input">
              </div>
              <div class="form-group">
                <input v-model="formData.subject" type="text" placeholder="Asunto" required class="form-input">
              </div>
              <div class="form-group">
                <textarea v-model="formData.message" placeholder="Mensaje" required rows="5"
                  class="form-input form-textarea"></textarea>
              </div>
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
              </button>
              <Transition name="fade">
                <p v-if="submitSuccess" class="success-message">
                  ✓ Mensaje enviado correctamente
                </p>
              </Transition>
            </form>
          </div>
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

/* About Container */
.about-container {
  padding: 40px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

/* Photo Section */
.photo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.profile-photo-wrapper {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.profile-photo {
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f5f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  transition: all 0.2s;
}

.social-link:hover {
  background: #1a1a1a;
  color: #fff;
  transform: translateY(-2px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Form Section */
.form-section {
  padding-top: 20px;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 16px;
  color: #666;
  margin: 0 0 32px 0;
  line-height: 1.5;
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #e5e5e7;
  border-radius: 12px;
  font-size: 15px;
  font-family: inherit;
  background: #f5f5f7;
  transition: all 0.2s;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #0071e3;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.1);
}

.form-input::placeholder {
  color: #86868b;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  padding: 14px 28px;
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.submit-btn:hover:not(:disabled) {
  background: #333;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  color: #28c840;
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0 0 0;
}

/* Transitions */
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
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .photo-section {
    order: -1;
  }
}

@media (max-width: 600px) {
  .about-container {
    padding: 20px;
  }

  .section-title {
    font-size: 26px;
  }

  .nav-links {
    gap: 16px;
  }

  .nav-link {
    font-size: 12px;
  }
}
</style>
