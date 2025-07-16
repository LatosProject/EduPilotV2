import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalDistribute_Outlined = class IconHorizontalDistribute_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z"/>');
    }
};
IconHorizontalDistribute_Outlined.styles = style;
IconHorizontalDistribute_Outlined = __decorate([
    customElement('mdui-icon-horizontal-distribute--outlined')
], IconHorizontalDistribute_Outlined);
export { IconHorizontalDistribute_Outlined };
