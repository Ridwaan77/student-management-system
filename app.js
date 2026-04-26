function login(username, password) {
    // Dummy credentials
    const validUser = "admin";
    const validPass = "1234";

    if (username === validUser && password === validPass) {
        console.log("Login successful");
        return true;
    } else {
        console.log("Invalid username or password");
        return false;
    }
}

// Test the function
login("admin", "1234");   // success
login("user", "1111");    // fail