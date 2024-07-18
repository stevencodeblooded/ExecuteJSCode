// Function to execute the JavaScript code
function executeScript() {
    let count
    try {
      count = count - count + 1; // Directly execute the desired JavaScript
      sendMessageToPopup(`Script executed successfully.`);
    } catch (error) {
      sendMessageToPopup(`Error: ${error.message}`);
    }
  }
  
  // Function to send message to popup
  function sendMessageToPopup(message) {
    chrome.runtime.sendMessage({ message: message });
  }
  
  // Execute the script when this content script is injected
  executeScript();
  