console.log("the script is started");

function customRender(root, react) {
  let newElement = document.createElement(root.type);
  newElement.innerHTML = root.Children;
  newElement.setAttribute("href", root.props.href);
  newElement.setAttribute("target", root.props.target);
  react.appendChild(newElement); // ✅ Append to the actual DOM node
}

let rootElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  Children: "Click on me"
};

let reactElement = document.querySelector("#root");
customRender(rootElement, reactElement);