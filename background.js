// Listen for the browser action (i.e. clicking on the extension icon)
chrome.browserAction.onClicked.addListener(function(tab) {
    // When the user clicks on the extension icon, open the popup
    chrome.browserAction.setPopup({ tabId: tab.id, popup: "popup.html" });
  });
  
  // Listen for the storage change event
  chrome.storage.onChanged.addListener(function(changes, namespace) {
    // When the storage changes, log the changes to the console
    console.log("Storage change detected", changes);
  });
  