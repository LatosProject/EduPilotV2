import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextRotationNone_Outlined = class IconTextRotationNone_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m21 18-3-3v2H5v2h13v2l3-3zM9.5 11.8h5l.9 2.2h2.1L12.75 3h-1.5L6.5 14h2.1l.9-2.2zM12 4.98 13.87 10h-3.74L12 4.98z"/>');
    }
};
IconTextRotationNone_Outlined.styles = style;
IconTextRotationNone_Outlined = __decorate([
    customElement('mdui-icon-text-rotation-none--outlined')
], IconTextRotationNone_Outlined);
export { IconTextRotationNone_Outlined };
