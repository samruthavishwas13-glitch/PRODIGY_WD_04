// Cursor Follower
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Simple Alert for CTA
document.getElementById('msgBtn').addEventListener('click', () => {
    alert("Email: samrutha.v@example.com\nLinkedIn: Samrutha V");
});