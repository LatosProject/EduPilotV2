import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlashAuto_Outlined = class IconFlashAuto_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z"/>');
    }
};
IconFlashAuto_Outlined.styles = style;
IconFlashAuto_Outlined = __decorate([
    customElement('mdui-icon-flash-auto--outlined')
], IconFlashAuto_Outlined);
export { IconFlashAuto_Outlined };
