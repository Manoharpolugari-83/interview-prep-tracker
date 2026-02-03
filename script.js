// Your entire original <script> content goes here — exactly the same
const PLAN_DATA = { /* ... all the 30 days data ... */ };

let appState = { /* ... */ };

// All functions (saveState, loadState, renderRealCalendar, etc.)
// ... (copy everything from your original <script> tag)

function init() {
    loadState();
    renderDayButtons();
    renderTasks(appState.currentDay);
    updateStats();
}

init();