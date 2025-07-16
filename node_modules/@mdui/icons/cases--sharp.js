import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCases_Sharp = class IconCases_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 5V1h-8v4H5v13h18V5h-5zm-2 0h-4V3h4v2zM3 9H1v13h18v-2H3V9z"/>');
    }
};
IconCases_Sharp.styles = style;
IconCases_Sharp = __decorate([
    customElement('mdui-icon-cases--sharp')
], IconCases_Sharp);
export { IconCases_Sharp };
