import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewComfy_Sharp = class IconViewComfy_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 4v7h20V4H2zm8 16h12v-7H10v7zm-8 0h6v-7H2v7z"/>');
    }
};
IconViewComfy_Sharp.styles = style;
IconViewComfy_Sharp = __decorate([
    customElement('mdui-icon-view-comfy--sharp')
], IconViewComfy_Sharp);
export { IconViewComfy_Sharp };
