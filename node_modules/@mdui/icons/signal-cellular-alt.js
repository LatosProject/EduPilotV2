import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalCellularAlt = class IconSignalCellularAlt extends LitElement {
    render() {
        return svgTag('<path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z"/>');
    }
};
IconSignalCellularAlt.styles = style;
IconSignalCellularAlt = __decorate([
    customElement('mdui-icon-signal-cellular-alt')
], IconSignalCellularAlt);
export { IconSignalCellularAlt };
