import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPentagon_Outlined = class IconPentagon_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44l7.63 5.34zM2 9l4 12h12l4-12-10-7L2 9z"/>');
    }
};
IconPentagon_Outlined.styles = style;
IconPentagon_Outlined = __decorate([
    customElement('mdui-icon-pentagon--outlined')
], IconPentagon_Outlined);
export { IconPentagon_Outlined };
