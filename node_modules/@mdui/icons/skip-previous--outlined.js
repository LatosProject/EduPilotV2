import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSkipPrevious_Outlined = class IconSkipPrevious_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 6h2v12H6zm3.5 6 8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z"/>');
    }
};
IconSkipPrevious_Outlined.styles = style;
IconSkipPrevious_Outlined = __decorate([
    customElement('mdui-icon-skip-previous--outlined')
], IconSkipPrevious_Outlined);
export { IconSkipPrevious_Outlined };
