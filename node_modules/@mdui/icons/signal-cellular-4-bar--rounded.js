import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalCellular_4Bar_Rounded = class IconSignalCellular_4Bar_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71z"/>');
    }
};
IconSignalCellular_4Bar_Rounded.styles = style;
IconSignalCellular_4Bar_Rounded = __decorate([
    customElement('mdui-icon-signal-cellular-4-bar--rounded')
], IconSignalCellular_4Bar_Rounded);
export { IconSignalCellular_4Bar_Rounded };
