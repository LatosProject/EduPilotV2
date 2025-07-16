import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddChart_Sharp = class IconAddChart_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 19H5V5h9V3H3v18h18V10h-2z"/><path d="M11 7h2v10h-2zm4 6h2v4h-2zm-8-3h2v7H7zm12-5V3h-2v2h-2v2h2v2h2V7h2V5z"/>');
    }
};
IconAddChart_Sharp.styles = style;
IconAddChart_Sharp = __decorate([
    customElement('mdui-icon-add-chart--sharp')
], IconAddChart_Sharp);
export { IconAddChart_Sharp };
