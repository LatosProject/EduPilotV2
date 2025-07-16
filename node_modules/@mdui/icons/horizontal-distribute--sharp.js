import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalDistribute_Sharp = class IconHorizontalDistribute_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z"/>');
    }
};
IconHorizontalDistribute_Sharp.styles = style;
IconHorizontalDistribute_Sharp = __decorate([
    customElement('mdui-icon-horizontal-distribute--sharp')
], IconHorizontalDistribute_Sharp);
export { IconHorizontalDistribute_Sharp };
