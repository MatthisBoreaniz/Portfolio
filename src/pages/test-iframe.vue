<template>
<div class="goux-cards-grid">
    <div class="goux-video-card">
        <div class="goux-video-container">
            <iframe 
                src="https://www.canal-u.tv/node/105341/embed" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="goux-video-content">
            <h3 class="goux-video-title">1ère partie</h3>
            <p>Présentation du projet Archives de Mémoire de l’Enclave – Andrée Chauvin-Vileno (ELLIADD)</p>
            <p>Conférence de Corinne Grenouillet (Strasbourg, CERIEL) « Lire Les Mémoires de l’enclave (1986) de Jean-Paul Goux après 2003 »</p>
            <p>Table-ronde animée par Sandra Nossik et Yvon Houssais (ELLIADD) « Voix et récits »</p>
        </div>
    </div>

    <div class="goux-video-card">
        <div class="goux-video-container">
            <iframe 
                src="https://www.canal-u.tv/node/105345/embed" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="goux-video-content">
            <h3 class="goux-video-title">2ème partie</h3>
            <p>Conférence de Laurent Demanze (Grenoble, é.CRI.RE) « Extension du domaine de l’enquête »</p>
            <p>Table-ronde animée par Odile Roynette et Pascal Lécroart (ELLIADD) « La rencontre entre Histoire et Littérature dans les Mémoires de l’Enclave »</p>
        </div>
    </div>
</div>

.goux-cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width: 1100px;
    margin: 40px auto;
    padding: 20px;
}

.goux-video-card {
    display: flex;
    flex-direction: column;
}

.goux-video-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; /* Garde le format vidéo standard */
    margin-bottom: 20px;
    background-color: #000;
    border-radius: 8px;
    overflow: hidden;
}

.goux-video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.goux-video-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 10px !important;
}

.goux-video-content p {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 10px;
    color: #333;
}

@media (max-width: 768px) {
    .goux-cards-grid {
        grid-template-columns: 1fr;
    }
}
</template>

<style>
.goux-cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width: 1100px;
    margin: 40px auto;
    padding: 20px;
}

.goux-video-card {
    display: flex;
    flex-direction: column;
}

.goux-video-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; /* Garde le format vidéo standard */
    margin-bottom: 20px;
    background-color: #000;
    border-radius: 8px;
    overflow: hidden;
}

.goux-video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.goux-video-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 10px !important;
}

.goux-video-content p {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 10px;
    color: #333;
}

@media (max-width: 768px) {
    .goux-cards-grid {
        grid-template-columns: 1fr;
    }
}
<style>
