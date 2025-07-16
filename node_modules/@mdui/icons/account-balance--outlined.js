import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccountBalance_Outlined = class IconAccountBalance_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z"/>');
    }
};
IconAccountBalance_Outlined.styles = style;
IconAccountBalance_Outlined = __decorate([
    customElement('mdui-icon-account-balance--outlined')
], IconAccountBalance_Outlined);
export { IconAccountBalance_Outlined };
