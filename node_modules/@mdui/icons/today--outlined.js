import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconToday_Outlined = class IconToday_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z"/>');
    }
};
IconToday_Outlined.styles = style;
IconToday_Outlined = __decorate([
    customElement('mdui-icon-today--outlined')
], IconToday_Outlined);
export { IconToday_Outlined };
