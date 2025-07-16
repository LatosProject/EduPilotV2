import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhotoCameraBack = class IconPhotoCameraBack extends LitElement {
    render() {
        return svgTag('<path d="M20 5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3.17L9 3h6l1.83 2H20zm0 14V7H4v12h16zm-6-7-3 3.72L9 13l-3 4h12l-4-5z"/>');
    }
};
IconPhotoCameraBack.styles = style;
IconPhotoCameraBack = __decorate([
    customElement('mdui-icon-photo-camera-back')
], IconPhotoCameraBack);
export { IconPhotoCameraBack };
