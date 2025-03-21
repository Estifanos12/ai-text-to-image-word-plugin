const routes = {
  "/": Home,
  "/history": History,
};

class Router {
  header; // Header : Layout component
  content; // Main content
  footer; // Footer : Layout component

  history = [];

  //Prevent anchor default behavior
  preventAnchorDefault() {
    document.querySelectorAll("a").forEach((element) => {
      if (!element.getAttribute("listener")) {
        element.addEventListener("click", async (event) => {
          event.preventDefault();
          await this.goToRoute(element.getAttribute("href"));
          return false;
        });
        element.setAttribute("listener", "true");
      }
    });
  }

  async initLayout() {
    this.header = document.getElementById("header_root");
    this.footer = document.getElementById("footer_root");

    this.header.innerHTML = null; // If you have a header component you can render it here
    this.footer.innerHTML = await Footer.render();
    await Footer.after_render(this.preventAnchorDefault.bind(this));

    await this.goToRoute("/");
  }

  async goToRoute(route) {
    if (route.startsWith("http")) {
      window.open(route);
      return;
    }

    this.content = document.getElementById("main_root");
    const page = routes[route];
    this.history.push(route);
    this.content.innerHTML = await page.render();

    if (page === History) {
      await page.after_render(
        this.preventAnchorDefault.bind(this),
        this.goBack.bind(this)
      );
      return;
    }

    await page.after_render(this.preventAnchorDefault.bind(this));
  }

  async goBack() {
    if (this.history.length === 1 || this.history.length === 0) return;
    this.history.pop();
    await this.goToRoute(this.history[this.history.length - 1]);
  }
}
