import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropUp = class IconArrowDropUp extends LitElement {
    render() {
        return svgTag('<path d="m7 14 5-5 5 5z"/>');
    }
};
IconArrowDropUp.styles = style;
IconArrowDropUp = __decorate([
    customElement('mdui-icon-arrow-drop-up')
], IconArrowDropUp);
export { IconArrowDropUp };
