
  const checkBtn = document.getElementById("check-btn");
  const textInput = document.getElementById("text-input");
  const result = document.getElementById("result");

  checkBtn.addEventListener("click", () => {
    const originalText = textInput.value;

    // USER STORY #4: Empty input ➝ alert
    if (originalText.trim() === "") {
      alert("Please input a value.");
      return;
    }

    // Clean text (remove all NON-alphanumeric)
    const cleaned = originalText
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "");

    // Create reversed cleaned string
    const reversed = cleaned.split("").reverse().join("");

    const isPalindrome = cleaned === reversed;

    // USER STORY: Print exact text
    if (isPalindrome) {
      result.textContent = `${originalText} is a palindrome.`;
    } else {
      result.textContent = `${originalText} is not a palindrome.`;
    }
  });
