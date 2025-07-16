import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkunread_Outlined = class IconMarkunread_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>');
    }
};
IconMarkunread_Outlined.styles = style;
IconMarkunread_Outlined = __decorate([
    customElement('mdui-icon-markunread--outlined')
], IconMarkunread_Outlined);
export { IconMarkunread_Outlined };
