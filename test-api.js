// Test script for the email API
const testEmailAPI = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    message: "This is a test message from the API"
  };

  console.log("🧪 Testing Email API...\n");
  console.log("📤 Sending test data:", testData);
  console.log("📍 URL: http://localhost:5000/api/send-email\n");

  try {
    const response = await fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log("✅ SUCCESS! Email sent successfully:");
      console.log(data);
    } else {
      console.log("❌ ERROR: Failed to send email");
      console.log(data);
    }
  } catch (error) {
    console.log("❌ ERROR: Connection failed");
    console.log("Make sure the server is running on port 5000");
    console.log("Run: npm run server");
    console.error(error.message);
  }
};

// Run test
testEmailAPI();

