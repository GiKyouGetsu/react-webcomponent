import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  
    return (
      <div>
        Hello World!
      </div>
    );
  }

// Name of our class doesn't matter.
class HelloElement extends HTMLElement {
    // Happens every time an instance of this element is mounted
    // (can be called again when moved from one container element to another)
    connectedCallback() {
      ReactDOM.render(
        <div>
            <App></App>
            <button onClick={() => alert("Clicked")}>
                Click Me!
            </button>
        </div>,
        this
      );
    }
  }
  
  const tagName = "hello-component";
  
  if (!window.customElements.get(tagName)) {
    // prevent rerunning on hot module reloads
    // register to be rendered in place of every <evil-plan> tag
    window.customElements.define(tagName, HelloElement);
  }