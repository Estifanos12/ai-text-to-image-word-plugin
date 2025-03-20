const routes = {
  "/": Home,
  "/history": History,
};

const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementById("header_root");
  const content = null || document.getElementById("main_root");
  const footer = null || document.getElementById("footer_root");

  // Render the header and footer of the page.
  header.innerHTML = null;
  footer.innerHTML = await Footer.render();
  await Footer.after_render();

  // Destructure the parsed URl from the addressbar.
  const { resource, id, verb } = parseRequestUrl();

  // Parse the URL and if it has an id part, change it with the string ":id".
  const parsedUrl =
    (resource ? "/" + resource : "/") +
    (id ? "/:id" : "") +
    (verb ? "/" + verb : "");

  // Render the page from map of supported routes or render 404 page.
  const page = routes[parsedUrl];
  content.innerHTML = await page.render();
  await page.after_render();
};
