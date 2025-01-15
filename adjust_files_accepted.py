import json

# Load the file
file_path = "config/file_types_accepted.json"
try:
    with open(file_path, "r") as file:
        file_types_data = json.load(file)
        print(f"File loaded successfully. Type: {type(file_types_data)}")

        # Print the top-level keys
        if isinstance(file_types_data, dict):
            print("Top-level keys:", file_types_data.keys())
        else:
            print("Unexpected structure. Expected a dictionary.")
            raise ValueError("Invalid structure in file_types_accepted.json")

        # Extract file types under 'extensions'
        file_types = file_types_data.get("extensions")
        if not isinstance(file_types, list):
            print("Extensions are not in a list format.")
            raise ValueError("Expected 'extensions' key to contain a list.")
except FileNotFoundError:
    print(f"Error: File not found at {file_path}")
    exit(1)
except json.JSONDecodeError as e:
    print(f"Error: Malformed JSON in {file_path}. Details: {e}")
    exit(1)

# Process file types
for entry in file_types:
    if not isinstance(entry, dict):
        print(f"Skipping unexpected entry: {entry}")
        continue

    # Add missing attributes
    if "ml_clean" not in entry:
        entry["ml_clean"] = entry.get("supports_llm", False)  # Default to False if missing

    # Validate entries
    if not entry.get("desc"):
        print(f"Missing description for file type: {entry.get('extension', 'Unknown')}")
    if entry["ml_clean"] and not entry["supports_llm"]:
        print(f"Inconsistent ml_clean (true) for file type without supports_llm: {entry['extension']}")

# Save the updated file
updated_path = "config/file_types_accepted_updated.json"
try:
    file_types_data["extensions"] = file_types  # Update the original data
    with open(updated_path, "w") as file:
        json.dump(file_types_data, file, indent=4)
    print(f"Updated file saved to {updated_path}")
except Exception as e:
    print(f"Error: Failed to save updated file. Details: {e}")
    exit(1)
