//onload of the page
$(function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { todo: "collectGrades" });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "showGrades") {
    Mustache.tags = ["[[", "]]"]; //hbs uses {{}} so we need to set-up Mustache to use [[]]
    finished_courses = request.content;
    id = request.id;
    const CoursesTemplate = document.querySelector("#Courses-template")
      .innerHTML;
    const html = Mustache.render(CoursesTemplate, { finished_courses });
    console.log(finished_courses);
    document.querySelector("#Courses").innerHTML = html;

    welcome_msg = "Hello " + id;
    alert(welcome_msg);
  }
});
