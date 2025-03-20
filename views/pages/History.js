const History = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
      <div class="w-full flex flex-col items-center gap-4 relative">
        <div class="w-full">
          <button
            id="back"
            class="self-start cursor-pointer"
            >
            Go back
          </button>
        </div>
        <p>History</p>
      </div>
        `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    const back = document.querySelector("#back");
    back.addEventListener("click", () => {
      window.history.back();
    });
  },
};
