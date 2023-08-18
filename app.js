const elementsData = [
  "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col",       "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2",   "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark",         "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s",     "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th",   "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"
];

const elementNav = document.getElementById("elementNav");
const elementContainer = document.getElementById("elementContainer");

elementsData.forEach(elementName => {
  const navItem = document.createElement("li");
  const link = document.createElement("a");
  
  link.textContent = elementName;
  link.href = "#" + elementName;
  navItem.appendChild(link);
  elementNav.appendChild(navItem);
  
  link.addEventListener("click", event => {
    event.preventDefault();
    const element = document.createElement(elementName);
    element.textContent = "This is a " + elementName + " element.";
    elementContainer.innerHTML = "";
    elementContainer.appendChild(element);
  });
});
