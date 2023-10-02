// Event listener for the form submission
document.getElementById("email-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = parseInt(document.getElementById("age").value); // Parse "Age" as an integer
  const sex = document.getElementById("sex").value;
  const address = document.getElementById("address").value;
  const mobile = document.getElementById("mobile").value;
  const aadhar = document.getElementById("aadhar").value;

  // Create an object with the input data
  const inputData = {
    name,
    email,
    age, // Make sure "age" is a number
    sex,
    address,
    mobile,
    aadhar,
  };

  // Add error handling for the fetch request
  try {
    const response = await fetch("http://localhost:3000/api/v1/contact/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData), // Send input data as JSON
    });

    if (!response.ok) {
      // Handle non-successful responses (e.g., server errors)
      throw new Error(`Request failed with status: ${response.status}`);
    }

    // Reset the form data
    document.getElementById("email-form").reset();

    // Display a success alert
    alert("Booking confirmed successfully!");
  } catch (error) {
    console.error("Fetch Error:", error);
    // Handle errors here (e.g., display an error message to the user)
  }
});
