import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalCellularNull = class IconSignalCellularNull extends LitElement {
    render() {
        return svgTag('<path d="M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z"/>');
    }
};
IconSignalCellularNull.styles = style;
IconSignalCellularNull = __decorate([
    customElement('mdui-icon-signal-cellular-null')
], IconSignalCellularNull);
export { IconSignalCellularNull };
