import re
import nltk
from nltk.corpus import stopwords

# Download NLTK stopwords (only needed once)
nltk.download("stopwords")

# Define stopwords
STOPWORDS = set(stopwords.words("english"))


def clean_text(text, level="light"):
    """
    Clean text based on the selected cleaning level.
    Returns cleaned text and metrics (characters, words, tokens saved).

    Cleaning levels:
    - light: Basic cleaning (removes extra spaces and special characters).
    - medium: Includes light cleaning + lowercase conversion + stopword removal.
    - heavy: Includes medium cleaning + removes short words (<3 chars), numbers, and HTML tags.
    """
    # Preserve original text for metrics calculation
    original_text = text

    # Perform cleaning based on the level
    if level == "light":
        # Remove extra spaces and special characters
        text = re.sub(r"<[^>]+>", "", text)  # Remove HTML tags
        text = re.sub(r"\s+", " ", text)  # Replace multiple spaces with a single space
        text = re.sub(r"[^\w\s]", "", text)  # Remove special characters
        text = text.strip()  # Trim leading and trailing spaces

    elif level == "medium":
        # Light cleaning + lowercase + stopword removal
        text = re.sub(r"<[^>]+>", "", text)  # Remove HTML tags
        text = re.sub(r"\s+", " ", text)  # Replace multiple spaces with a single space
        text = re.sub(r"[^\w\s]", "", text)  # Remove special characters
        text = text.strip().lower()  # Trim spaces and convert to lowercase
        text = " ".join(word for word in text.split() if word not in STOPWORDS)  # Remove stopwords

    elif level == "heavy":
        # Medium cleaning + short words, numbers, and HTML tags removal
        text = re.sub(r"<[^>]+>", "", text)  # Remove HTML tags
        text = re.sub(r"\s+", " ", text)  # Replace multiple spaces with a single space
        text = re.sub(r"[^\w\s]", "", text)  # Remove special characters
        text = text.strip().lower()  # Trim spaces and convert to lowercase

        # Define custom stopwords specific to the project (if needed)
        custom_stopwords = {"stopwords"}

        # Remove stopwords, short words (<3 chars), and numbers
        text = " ".join(
            word for word in text.split()
            if len(word) > 2 and not word.isdigit() and word not in STOPWORDS.union(custom_stopwords)
        )

    else:
        raise ValueError("Invalid cleaning level. Choose 'light', 'medium', or 'heavy'.")

    # Calculate cleaning metrics
    metrics = {
        "characters_saved": len(original_text) - len(text),
        "words_saved": len(original_text.split()) - len(text.split()),
        "tokens_saved": len(original_text) // 4 - len(text) // 4,  # Approximation: 1 token ≈ 4 characters
    }

    return text, metrics
