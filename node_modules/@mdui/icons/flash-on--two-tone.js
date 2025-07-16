import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlashOn_TwoTone = class IconFlashOn_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M17 10h-4l3-8H7v11h3v9z"/>');
    }
};
IconFlashOn_TwoTone.styles = style;
IconFlashOn_TwoTone = __decorate([
    customElement('mdui-icon-flash-on--two-tone')
], IconFlashOn_TwoTone);
export { IconFlashOn_TwoTone };
