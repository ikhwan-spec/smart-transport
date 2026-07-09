// Shared sidebar behaviour for Smart Transport Malaysia.
// Keeps the collapsed/expanded state in sync across every page via localStorage,
// so clicking a nav link (which loads a fresh page) no longer resets the sidebar.

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    localStorage.setItem('stSidebarCollapsed', sidebar.classList.contains('collapsed') ? '1' : '0');
}
