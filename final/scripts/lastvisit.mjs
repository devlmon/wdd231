const STORAGE_KEY = 'lastVisit';

function getMessageForLastVisit(lastVisit) {
    if (!lastVisit) {
        return 'Welcome to Games for Your Enjoyment!';
    }

    const now = new Date();
    const last = new Date(lastVisit);
    const diffMs = now - last;
    const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));

    if (diffDays === 0) {
        return 'Back already? I have more recommendations of awesome games for you!';
    }
    else if (diffDays > 0 && diffDays < 7) {
        return "Have you finished your last game? Let's find one that will blow your mind!";
    }
    else {
        return "Ready for your next video game adventure? Let's find a new challenge to conquer!";
    }
}

function modalStructure(modalMessage) {
    const modal = document.createElement('div');

    modal.className = 'last-visit-modal';
    modal.innerHTML = `
    <div class="modal-content" role="dialog" aria-live="polite">
      <p class="modal-message">${modalMessage}</p>
      <button class="modal-close" aria-label="Close message">×</button>
    </div>
  `;
    modal.querySelector('.modal-close').addEventListener('click', () => hideModal(modal));

    document.body.appendChild(modal);

    // Auto-hide after a short while
    setTimeout(() => hideModal(modal), 6000);
}

function hideModal(modal) {
    modal.classList.add('modal-hidden');
    // remove after animation
    setTimeout(() => modal.remove(), 400);
}

function createModal() {
    try {
        const lastVisitStored = localStorage.getItem(STORAGE_KEY);
        const message = getMessageForLastVisit(lastVisitStored);
        modalStructure(message);
    } catch (err) {
        // localStorage may be disabled - still show a welcome message
        modalStructure('Welcome!');
    } finally {
        localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    }
}

export { createModal };
