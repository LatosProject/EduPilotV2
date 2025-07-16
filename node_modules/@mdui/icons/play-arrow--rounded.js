import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayArrow_Rounded = class IconPlayArrow_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"/>');
    }
};
IconPlayArrow_Rounded.styles = style;
IconPlayArrow_Rounded = __decorate([
    customElement('mdui-icon-play-arrow--rounded')
], IconPlayArrow_Rounded);
export { IconPlayArrow_Rounded };
