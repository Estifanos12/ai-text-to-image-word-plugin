const Home = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `
    <div class="w-full flex flex-col items-center gap-2">
      <img src="https://127.0.0.1:3000/assets/logo/logo.png" alt="Logo" class="w-24 aspect-video" />
      <div class="space-y-2 flex flex-col items-center">
        <h1 class="text-2xl font-semibold">AI image generator</h1>
        <p class="text-sm text-center">
          This add-in uses OpenAI's GPT-3 to generate images based on your
          prompt.
        </p>
        <a href="https://github.com" class="text-sm underline text-blue-600 visited:text-purple-600">Learn more</a>
      </div>
    </div>
    <div class="w-full pb-5 pt-10">
      <div class="w-full text-right mb-2">
          <a href="/history" class="text-sm underline text-blue-600 visited:text-purple-600 place-self-end">Previously generated images</a>
      </div>
      <form class="w-full flex flex-row outline outline-gray-300 rounded-2xl">
        <input
          type="text"
          placeholder="Start typing your prompt here..."
          id="prompt"
          autoComplete="off"
          autofocus
          class="w-[85%] placeholder:text-[#333] dark:placeholder:text-white p-3 focus:outline-0  focus:ring-0 focus:border-0"
        />
        <button type="submit" disabled="true" class="w-[15%] disabled:cursor-not-allowed disabled:opacity-50 bg-white flex items-center justify-center rounded-r-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
          <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </form>
      <div id="generated_image"></div>
    </div>
      `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async (init) => {
    init();
  },
};
