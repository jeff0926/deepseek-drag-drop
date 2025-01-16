import os
from dotenv import load_dotenv
from openai import OpenAI  # Import the new OpenAI client
from openai import OpenAIError, APIConnectionError, AuthenticationError, RateLimitError, BadRequestError

def openai_api_health_check():
    """
    Tests the OpenAI API key and checks if it is working correctly by making a small, test API call.
    Returns success or failure with detailed error handling and console outputs for debugging.
    """
    try:
        # Load environment variables
        print("Loading environment variables...")
        load_dotenv()

        # Get OpenAI API key from environment
        openai_api_key = os.getenv("OPENAI_API_KEY")
        if not openai_api_key:
            print("Error: OpenAI API key not found in environment variables.")
            return "Error: OpenAI API key not found. Ensure it is set in the .env file."

        print("OpenAI API key found. Testing API health...")

        # Initialize the OpenAI client
        client = OpenAI(api_key=openai_api_key)

        # Make a simple test API call using the new API
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",  # Use a supported model like gpt-3.5-turbo or gpt-4
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": "This is a test of the OpenAI API health check. Generate a short response for testing."},
            ],
            max_tokens=10,
        )

        # If the call succeeds, return success message
        print("API call successful. Response received.")
        return f"OpenAI API is working correctly. Response: {response.choices[0].message.content.strip()}"

    except AuthenticationError:
        print("Error: Authentication failed. Invalid OpenAI API key.")
        return "Error: Authentication failed. Please check your OpenAI API key."
    except RateLimitError:
        print("Error: Rate limit exceeded. Check your OpenAI plan or reduce API usage.")
        return "Error: Rate limit exceeded. Consider checking your OpenAI plan or reducing API usage."
    except APIConnectionError as e:
        print(f"Error: API connection failed. Details: {e}")
        return "Error: API connection failed. Please check your internet connection and try again."
    except BadRequestError as e:  # Replaces InvalidRequestError
        print(f"Error: Invalid request. Details: {e}")
        return "Error: Invalid request. Please check the parameters sent to the API."
    except OpenAIError as e:
        print(f"Error: General OpenAI error. Details: {e}")
        return f"Error: An OpenAI error occurred: {e}"
    except Exception as e:
        print(f"Error: Unexpected error. Details: {e}")
        return f"Error: An unexpected error occurred: {e}"

if __name__ == "__main__":
    print("Starting OpenAI API health check...")
    result = openai_api_health_check()
    print(f"Health Check Result: {result}")