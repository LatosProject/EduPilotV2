import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallMade = class IconCallMade extends LitElement {
    render() {
        return svgTag('<path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>');
    }
};
IconCallMade.styles = style;
IconCallMade = __decorate([
    customElement('mdui-icon-call-made')
], IconCallMade);
export { IconCallMade };
