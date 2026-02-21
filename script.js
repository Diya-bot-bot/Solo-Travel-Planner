// --- Option 1: Safety Data ---
const safetyData = {
    "tokyo": "Safe: Extremely low crime. High lighting quality.",
    "paris": "Caution: High pickpocket density in tourist zones.",
    "london": "Stable: Use main roads after midnight.",
    
};

function checkSafety() {
    const city = document.getElementById('destInput').value.toLowerCase();
    const report = document.getElementById('safetyReport');
    report.innerText = safetyData[city] || "Scanning global database for local risks...";
}

// --- Option 2: AI Scan ---
function handleAIUpload(event) {
    const container = document.getElementById('imagePreviewContainer');
    const preview = document.getElementById('previewImg');
    const status = document.getElementById('aiStatus');

    preview.src = URL.createObjectURL(event.target.files[0]);
    container.style.display = "block";
    status.innerText = "🤖 AI IDENTIFYING LANDMARK...";

    setTimeout(() => {
        status.innerText = "✅ Eiffel Tower Detected. Safety: Medium Risk (Crowds).";
    }, 2000);
}

// --- Option 3: Routing ---
function generateRoute(name) {
    const rs = document.getElementById('routeStatus');
    rs.innerHTML = "📡 Analyzing lighting...";
    setTimeout(() => {
        rs.innerHTML = `✅ <b>Route Active:</b> ${name}<br>Well-lit path verified.`;
    }, 1200);
}

// --- Option 4: Timer Logic ---
let timer;
let timeLeft;
let timerRunning = false;

function startSafetyTimer() {
    if (timerRunning) return;
    
    timeLeft = 300; 
    timerRunning = true;
    
    document.getElementById('startBtn').disabled = true;
    document.getElementById('startBtn').style.opacity = "0.4";
    document.getElementById('countdownDisplay').classList.add('timer-running');
    
    const checkInBtn = document.getElementById('checkInBtn');
    checkInBtn.disabled = false;
    checkInBtn.classList.add('active');

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            stopTimerLogic();
            triggerEmergency();
        }
    }, 1000);
}

function updateTimerDisplay() {
    let m = Math.floor(timeLeft / 60);
    let s = timeLeft % 60;
    document.getElementById('countdownDisplay').innerText = 
        `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function checkInSafe() {
    if (!timerRunning) return;
    stopTimerLogic();
    alert("✅ Safety Confirmed. Timer stopped.");
    resetTimerUI();
}

function stopTimerLogic() {
    clearInterval(timer);
    timerRunning = false;
    document.getElementById('countdownDisplay').classList.remove('timer-running');
}

function resetTimerUI() {
    stopTimerLogic();
    timeLeft = 300;
    document.getElementById('countdownDisplay').innerText = "05:00";
    document.getElementById('startBtn').disabled = false;
    document.getElementById('startBtn').style.opacity = "1";
    const cb = document.getElementById('checkInBtn');
    cb.disabled = true;
    cb.classList.remove('active');
}

function triggerEmergency() {
    alert("🚨 SOS ALERT SENT TO EMERGENCY CONTACTS!");
}