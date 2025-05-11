export const scrollToElement = (id: string, options = {}) => {
  const element = document.getElementById(id);
  if (element) {
    const defaultOptions: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "start",
      inline: "nearest",
      ...options,
    };

    element.scrollIntoView(defaultOptions);

    // Optional: Update URL with hash (without page reload)
    // if (options.updateUrl !== false) {
    //   window.history.pushState(null, "", `#${id}`);
    // }
  }
};
