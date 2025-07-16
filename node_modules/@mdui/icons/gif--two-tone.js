import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGif_TwoTone = class IconGif_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11.5 9H13v6h-1.5V9zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1h3z" opacity=".87"/>');
    }
};
IconGif_TwoTone.styles = style;
IconGif_TwoTone = __decorate([
    customElement('mdui-icon-gif--two-tone')
], IconGif_TwoTone);
export { IconGif_TwoTone };
