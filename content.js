chrome.runtime.sendMessage({ todo: "showPageAction" });

// function clickInNewWindow() {
//   document
//     .getElementsByClassName("dropdown-menu")[1]
//     .getElementsByTagName("li")[0]
//     .getElementsByTagName("a")[0]
//     .click();
// }

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  var windowObjectReference;

  if (request.todo == "collectGrades") {
    windowObjectReference = await window.open(document.URL, "_blank");
    windowObjectReference.focus();

    // #0 Attempt:
    console.log(
      document
        .getElementsByClassName("dropdown-menu")[1]
        .getElementsByTagName("li")[0]
        .getElementsByTagName("a")[0]
    );

    // // #0 Attempt with click:
    // document
    //   .getElementsByClassName("dropdown-menu")[1]
    //   .getElementsByTagName("li")[0]
    //   .getElementsByTagName("a")[0]
    //   .click();

    //#1 Attempt:
    // console.log(
    // windowObjectReference.document
    //   .getElementsByClassName("dropdown-menu")[1]
    //   .getElementsByTagName("li")[0]
    //   .getElementsByTagName("a")[0]
    // );

    //#2 Attempt:
    // windowObjectReference.document.addEventListener(
    //   "DOMContentLoaded",
    //   (event) => {
    //     console.log("DOM fully loaded and parsed");
    //   }
    // );

    //#3 Attempt:
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //   console.log(
    //     tabs[0].document
    //       .getElementsByClassName("dropdown-menu")[1]
    //       .getElementsByTagName("li")[0]
    //       .getElementsByTagName("a")[0]
    //   );
    // });

    // #4 Attempt:
    // chrome.runtime.sendMessage({ todo: "getNewHtml" });

    //#5 Attempt:
    // windowObjectReference.onload = function () {
    //   console.log(windowObjectReference.document
    // .getElementsByClassName("dropdown-menu")[1]
    // .getElementsByTagName("li")[0]
    // .getElementsByTagName("a")[0]);
    // };

    //#6 Attempt:
    // windowObjectReference.document.addEventListener(
    //   "DOMContentLoaded",
    //   (event) => {
    //     console.log("DOM fully loaded and parsed");
    //   }
    // );

    //#7 Attempt:
    // windowObjectReference.addEventListener("load", (event) => {
    //   console.log("DOM fully loaded and parsed");
    // });

    //#8 Attempt:
    // if (document.readyState === "loading") {
    //   // Loading hasn't finished yet
    //   document.addEventListener("DOMContentLoaded", clickInNewWindow);
    // } else {
    //   // `DOMContentLoaded` has already fired
    //   doSomething();
    // }

    //#9 Attempt:
    // windowObjectReference.onload = function () {
    //   console.log(
    //     windowObjectReference.document
    //       .getElementsByClassName("dropdown-menu")[1]
    //       .getElementsByTagName("li")[0]
    //       .getElementsByTagName("a")[0]
    //   );
    // };

    //#10 Attempt:
    // $(windowObjectReference).load(function () {
    //   $(windowObjectReference.document).contents();
    // });
  }

  //#4 Attempt:
  // if (request.todo == "executeHtmlScrap") {
  //   console.log("second");
  //   console.log(document);
  // }
});

//#4 Attempt:
// chrome.runtime.onMessage.addListener(async function (
//   request,
//   sender,
//   sendResponse
// ) {});
