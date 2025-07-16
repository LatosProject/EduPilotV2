import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeedback_Sharp = class IconFeedback_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2.01L2 22l4-4h16V2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>');
    }
};
IconFeedback_Sharp.styles = style;
IconFeedback_Sharp = __decorate([
    customElement('mdui-icon-feedback--sharp')
], IconFeedback_Sharp);
export { IconFeedback_Sharp };
