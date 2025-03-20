(async () => {
  let prompt = "";
  let isDarkMode;
  let inputDomElement;
  let formDomElement;
  let submitDomElement;

  await router();
  window.addEventListener("hashchange", router);

  Office.onReady((info) => {
    if (info.host === Office.HostType.Word) {
      isDarkMode = Office.context.officeTheme.isDarkTheme;
      inputDomElement = document.getElementsByTagName("input")[0];
      formDomElement = document.getElementsByTagName("form")[0];
      submitDomElement = document.querySelector("button[type=submit]");
      submitDomElement.setAttribute("disabled", "disabled");

      inputDomElement.addEventListener("input", (event) => {
        prompt = event.target.value;

        if (prompt) {
          submitDomElement.removeAttribute("disabled");
        } else {
          submitDomElement.setAttribute("disabled", "disabled");
        }
      });
    }
  });

  // function sayHello() {
  //   return Word.run((context) => {
  //     // insert a paragraph at the start of the document.
  //     const paragraph = context.document.body.insertParagraph(
  //       "Hello World",
  //       Word.InsertLocation.start
  //     );

  //     // sync the context to run the previous API call, and return.
  //     return context.sync();
  //   });
  // }
})();
