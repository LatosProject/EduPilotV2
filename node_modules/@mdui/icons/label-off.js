import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLabelOff = class IconLabelOff extends LitElement {
    render() {
        return svgTag('<path d="m3.25 2.75 17 17L19 21l-2-2H5c-1.1 0-2-.9-2-2V7c0-.55.23-1.05.59-1.41L2 4l1.25-1.25zM22 12l-4.37-6.16C17.27 5.33 16.67 5 16 5H8l11 11 3-4z"/>');
    }
};
IconLabelOff.styles = style;
IconLabelOff = __decorate([
    customElement('mdui-icon-label-off')
], IconLabelOff);
export { IconLabelOff };
