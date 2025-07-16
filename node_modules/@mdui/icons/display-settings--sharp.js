import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDisplaySettings_Sharp = class IconDisplaySettings_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 3H2v16h6v2h8v-2h6V3zm-2 14H4V5h16v12z"/><path d="M6 8.25h8v1.5H6zm10.5 1.5H18v-1.5h-1.5V7H15v4h1.5zm-6.5 2.5h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z"/>');
    }
};
IconDisplaySettings_Sharp.styles = style;
IconDisplaySettings_Sharp = __decorate([
    customElement('mdui-icon-display-settings--sharp')
], IconDisplaySettings_Sharp);
export { IconDisplaySettings_Sharp };
