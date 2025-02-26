// Check if user is logged in
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/check-auth', {
            credentials: 'include'
        });
        
        if (!response.ok) {
            window.location.href = '/';
            return;
        }

        const data = await response.json();
        document.getElementById('user-name').textContent = `Welcome, ${data.name}`;
        
    } catch (error) {
        console.error('Auth check failed:', error);
        window.location.href = '/';
    }
});

// Handle logout
async function handleLogout() {
    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            credentials: 'include'
        });

        if (response.ok) {
            window.location.href = '/';
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
}

// Add these functions to handle music player controls
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.player-controls .fa-play');
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
        } else {
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
        }
        isPlaying = !isPlaying;
    });
});
