import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGifBox_Sharp = class IconGifBox_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM9.5 13v-1h1v2h-3v-4h3v1h-2v2h1zm3 1h-1v-4h1v4zm4-3h-2v.5H16v1h-1.5V14h-1v-4h3v1z"/>');
    }
};
IconGifBox_Sharp.styles = style;
IconGifBox_Sharp = __decorate([
    customElement('mdui-icon-gif-box--sharp')
], IconGifBox_Sharp);
export { IconGifBox_Sharp };
