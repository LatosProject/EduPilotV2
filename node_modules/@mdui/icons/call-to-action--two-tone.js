import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallToAction_TwoTone = class IconCallToAction_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 19h18V5H3v14zm2-4h14v3H5v-3z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z"/>');
    }
};
IconCallToAction_TwoTone.styles = style;
IconCallToAction_TwoTone = __decorate([
    customElement('mdui-icon-call-to-action--two-tone')
], IconCallToAction_TwoTone);
export { IconCallToAction_TwoTone };
