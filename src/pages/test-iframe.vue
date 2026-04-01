<template>
  <div class="goux-cards-grid">
    <a href="https://www.canal-u.tv/node/105341" target="_blank" class="goux-video-card-link">
      <div class="goux-video-card">
        <div class="goux-video-container placeholder-v1">
          <div class="goux-play-overlay">
            <span class="play-icon">▶</span>
            <span class="play-text">Regarder sur Canal-U</span>
          </div>
        </div>
        <div class="goux-video-content">
          <h3 class="goux-video-title">1ère partie</h3>
          <p>Présentation du projet Archives de Mémoire de l’Enclave – Andrée Chauvin-Vileno (ELLIADD)...</p>
        </div>
      </div>
    </a>

    <a href="https://www.canal-u.tv/node/105345" target="_blank" class="goux-video-card-link">
      <div class="goux-video-card">
        <div class="goux-video-container placeholder-v2">
          <div class="goux-play-overlay">
            <span class="play-icon">▶</span>
            <span class="play-text">Regarder sur Canal-U</span>
          </div>
        </div>
        <div class="goux-video-content">
          <h3 class="goux-video-title">2ème partie</h3>
          <p>Conférence de Laurent Demanze (Grenoble, é.CRI.RE) « Extension du domaine de l’enquête »...</p>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
/* --- STRUCTURE --- */
.goux-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin: 40px 0;
  width: 100%;
}

.goux-video-card-link {
  text-decoration: none !important;
  color: inherit;
  display: block;
}

.goux-video-card {
  background: #fff;
  transition: transform 0.3s ease;
  height: 100%;
}

.goux-video-card-link:hover .goux-video-card {
  transform: translateY(-8px);
}

/* --- VISUELS --- */
.goux-video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000;
}

.placeholder-v1 {
  background: #000 url('https://www.canal-u.tv/sites/default/files/styles/video_poster/public/2022-12/105341.jpg') center/cover !important;
}

.placeholder-v2 {
  background: #000 url('https://www.canal-u.tv/sites/default/files/styles/video_poster/public/2022-12/105345.jpg') center/cover !important;
}

/* --- OVERLAY PLAY --- */
.goux-play-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.goux-video-card-link:hover .goux-play-overlay {
  background: rgba(26, 90, 102, 0.85);
}

.play-icon {
  font-size: 3rem;
  color: white;
  margin-bottom: 10px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.play-text {
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 0.75rem;
  text-transform: uppercase;
}

/* --- TEXTES --- */
.goux-video-content {
  padding: 15px 5px;
}

.goux-video-title {
  font-family: serif;
  font-size: 1.5rem;
  color: #1a5a66;
  margin: 0 0 10px 0 !important;
  font-weight: bold;
}

.goux-video-content p {
  font-family: sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
}
</style>
