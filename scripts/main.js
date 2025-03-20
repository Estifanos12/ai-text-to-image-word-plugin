(async () => {
  let prompt = "";
  let isDarkMode;
  let inputDomElement;
  let formDomElement;
  let submitDomElement;
  let generatedImageDomElement;

  //formStates
  const formState = new Proxy(
    {
      isSubmitting: false,
      hasError: false,
      errorMessage: "",
      responseMessage: "",
    },
    {
      set(target, prop, val) {
        console.log(`${target[prop]} to ${val}`);
        target[prop] = val;
      },
    }
  );
  // let isSubmitting = false;
  // let hasError = false;
  // let errorMessage = "";
  // let responseMessage = "";

  await router();
  window.addEventListener("hashchange", router);

  Office.onReady((info) => {
    if (info.host === Office.HostType.Word) {
      isDarkMode = Office.context.officeTheme.isDarkTheme;
      inputDomElement = document.getElementsByTagName("input")[0];
      formDomElement = document.getElementsByTagName("form")[0];
      generatedImageDomElement = document.getElementById("generated_image");

      console.log(generatedImageDomElement);
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

      formDomElement.addEventListener("submit", handleFormSubmission);
      generatedImageDomElement.addEventListener("click", async () => {
        if (generatedImageDomElement.children[0].firstElementChild) {
          try {
            await insertImageToDocument(
              generatedImageDomElement.children[0].firstElementChild
            );
          } catch (error) {
            console.error(error);
          }
        }
      });
    }
  });

  function handleFormSubmission(event) {
    event.preventDefault();

    generatedImageDomElement.innerHTML = /*html*/ `
      <div class="w-full p-3 border border-gray-300 rounded-lg my-5">
        <img src="https://127.0.0.1:3000/assets/logo/logo.png" alt="Generated Image" class="w-full aspect-video"/>      
        <p class="text-xs italic py-2 text-center">Click on the generated image to insert.</p>
      </div>
        `;
  }

  async function insertImageToDocument(imageElement) {
    await Word.run(async (context) => {
      const body = context.document.body;
      body.insertHtml(imageElement.outerHTML, Word.InsertLocation.end);
      await context.sync();

      console.log("HTML added to the beginning of the document body.");
    });
  }
})();
