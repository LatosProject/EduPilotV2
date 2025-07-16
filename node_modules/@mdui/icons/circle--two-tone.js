import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCircle_TwoTone = class IconCircle_TwoTone extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="12" r="8" opacity=".3"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>');
    }
};
IconCircle_TwoTone.styles = style;
IconCircle_TwoTone = __decorate([
    customElement('mdui-icon-circle--two-tone')
], IconCircle_TwoTone);
export { IconCircle_TwoTone };
