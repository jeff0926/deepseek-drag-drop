const dropzone = document.getElementById("dropzone");
const statusLogs = document.getElementById("statusLogs");
const fileCardsContainer = document.getElementById("fileCards");
const sendToLLMButton = document.getElementById("sendToLLM");
const loadingIndicator = document.getElementById("loadingIndicator");
const llmResponseArea = document.getElementById("llmResponse");
const payloadArea = document.getElementById("payload");
const wordCountArea = document.getElementById("wordCount");
const tokenCountArea = document.getElementById("tokenCount");
const cleanButton = document.getElementById("cleanButton");

let files = []; // Global variable to store dropped files
let selectedCleaningLevel = "light"; // Default cleaning level

// Log status messages
function logStatus(message, isError = false) {
    const logEntry = document.createElement("div");
    logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    if (isError) {
        logEntry.style.color = "#ff6b6b"; // Red for errors
    }
    statusLogs.appendChild(logEntry);
    statusLogs.scrollTop = statusLogs.scrollHeight; // Auto-scroll to the latest log
}

// Handle file drops
dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
});

dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragover");
});

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 10 || files.length + droppedFiles.length > 10) {
        logStatus("Error: Maximum of 10 files allowed.", true);
        return;
    }

    const newFiles = Array.from(droppedFiles).filter((file) => {
        const isDuplicate = files.some((existingFile) => existingFile.name === file.name);
        if (isDuplicate) {
            logStatus(`Error: File "${file.name}" already exists.`, true);
        }
        return !isDuplicate; // Only add non-duplicate files
    });

    files = [...files, ...newFiles]; // Add new files to the existing list
    logStatus(`Dropped ${newFiles.length} file(s)`);
    displayFileCards(files);
});


document.addEventListener("DOMContentLoaded", () => {
    const roleCardsContainer = document.getElementById("roleCards");
    const reportTypeCardsContainer = document.getElementById("reportTypeCards"); // For report type
    const systemPromptTextarea = document.getElementById("systemPrompt");

    // Fetch roles from the server
    async function fetchRoles() {
        try {
            const response = await fetch("/roles");
            if (!response.ok) throw new Error("Failed to fetch roles");
            const data = await response.json();

            displayRoleCards(data.roles);
        } catch (error) {
            console.error("Error fetching roles:", error.message);
        }
    }



    document.addEventListener("DOMContentLoaded", () => {
        const roleCardsContainer = document.getElementById("roleCards");
        const reportTypeCardsContainer = document.getElementById("reportTypeCards"); // For report type
        const systemPromptTextarea = document.getElementById("systemPrompt");
    
        // Fetch roles from the server
        async function fetchRoles() {
            try {
                const response = await fetch("/roles");
                if (!response.ok) throw new Error("Failed to fetch roles");
                const data = await response.json();
    
                displayRoleCards(data.roles);
            } catch (error) {
                console.error("Error fetching roles:", error.message);
            }
        }
    
        // Display role cards
        function displayRoleCards(roles) {
            roleCardsContainer.innerHTML = "";
            roles.forEach((role) => {
                const card = createSelectableCard(role.name, role.definition);
                card.addEventListener("click", () => selectCard(card, roles, "role", role.name));
                roleCardsContainer.appendChild(card);
            });
        }
    
        // Create a selectable card
        function createSelectableCard(title, description) {
            const card = document.createElement("div");
            card.className = "selectable-card";
            card.innerHTML = `
                <h4>${title}</h4>
                <p>${description}</p>
            `;
            return card;
        }
    
        // Handle card selection
        function selectCard(selectedCard, group, type, value) {
            const container = type === "role" ? roleCardsContainer : reportTypeCardsContainer;
            Array.from(container.children).forEach((card) => {
                card.classList.remove("selected");
            });
            selectedCard.classList.add("selected");
    
            if (type === "role") {
                fetchSystemPrompt(value);
            }
        }
    
        // Fetch the system prompt for the selected role
        async function fetchSystemPrompt(roleName) {
            try {
                const response = await fetch("/generate-system-prompt", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ role: roleName }),
                });
                if (!response.ok) throw new Error("Failed to fetch system prompt");
                const data = await response.json();
                systemPromptTextarea.value = data.system_prompt;
            } catch (error) {
                console.error("Error fetching system prompt:", error.message);
            }
        }
    
        fetchRoles(); // Fetch roles on page load
    });
    


    // Display role cards
    function displayRoleCards(roles) {
        roleCardsContainer.innerHTML = "";
        roles.forEach((role) => {
            const card = createSelectableCard(role.name, role.definition);
            card.addEventListener("click", () => selectCard(card, roles, "role", role.name));
            roleCardsContainer.appendChild(card);
        });
    }

    // Create a selectable card
    function createSelectableCard(title, description) {
        const card = document.createElement("div");
        card.className = "selectable-card";
        card.innerHTML = `
            <h4>${title}</h4>
            <p>${description}</p>
        `;
        return card;
    }

    // Handle card selection
    function selectCard(selectedCard, group, type, value) {
        const container = type === "role" ? roleCardsContainer : reportTypeCardsContainer;
        Array.from(container.children).forEach((card) => {
            card.classList.remove("selected");
        });
        selectedCard.classList.add("selected");

        if (type === "role") {
            fetchSystemPrompt(value);
        }
    }

    // Fetch the system prompt for the selected role
    async function fetchSystemPrompt(roleName) {
        try {
            const response = await fetch("/generate-system-prompt", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ role: roleName }),
            });
            if (!response.ok) throw new Error("Failed to fetch system prompt");
            const data = await response.json();
            systemPromptTextarea.value = data.system_prompt;
        } catch (error) {
            console.error("Error fetching system prompt:", error.message);
        }
    }

    fetchRoles(); // Fetch roles on page load
});



