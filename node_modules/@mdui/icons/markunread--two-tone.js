import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkunread_TwoTone = class IconMarkunread_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 6H4l8 5zM4 8v10h16V8l-8 5z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>');
    }
};
IconMarkunread_TwoTone.styles = style;
IconMarkunread_TwoTone = __decorate([
    customElement('mdui-icon-markunread--two-tone')
], IconMarkunread_TwoTone);
export { IconMarkunread_TwoTone };
