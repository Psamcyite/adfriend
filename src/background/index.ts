console.log('background is running')

chrome.runtime.onInstalled.addListener(() => {
  console.log("AdFriend Extension Installed! 🚀");
});

