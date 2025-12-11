// scripts for index.html
import { navButton } from './navigation.mjs';
import { today } from './getdates.mjs';
import { createModal } from './lastvisit.mjs';

// Run on module load
document.addEventListener('DOMContentLoaded', () => {
    createModal();
});