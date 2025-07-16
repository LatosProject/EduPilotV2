import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallToAction_Rounded = class IconCallToAction_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1z"/>');
    }
};
IconCallToAction_Rounded.styles = style;
IconCallToAction_Rounded = __decorate([
    customElement('mdui-icon-call-to-action--rounded')
], IconCallToAction_Rounded);
export { IconCallToAction_Rounded };
