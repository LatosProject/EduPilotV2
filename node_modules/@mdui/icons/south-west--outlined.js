import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSouthWest_Outlined = class IconSouthWest_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/>');
    }
};
IconSouthWest_Outlined.styles = style;
IconSouthWest_Outlined = __decorate([
    customElement('mdui-icon-south-west--outlined')
], IconSouthWest_Outlined);
export { IconSouthWest_Outlined };