// Display file cards
function displayFileCards(files) {
    fileCardsContainer.innerHTML = ""; // Clear previous cards
    files.forEach((file, index) => {
        const metadata = getFileMetadata(file);
        const fileCard = createFileCard(metadata, index);
        fileCardsContainer.appendChild(fileCard);
    });
}

// Create a file card
function createFileCard(metadata, index) {
    const fileCard = document.createElement("div");
    fileCard.className = "file-card";

    // File name
    const fileName = document.createElement("div");
    fileName.className = "file-name";
    fileName.textContent = metadata.name;
    fileCard.appendChild(fileName);

    // File size
    const fileSize = document.createElement("div");
    fileSize.className = "file-size";
    fileSize.textContent = `Size: ${metadata.formattedSize}`;
    fileCard.appendChild(fileSize);

    // File type
    const fileType = document.createElement("div");
    fileType.className = "file-type";
    fileType.textContent = `Type: ${metadata.type}`;
    fileCard.appendChild(fileType);

    // Last modified
    const lastModified = document.createElement("div");
    lastModified.className = "file-modified";
    lastModified.textContent = `Last Modified: ${metadata.lastModified}`;
    fileCard.appendChild(lastModified);

    // File actions (checkbox and X icon)
    const fileActions = document.createElement("div");
    fileActions.className = "file-actions";

    // Checkbox for selection
    const selectCheckbox = document.createElement("input");
    selectCheckbox.type = "checkbox";
    selectCheckbox.className = "select-checkbox";
    selectCheckbox.addEventListener("change", () => {
        fileCard.style.backgroundColor = selectCheckbox.checked ? "rgba(52, 152, 219, 0.1)" : "";
        logStatus(`File ${metadata.name} ${selectCheckbox.checked ? "selected" : "deselected"}`);
    });
    fileActions.appendChild(selectCheckbox);

    // X icon for removal
    const removeIcon = document.createElement("i");
    removeIcon.className = "fas fa-times remove-icon";
    removeIcon.addEventListener("click", () => {
        files.splice(index, 1); // Remove the file from the global list
        fileCard.remove(); // Remove the card from the UI
        logStatus(`File ${metadata.name} removed`);
    });
    fileActions.appendChild(removeIcon);

    fileCard.appendChild(fileActions);

    return fileCard;
}

