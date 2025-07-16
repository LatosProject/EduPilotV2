import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTitle_Outlined = class IconTitle_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M5 4v3h5.5v12h3V7H19V4H5z"/>');
    }
};
IconTitle_Outlined.styles = style;
IconTitle_Outlined = __decorate([
    customElement('mdui-icon-title--outlined')
], IconTitle_Outlined);
export { IconTitle_Outlined };
