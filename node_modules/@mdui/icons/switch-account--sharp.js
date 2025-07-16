import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwitchAccount_Sharp = class IconSwitchAccount_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 6H2v16h16v-2H4V6zm2-4v16h16V2H6zm8 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zM7.76 16c1.47-1.83 3.71-3 6.24-3s4.77 1.17 6.24 3H7.76z"/>');
    }
};
IconSwitchAccount_Sharp.styles = style;
IconSwitchAccount_Sharp = __decorate([
    customElement('mdui-icon-switch-account--sharp')
], IconSwitchAccount_Sharp);
export { IconSwitchAccount_Sharp };
