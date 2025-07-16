import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallToAction_Sharp = class IconCallToAction_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v18h22V3zm-2 16H3v-3h18v3z"/>');
    }
};
IconCallToAction_Sharp.styles = style;
IconCallToAction_Sharp = __decorate([
    customElement('mdui-icon-call-to-action--sharp')
], IconCallToAction_Sharp);
export { IconCallToAction_Sharp };
