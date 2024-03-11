 document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById('toggleDark')
    toggleDark.addEventListener('click', function() {
    if(document.documentElement.classList.includes('dark')) {
    document.documentElement.classList.remove('dark')
}
    else {
    document.documentElement.classList.add('dark')
}
    alert("click!")
});
});
