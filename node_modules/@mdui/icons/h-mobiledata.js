import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHMobiledata = class IconHMobiledata extends LitElement {
    render() {
        return svgTag('<path d="M15 11H9V7H7v10h2v-4h6v4h2V7h-2v4z"/>');
    }
};
IconHMobiledata.styles = style;
IconHMobiledata = __decorate([
    customElement('mdui-icon-h-mobiledata')
], IconHMobiledata);
export { IconHMobiledata };
