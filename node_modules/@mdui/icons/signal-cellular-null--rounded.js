import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalCellularNull_Rounded = class IconSignalCellularNull_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 6.83V19c0 .55-.45 1-1 1H6.83L20 6.83m.29-3.12L3.71 20.29c-.63.63-.19 1.71.7 1.71H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.33-1.71-.7z"/>');
    }
};
IconSignalCellularNull_Rounded.styles = style;
IconSignalCellularNull_Rounded = __decorate([
    customElement('mdui-icon-signal-cellular-null--rounded')
], IconSignalCellularNull_Rounded);
export { IconSignalCellularNull_Rounded };
