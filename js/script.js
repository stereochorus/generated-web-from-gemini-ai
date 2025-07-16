document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Tampilkan/sembunyikan menu mobile saat tombol di klik
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Sembunyikan menu saat link di-klik (berguna untuk navigasi di halaman yang sama)
    const allNavLinks = document.querySelectorAll('.nav-links a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
