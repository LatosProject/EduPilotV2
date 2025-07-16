import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlashAuto_TwoTone = class IconFlashAuto_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 2v12h3v9l7-12H9l4-9zm14 0-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2h-2zm-.15 5.65L18 4l1.15 3.65h-2.3z"/>');
    }
};
IconFlashAuto_TwoTone.styles = style;
IconFlashAuto_TwoTone = __decorate([
    customElement('mdui-icon-flash-auto--two-tone')
], IconFlashAuto_TwoTone);
export { IconFlashAuto_TwoTone };
