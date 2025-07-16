import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutlinedFlag_TwoTone = class IconOutlinedFlag_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m14 6-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>');
    }
};
IconOutlinedFlag_TwoTone.styles = style;
IconOutlinedFlag_TwoTone = __decorate([
    customElement('mdui-icon-outlined-flag--two-tone')
], IconOutlinedFlag_TwoTone);
export { IconOutlinedFlag_TwoTone };
