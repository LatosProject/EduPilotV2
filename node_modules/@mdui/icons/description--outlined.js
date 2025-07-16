import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDescription_Outlined = class IconDescription_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>');
    }
};
IconDescription_Outlined.styles = style;
IconDescription_Outlined = __decorate([
    customElement('mdui-icon-description--outlined')
], IconDescription_Outlined);
export { IconDescription_Outlined };
