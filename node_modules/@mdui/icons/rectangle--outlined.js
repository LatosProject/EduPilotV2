import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRectangle_Outlined = class IconRectangle_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M2 4v16h20V4H2zm18 14H4V6h16v12z"/>');
    }
};
IconRectangle_Outlined.styles = style;
IconRectangle_Outlined = __decorate([
    customElement('mdui-icon-rectangle--outlined')
], IconRectangle_Outlined);
export { IconRectangle_Outlined };
