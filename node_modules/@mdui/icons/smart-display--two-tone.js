import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmartDisplay_TwoTone = class IconSmartDisplay_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 18.01h16V5.99H4v12.02zM9.5 7.5l7 4.5-7 4.5v-9z" opacity=".3"/><path d="M9.5 7.5v9l7-4.5z"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14.01H4V5.99h16v12.02z"/>');
    }
};
IconSmartDisplay_TwoTone.styles = style;
IconSmartDisplay_TwoTone = __decorate([
    customElement('mdui-icon-smart-display--two-tone')
], IconSmartDisplay_TwoTone);
export { IconSmartDisplay_TwoTone };
