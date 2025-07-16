import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlashOn_Outlined = class IconFlashOn_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7 2v11h3v9l7-12h-4l3-8z"/>');
    }
};
IconFlashOn_Outlined.styles = style;
IconFlashOn_Outlined = __decorate([
    customElement('mdui-icon-flash-on--outlined')
], IconFlashOn_Outlined);
export { IconFlashOn_Outlined };
