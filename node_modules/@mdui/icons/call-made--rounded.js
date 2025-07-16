import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallMade_Rounded = class IconCallMade_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1z"/>');
    }
};
IconCallMade_Rounded.styles = style;
IconCallMade_Rounded = __decorate([
    customElement('mdui-icon-call-made--rounded')
], IconCallMade_Rounded);
export { IconCallMade_Rounded };
