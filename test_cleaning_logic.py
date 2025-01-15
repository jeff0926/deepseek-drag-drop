
# test_cleaning_logic.py.
# python test_cleaning_logic.py


from app.clean import clean_text


# Load test cases
test_cases = [
    {
        "name": "basic_text.txt",
        "input": "This is a simple text with <b>HTML</b> tags and some stopwords.",
        "expected": {
            "light": "This is a simple text with HTML tags and some stopwords",
            "medium": "simple text html tags stopwords",
            "heavy": "simple text html tags"
        }
    }
]

for test_case in test_cases:
    print(f"Testing {test_case['name']}")

    for level in ["light", "medium", "heavy"]:
        cleaned_content, metrics = clean_text(test_case["input"], level=level)

        print(f"Level: {level}")
        print(f"Cleaned Content: {cleaned_content}")
        print(f"Expected Content: {test_case['expected'][level]}")
        print(f"Metrics: {metrics}")

        # Assert the cleaned content matches the expected output
        assert cleaned_content == test_case["expected"][level], "Content mismatch!"

print("All tests passed!")