// Collect file metadata
function getFileMetadata(file) {
    return {
        name: file.name,
        size: file.size,
        formattedSize: formatFileSize(file.size),
        type: file.type,
        lastModified: new Date(file.lastModified).toLocaleString(),
    };
}

// Format file size
function formatFileSize(bytes) {
    if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(2)} GB`;
    if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(2)} MB`;
    if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(2)} KB`;
    return `${bytes} bytes`;
}

// Send files and prompts to LLM
sendToLLMButton.addEventListener("click", async () => {
    const systemPrompt = document.getElementById("systemPrompt").value;
    const userPrompt = document.getElementById("userPrompt").value;

    if (!systemPrompt || !userPrompt || files.length === 0) {
        logStatus("Error: Please provide prompts and select files.", true);
        return;
    }

    // Show loading indicator
    loadingIndicator.style.display = "flex";
    logStatus("Sending request to DeepSeek API...");

    try {
        // Process files and combine content
        const fileObjects = await Promise.all(
            files.map(async (file) => {
                try {
                    const content = await file.text(); // Read file as text
                    return {
                        name: file.name,
                        format: file.type,
                        content: content,
                    };
                } catch (error) {
                    logStatus(`Skipping binary file: ${file.name}`, true);
                    return null;
                }
            })
        ).then((results) => results.filter((file) => file !== null)); // Filter out null values

        if (fileObjects.length === 0) {
            logStatus("Error: No valid text files were uploaded.", true);
            return;
        }

        // Update payload display
        updatePayloadDisplay(systemPrompt, userPrompt, fileObjects);

        // Send the payload to the backend
        const response = await fetch("/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                system_prompt: systemPrompt,
                user_prompt: userPrompt,
                files: fileObjects,
            }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "An error occurred");
        }

        const data = await response.json();
        logStatus("Received response from DeepSeek API.");
        llmResponseArea.innerText = data.response;
    } catch (error) {
        logStatus(`Error: ${error.message}`, true);
    } finally {
        // Hide loading indicator
        loadingIndicator.style.display = "none";
    }
});

// Update the payload display
function updatePayloadDisplay(systemPrompt, userPrompt, fileObjects) {
    const payload = {
        system_prompt: systemPrompt,
        user_prompt: userPrompt,
        files: fileObjects,
    };
    document.getElementById("payload").textContent = JSON.stringify(payload, null, 2);

    // Update word and token counts
    const payloadText = JSON.stringify(payload);
    const wordCount = getWordCount(payloadText);
    const tokenCount = getTokenCount(payloadText);
    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("tokenCount").textContent = tokenCount;
}

// Function to calculate word count
function getWordCount(text) {
    return text.split(/\s+/).filter(Boolean).length;
}

// Function to estimate token count (approximation: 1 token ≈ 4 characters)
function getTokenCount(text) {
    return Math.ceil(text.length / 4);
}

// List of common stop words (customize as needed)
const stopWords = new Set([
    "a", "an", "the", "and", "or", "but", "if", "then", "else", "when", 
    "at", "by", "for", "in", "of", "on", "to", "with", "as", "about", 
    "after", "before", "during", "until", "while", "from", "up", "down", 
    "out", "over", "under", "again", "further", "once", "here", "there", 
    "where", "why", "how", "all", "any", "both", "each", "few", "more", 
    "most", "other", "some", "such", "no", "nor", "not", "only", "own", 
    "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", 
    "don", "should", "now"
]);




// Function to calculate word count
function getWordCount(text) {
    return text.split(/\s+/).filter(Boolean).length;
}

// Function to estimate token count (approximation: 1 token ≈ 4 characters)
function getTokenCount(text) {
    return Math.ceil(text.length / 4);
}

// Enhanced cleaning function with metrics
function cleanText(text, level = "light") {
    if (!text) return "";

    // Store original metrics
    const originalWordCount = getWordCount(text);
    const originalCharCount = text.length;
    const originalTokenCount = getTokenCount(text);

    // Step 1: Remove HTML tags
    let cleanedText = text.replace(/<[^>]+>/g, "");

    // Step 2: Remove special characters and normalize whitespace
    cleanedText = cleanedText
        .replace(/[^\w\s]/g, " ") // Remove special characters
        .replace(/\s+/g, " ") // Normalize whitespace
        .trim();

    if (level === "light") {
        // Calculate metrics for light cleaning
        const cleanedWordCount = getWordCount(cleanedText);
        const cleanedCharCount = cleanedText.length;
        const cleanedTokenCount = getTokenCount(cleanedText);

        updateCleaningMetrics(
            originalWordCount - cleanedWordCount,
            originalCharCount - cleanedCharCount,
            originalTokenCount - cleanedTokenCount
        );

        return cleanedText;
    }

    // Step 3: Convert to lowercase
    cleanedText = cleanedText.toLowerCase();

    // Step 4: Remove punctuation
    cleanedText = cleanedText.replace(/[^\w\s]/g, "");

    if (level === "medium") {
        // Step 5: Remove stop words
        cleanedText = cleanedText
            .split(" ")
            .filter((word) => !stopWords.has(word)) // Remove stop words
            .join(" ");

        // Calculate metrics for medium cleaning
        const cleanedWordCount = getWordCount(cleanedText);
        const cleanedCharCount = cleanedText.length;
        const cleanedTokenCount = getTokenCount(cleanedText);

        updateCleaningMetrics(
            originalWordCount - cleanedWordCount,
            originalCharCount - cleanedCharCount,
            originalTokenCount - cleanedTokenCount
        );

        return cleanedText;
    }

    if (level === "heavy") {
        // Step 6: Remove numbers and short words
        cleanedText = cleanedText
            .split(" ")
            .filter((word) => word.length > 2 && !/\d/.test(word)) // Remove short words and numbers
            .join(" ");

        // Calculate metrics for heavy cleaning
        const cleanedWordCount = getWordCount(cleanedText);
        const cleanedCharCount = cleanedText.length;
        const cleanedTokenCount = getTokenCount(cleanedText);

        updateCleaningMetrics(
            originalWordCount - cleanedWordCount,
            originalCharCount - cleanedCharCount,
            originalTokenCount - cleanedTokenCount
        );

        return cleanedText;
    }

    return cleanedText;
}

// Function to update cleaning metrics
function updateCleaningMetrics(wordsSaved, charsSaved, tokensSaved) {
    document.getElementById("wordsSaved").textContent = wordsSaved;
    document.getElementById("charsSaved").textContent = charsSaved;
    document.getElementById("tokensSaved").textContent = tokensSaved;
}

// Set the selected cleaning level
document.getElementById("lightClean").addEventListener("click", () => {
    selectedCleaningLevel = "light";
    logStatus("Cleaning level set to Light.");
});

document.getElementById("mediumClean").addEventListener("click", () => {
    selectedCleaningLevel = "medium";
    logStatus("Cleaning level set to Medium.");
});

document.getElementById("heavyClean").addEventListener("click", () => {
    selectedCleaningLevel = "heavy";
    logStatus("Cleaning level set to Heavy.");
});

// Clean button functionality
cleanButton.addEventListener("click", () => {
    const systemPrompt = document.getElementById("systemPrompt");
    const userPrompt = document.getElementById("userPrompt");

    // Reset metrics
    updateCleaningMetrics(0, 0, 0);

    // Clean the prompts using the selected cleaning level
    systemPrompt.value = cleanText(systemPrompt.value, selectedCleaningLevel);
    userPrompt.value = cleanText(userPrompt.value, selectedCleaningLevel);

    logStatus(`Prompts cleaned using ${selectedCleaningLevel} cleaning.`);
});