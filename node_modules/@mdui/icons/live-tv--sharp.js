import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLiveTv_Sharp = class IconLiveTv_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 6h-9.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H1v16h22V6zm-2 14H3V8h18v12zM9 10v8l7-4-7-4z"/>');
    }
};
IconLiveTv_Sharp.styles = style;
IconLiveTv_Sharp = __decorate([
    customElement('mdui-icon-live-tv--sharp')
], IconLiveTv_Sharp);
export { IconLiveTv_Sharp };
