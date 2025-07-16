import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlashOn_Rounded = class IconFlashOn_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1z"/>');
    }
};
IconFlashOn_Rounded.styles = style;
IconFlashOn_Rounded = __decorate([
    customElement('mdui-icon-flash-on--rounded')
], IconFlashOn_Rounded);
export { IconFlashOn_Rounded };
