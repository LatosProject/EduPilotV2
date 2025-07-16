import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmartDisplay_Outlined = class IconSmartDisplay_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9.5 7.5v9l7-4.5z"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14.01H4V5.99h16v12.02z"/>');
    }
};
IconSmartDisplay_Outlined.styles = style;
IconSmartDisplay_Outlined = __decorate([
    customElement('mdui-icon-smart-display--outlined')
], IconSmartDisplay_Outlined);
export { IconSmartDisplay_Outlined };
