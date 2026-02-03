(() => {
  const applyDirAuto = (node) => {
    if (!(node instanceof Element)) return;

    if (node.hasAttribute("contenteditable") || node.classList.contains("editor")) {
      node.setAttribute("dir", "auto");
    }

    const targets = node.querySelectorAll("[contenteditable], .editor");
    targets.forEach((el) => el.setAttribute("dir", "auto"));
  };

  applyDirAuto(document.documentElement);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => applyDirAuto(node));
      }

      if (
        mutation.type === "attributes" &&
        mutation.target instanceof Element &&
        mutation.attributeName === "contenteditable"
      ) {
        applyDirAuto(mutation.target);
      }
    });
  });

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["contenteditable"],
  });
})();
