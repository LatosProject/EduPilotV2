import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_Sharp = class IconFilter_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m15.96 10.29-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14z"/>');
    }
};
IconFilter_Sharp.styles = style;
IconFilter_Sharp = __decorate([
    customElement('mdui-icon-filter--sharp')
], IconFilter_Sharp);
export { IconFilter_Sharp };
