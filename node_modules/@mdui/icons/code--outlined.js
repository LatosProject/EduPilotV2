import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCode_Outlined = class IconCode_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>');
    }
};
IconCode_Outlined.styles = style;
IconCode_Outlined = __decorate([
    customElement('mdui-icon-code--outlined')
], IconCode_Outlined);
export { IconCode_Outlined };
