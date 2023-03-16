// Get the bookmarked URLs from storage
chrome.storage.sync.get("bookmarkedUrls", function(data) {
    var bookmarkedUrls = data.bookmarkedUrls || [];
    var bookmarkedList = document.getElementById("bookmarked-list");
  
    // Add each bookmarked URL to the bookmark list
    bookmarkedUrls.forEach(function(url) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.innerText = url;
      li.appendChild(a);
      bookmarkedList.appendChild(li);
    });
  
    // If there are no bookmarked URLs, display a message
    if (bookmarkedUrls.length === 0) {
      var message = document.createElement("p");
      message.innerText = "You haven't bookmarked any pages yet.";
      bookmarkedList.appendChild(message);
    }
  });
  
  // Listen for the clear button click event
  document.getElementById("clear-button").addEventListener("click", function() {
    // Clear the bookmarked URLs from storage
    chrome.storage.sync.remove("bookmarkedUrls", function() {
      // When the clear is complete, reload the popup
      location.reload();
    });
  });
  