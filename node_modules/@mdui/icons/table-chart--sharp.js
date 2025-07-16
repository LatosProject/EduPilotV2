import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTableChart_Sharp = class IconTableChart_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 10.02h5V21h-5V10.02zM17 21h5V10h-5v11zm5-18H3v5h19V3zM3 21h5V10H3v11z"/>');
    }
};
IconTableChart_Sharp.styles = style;
IconTableChart_Sharp = __decorate([
    customElement('mdui-icon-table-chart--sharp')
], IconTableChart_Sharp);
export { IconTableChart_Sharp };
