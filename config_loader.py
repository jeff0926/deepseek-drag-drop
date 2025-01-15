import json
import os

# Centralized configuration loader
class ConfigLoader:
    CONFIG_DIR = "config"  # Define the path to the configuration directory

    @staticmethod
    def load_config(file_name):
        """
        Load a configuration file from the config directory.

        Args:
            file_name (str): The name of the configuration file (e.g., 'file_types_accepted.json').

        Returns:
            dict: Parsed JSON content of the configuration file.

        Raises:
            FileNotFoundError: If the file does not exist.
            ValueError: If the file contains invalid JSON.
        """
        file_path = os.path.join(ConfigLoader.CONFIG_DIR, file_name)
        try:
            with open(file_path, "r") as file:
                config = json.load(file)
                print(f"Loaded configuration from {file_name}")
                return config
        except FileNotFoundError:
            raise FileNotFoundError(f"Configuration file '{file_name}' not found in '{ConfigLoader.CONFIG_DIR}'")
        except json.JSONDecodeError as e:
            raise ValueError(f"Invalid JSON in configuration file '{file_name}': {e}")

    @staticmethod
    def validate_config(config, required_keys):
        """
        Validate that a configuration contains the required keys.

        Args:
            config (dict): The configuration data.
            required_keys (list): List of required keys to validate.

        Raises:
            KeyError: If any required key is missing.
        """
        missing_keys = [key for key in required_keys if key not in config]
        if missing_keys:
            raise KeyError(f"Missing required keys in configuration: {', '.join(missing_keys)}")
        print(f"Configuration validated successfully.")

# Example usage
if __name__ == "__main__":
    try:
        # Load role definitions
        role_definitions = ConfigLoader.load_config("role_definition.json")
        ConfigLoader.validate_config(role_definitions, ["roles"])  # Validate required keys
        print("Role Definitions:", role_definitions)

        # Load file types
        file_types = ConfigLoader.load_config("file_types_accepted.json")
        ConfigLoader.validate_config(file_types, ["extensions"])  # Validate required keys
        print("File Types Accepted:", file_types)
    except (FileNotFoundError, ValueError, KeyError) as e:
        print(f"Error: {e}")
