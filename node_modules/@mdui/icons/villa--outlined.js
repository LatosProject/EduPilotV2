import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVilla_Outlined = class IconVilla_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2zM5 9.37l9-3.46V12H9v7H5V9.37zM19 19h-3v-3h-2v3h-3v-5h8v5z"/>');
    }
};
IconVilla_Outlined.styles = style;
IconVilla_Outlined = __decorate([
    customElement('mdui-icon-villa--outlined')
], IconVilla_Outlined);
export { IconVilla_Outlined };
