document.addEventListener("DOMContentLoaded", () => {

    const entries = [];
    const addBtn = document.getElementById("addBtn");

    addBtn.addEventListener("click", addEntry);

    function addEntry() {
        const activity = document.getElementById("activity").value.trim();
        const duration = document.getElementById("duration").value.trim();

        if (!activity || duration <= 0) {
            alert("Please enter valid data");
            return;
        }

        entries.push({ activity, duration });
        updateEntriesList();

        document.getElementById("activity").value = "";
        document.getElementById("duration").value = "";
    }

    function updateEntriesList() {
        const list = document.getElementById("entries-list");
        list.innerHTML = "";

        entries.forEach(entry => {
            const li = document.createElement("li");

            li.innerHTML = `
                <span>${entry.activity}</span>
                <span class="badge">${entry.duration} min</span>
            `;

            list.appendChild(li);
        });
    }

});
