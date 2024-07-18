document.getElementById("execute").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: ["content.js"],
      },
      () => {
        document.getElementById("status").innerText =
          "Script executed. Check the console for details.";
      }
    );
  });
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  document.getElementById("status").innerText = request.message;
});
