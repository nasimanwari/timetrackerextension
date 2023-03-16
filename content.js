// Get the current URL of the page
var currentUrl = window.location.href;

// Check if the current URL is in storage
chrome.storage.sync.get("bookmarkedUrls", function(data) {
  var bookmarkedUrls = data.bookmarkedUrls || [];
  var isBookmarked = bookmarkedUrls.includes(currentUrl);

  // If the current URL is already bookmarked, update the UI
  if (isBookmarked) {
    updateUI(true);
  }
});

// Listen for a click on the bookmark button
document.getElementById("bookmark-button").addEventListener("click", function() {
  // Get the current URL of the page
  var currentUrl = window.location.href;

  // Add the current URL to storage
  chrome.storage.sync.get("bookmarkedUrls", function(data) {
    var bookmarkedUrls = data.bookmarkedUrls || [];
    bookmarkedUrls.push(currentUrl);
    chrome.storage.sync.set({ "bookmarkedUrls": bookmarkedUrls }, function() {
      // When the bookmark is complete, update the UI
      updateUI(true);
    });
  });
});

// Update the UI based on the bookmark status
function updateUI(isBookmarked) {
  var button = document.getElementById("bookmark-button");
  if (isBookmarked) {
    button.innerText = "Bookmarked";
    button.disabled = true;
  } else {
    button.innerText = "Bookmark This Page";
    button.disabled = false;
  }
}
