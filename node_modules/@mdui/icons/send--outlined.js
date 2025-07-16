import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSend_Outlined = class IconSend_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m4.01 6.03 7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3z"/>');
    }
};
IconSend_Outlined.styles = style;
IconSend_Outlined = __decorate([
    customElement('mdui-icon-send--outlined')
], IconSend_Outlined);
export { IconSend_Outlined };
