import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLogin_Sharp = class IconLogin_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h10V3H12v2h8v14z"/>');
    }
};
IconLogin_Sharp.styles = style;
IconLogin_Sharp = __decorate([
    customElement('mdui-icon-login--sharp')
], IconLogin_Sharp);
export { IconLogin_Sharp };
