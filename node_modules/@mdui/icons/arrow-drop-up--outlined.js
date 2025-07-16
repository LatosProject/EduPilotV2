import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropUp_Outlined = class IconArrowDropUp_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m7 14 5-5 5 5H7z"/>');
    }
};
IconArrowDropUp_Outlined.styles = style;
IconArrowDropUp_Outlined = __decorate([
    customElement('mdui-icon-arrow-drop-up--outlined')
], IconArrowDropUp_Outlined);
export { IconArrowDropUp_Outlined };
