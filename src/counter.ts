import { html, LitElement } from 'lit';
import { customElement, state, eventOptions } from 'lit/decorators.js';

@customElement('my-counter')
export class HelloWorld extends LitElement {
  @state()
  counter = 0;

  @eventOptions({ passive: true })
  addCount() {
    this.counter += 1;
  }

  render() {
    return html`
      <button @click=${this.addCount}>Add more</button>
      <p>counter is now at: ${this.counter}</p>
    `;
  }
}
