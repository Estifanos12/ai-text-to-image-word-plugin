const Footer = {
  /**
   * Render the component content.
   */
  render: async () => {
    return /*html*/ `
        <p class="text-center mt-4 text-sm"><em>AI Image generator</em></p>  
        <p class="text-center text-sm"><em id="year"></em> <a href="">Github</a></p>  
      `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    // Select a node that will contain the clock and date.
    const year = document.querySelector("#year");

    /**
     * Set inner html of selected node to current year.
     */
    const updateTime = () => {
      // Get current year.
      year.innerHTML = `${new Date().getFullYear()}`;
    };

    // Set node content and update it every second.
    updateTime();
    setInterval(updateTime, 1000);
  },
};
