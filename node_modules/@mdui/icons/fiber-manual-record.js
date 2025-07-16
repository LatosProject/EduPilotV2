import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFiberManualRecord = class IconFiberManualRecord extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="12" r="8"/>');
    }
};
IconFiberManualRecord.styles = style;
IconFiberManualRecord = __decorate([
    customElement('mdui-icon-fiber-manual-record')
], IconFiberManualRecord);
export { IconFiberManualRecord };
