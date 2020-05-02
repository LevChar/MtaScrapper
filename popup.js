$(function () {
  $("#btnChange").click(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { todo: "collectGrades" });
      console.log("bla bla");
    });
  });
});
