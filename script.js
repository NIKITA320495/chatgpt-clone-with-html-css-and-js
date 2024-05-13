import { GoogleGenerativeAI } from "@google/generative-ai";

// Add event listeners to each element with class "header" for mouseleave event
var headers = document.getElementsByClassName("header");
for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('mouseleave', function() {
        // Reset background color to default on mouse leave
        this.style.backgroundColor = '';
    });
}
// Access your API key
const genAI = new GoogleGenerativeAI("AIzaSyBtd4jGDayYjdx0gGJYYwaFHFgdenCLQZg");

// Define function to get answer
async function getAnswer() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Get the user's question from the input field
    const prompt = document.getElementById("question").value;

    // Generate content based on the question
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Log the answer to the console
    console.log(text);
}

// Attach event listener to the button to trigger getAnswer function
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("submit"); // Select the button element
    button.addEventListener("click", getAnswer); // Attach event listener
});
