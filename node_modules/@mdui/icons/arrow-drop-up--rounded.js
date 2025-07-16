import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropUp_Rounded = class IconArrowDropUp_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M8.71 12.29 11.3 9.7a.996.996 0 0 1 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"/>');
    }
};
IconArrowDropUp_Rounded.styles = style;
IconArrowDropUp_Rounded = __decorate([
    customElement('mdui-icon-arrow-drop-up--rounded')
], IconArrowDropUp_Rounded);
export { IconArrowDropUp_Rounded };
