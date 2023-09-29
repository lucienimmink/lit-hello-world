import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { animate } from '@lit-labs/motion';

@customElement('my-motion')
export class MyMotion extends LitElement {
  @state()
  shifted = false;

  options = {
    // see https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
    keyframeOptions: {
      duration: 500,
      easing: 'ease-in-out',
    },
  };

  static styles = css`
    .box {
      position: absolute;
      width: 100px;
      height: 100px;
      margin-top: 25px;
      background: steelblue;
      border-radius: 50%;
    }

    .shifted {
      right: 0;
      background-color: tomato;
    }
  `;

  render() {
    return html`
      <button @click=${this._toggle}>Move</button>
      <div
        class="box ${this.shifted ? 'shifted' : ''}"
        ${animate(this.options)}
      ></div>
    `;
  }

  _toggle() {
    this.shifted = !this.shifted;
  }
}
