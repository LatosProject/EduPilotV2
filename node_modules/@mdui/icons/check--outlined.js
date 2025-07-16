import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCheck_Outlined = class IconCheck_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>');
    }
};
IconCheck_Outlined.styles = style;
IconCheck_Outlined = __decorate([
    customElement('mdui-icon-check--outlined')
], IconCheck_Outlined);
export { IconCheck_Outlined };
