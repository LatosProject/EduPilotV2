import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeedback_Rounded = class IconFeedback_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4.01c-1.1 0-2 .9-2 2v18L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v2z"/>');
    }
};
IconFeedback_Rounded.styles = style;
IconFeedback_Rounded = __decorate([
    customElement('mdui-icon-feedback--rounded')
], IconFeedback_Rounded);
export { IconFeedback_Rounded };
