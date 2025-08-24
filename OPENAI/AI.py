from google import genai

client = genai.Client(api_key="AIzaSyBjBZjHomAMjAgovhFkdgTNfTRuj8tpFZg")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents= str(input("What In Your Mind")),
)

print(response.text)