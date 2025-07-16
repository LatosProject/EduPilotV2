import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLogin_Outlined = class IconLogin_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/>');
    }
};
IconLogin_Outlined.styles = style;
IconLogin_Outlined = __decorate([
    customElement('mdui-icon-login--outlined')
], IconLogin_Outlined);
export { IconLogin_Outlined };
