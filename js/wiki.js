const searchInput = document.getElementById("search");
const rows = document.querySelectorAll(".lore-table tbody tr");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(value)
            ? ""
            : "none";
    });
});
