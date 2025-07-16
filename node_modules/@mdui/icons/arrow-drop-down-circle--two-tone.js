import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropDownCircle_TwoTone = class IconArrowDropDownCircle_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 11-4-4h8l-4 4z" opacity=".3"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-5 4-4H8z"/>');
    }
};
IconArrowDropDownCircle_TwoTone.styles = style;
IconArrowDropDownCircle_TwoTone = __decorate([
    customElement('mdui-icon-arrow-drop-down-circle--two-tone')
], IconArrowDropDownCircle_TwoTone);
export { IconArrowDropDownCircle_TwoTone };
