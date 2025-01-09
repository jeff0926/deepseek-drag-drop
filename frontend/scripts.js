const dropzone = document.getElementById("dropzone");
const statusArea = document.getElementById("statusArea");

function logStatus(message) {
    const statusEntry = document.createElement("div");
    statusEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    statusArea.appendChild(statusEntry);
}

dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.style.backgroundColor = "#f0f0f0";
});

dropzone.addEventListener("dragleave", () => {
    dropzone.style.backgroundColor = "";
});

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.style.backgroundColor = "";
    const files = e.dataTransfer.files;
    logStatus(`Dropped ${files.length} file(s)`);
});

logStatus("Drag-and-drop ready!");