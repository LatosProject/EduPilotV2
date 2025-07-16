import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDelete_Sharp = class IconDelete_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>');
    }
};
IconDelete_Sharp.styles = style;
IconDelete_Sharp = __decorate([
    customElement('mdui-icon-delete--sharp')
], IconDelete_Sharp);
export { IconDelete_Sharp };
