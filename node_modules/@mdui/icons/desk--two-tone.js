import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesk_TwoTone = class IconDesk_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16 8h4v2h-4zm0 4h4v2h-4z" opacity=".3"/><path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 8h-4v-2h4v2zm0-4h-4V8h4v2z"/>');
    }
};
IconDesk_TwoTone.styles = style;
IconDesk_TwoTone = __decorate([
    customElement('mdui-icon-desk--two-tone')
], IconDesk_TwoTone);
export { IconDesk_TwoTone };
