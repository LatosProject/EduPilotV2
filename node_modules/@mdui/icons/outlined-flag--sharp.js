import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutlinedFlag_Sharp = class IconOutlinedFlag_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m14 6-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>');
    }
};
IconOutlinedFlag_Sharp.styles = style;
IconOutlinedFlag_Sharp = __decorate([
    customElement('mdui-icon-outlined-flag--sharp')
], IconOutlinedFlag_Sharp);
export { IconOutlinedFlag_Sharp };
