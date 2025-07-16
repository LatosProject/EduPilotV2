import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconToday_Sharp = class IconToday_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zM7 10h5v5H7v-5z"/>');
    }
};
IconToday_Sharp.styles = style;
IconToday_Sharp = __decorate([
    customElement('mdui-icon-today--sharp')
], IconToday_Sharp);
export { IconToday_Sharp };
