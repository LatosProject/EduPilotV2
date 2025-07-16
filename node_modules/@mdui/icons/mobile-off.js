import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMobileOff = class IconMobileOff extends LitElement {
    render() {
        return svgTag('<path d="M2.76 2.49 1.49 3.76 5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75l1.72 1.72 1.27-1.27L2.76 2.49zM7 19V9.27L16.73 19H7zM17 5v9.17l2 2V3c0-1.1-.9-2-2-2H7c-.85 0-1.58.54-1.87 1.3L7.83 5H17z"/>');
    }
};
IconMobileOff.styles = style;
IconMobileOff = __decorate([
    customElement('mdui-icon-mobile-off')
], IconMobileOff);
export { IconMobileOff };
