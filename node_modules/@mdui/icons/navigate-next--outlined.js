import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNavigateNext_Outlined = class IconNavigateNext_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/>');
    }
};
IconNavigateNext_Outlined.styles = style;
IconNavigateNext_Outlined = __decorate([
    customElement('mdui-icon-navigate-next--outlined')
], IconNavigateNext_Outlined);
export { IconNavigateNext_Outlined };
