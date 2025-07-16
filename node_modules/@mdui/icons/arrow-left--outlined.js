import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowLeft_Outlined = class IconArrowLeft_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m14 7-5 5 5 5V7z"/>');
    }
};
IconArrowLeft_Outlined.styles = style;
IconArrowLeft_Outlined = __decorate([
    customElement('mdui-icon-arrow-left--outlined')
], IconArrowLeft_Outlined);
export { IconArrowLeft_Outlined };
