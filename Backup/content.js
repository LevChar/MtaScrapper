chrome.runtime.sendMessage({ todo: "showPageAction" });

function getCompletedCourses(item) {
  var courses = [item.CourseName, item.Grade].join(" ");
  return courses;
}

(function () {
  if (window.sessionStorage.getItem("action") == "2") {
    window.sessionStorage.setItem("action", "3");

    // Choose all years
    // ================
    document.getElementById("R1C1").value = "-1";
    document.getElementById("R1C2").value = "0";
    document.getElementsByClassName("btn-u ")[1].click();
    return;
  }

  if (window.sessionStorage.getItem("action") == "3") {
    window.sessionStorage.setItem("action", "4");

    // Extract Student's ID:
    // =====================
    id = document
      .getElementsByClassName("textAboveTable")[0]
      .innerText.split(" ")[4]
      .split("\n")[0];

    sel = document
      .getElementById("myTable0_length")
      .getElementsByTagName("select")[0];
    sel.value = -1;
    sel.dispatchEvent(new Event("change"));
  }

  if (window.sessionStorage.getItem("action") == "4") {
    window.sessionStorage.setItem("action", "end");

    // Extract all Courses from table:
    // ===============================
    curr_object = [];
    curr_JSONobj = {};
    listOfCompletedCourses = [];

    all_rows = document
      .getElementsByTagName("table")[1]
      .getElementsByTagName("tr");

    for (var i = 1; i < all_rows.length; i++) {
      var currRecord = all_rows[i].getElementsByTagName("td");
      var isCourse = currRecord[3].textContent.trim() == "שיעור/ציון קורס";
      var isNum = isCourse && /^\d+$/.test(currRecord[6].textContent.trim());
      var isPassed = isNum && parseInt(currRecord[6].textContent.trim()) >= 60;

      var courseDetails = currRecord[2].textContent.trim().replace("\xa0", " ");
      var courseName = courseDetails.substring(courseDetails.indexOf(" ") + 1);

      if (isPassed) {
        curr_JSONobj = {
          CourseCode: courseDetails.split(" ")[0],
          CourseName: courseName,
          year: currRecord[0].textContent.trim(),
          Semester: currRecord[1].textContent.trim(),
          Grade: currRecord[6].textContent.trim(),
          Credit: currRecord[9].textContent.trim(),
          SemHours: currRecord[10].textContent.trim(),
        };

        listOfCompletedCourses.push(curr_JSONobj);
      }
      curr_JSONobj = {};
    }

    finished_courses = listOfCompletedCourses.map(getCompletedCourses);
    chrome.runtime.sendMessage({
      todo: "showGrades",
      content: finished_courses,
      id: id,
    });
  }
})();

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.todo == "collectGrades") {
    window.sessionStorage.setItem("action", "2");

    //Get to grades page
    //==================
    document
      .getElementsByClassName("dropdown-menu")[1]
      .getElementsByTagName("li")[0]
      .getElementsByTagName("a")[0]
      .click();
  }
});
