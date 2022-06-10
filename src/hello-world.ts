import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  static styles = css`
    p {
      color: green;
    }
  `;

  @property()
  type = 'wonderful';

  render() {
    return html`<p>Hello ${this.type} world</p>`;
  }
}
