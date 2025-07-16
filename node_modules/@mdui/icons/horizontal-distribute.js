import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalDistribute = class IconHorizontalDistribute extends LitElement {
    render() {
        return svgTag('<path d="M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z"/>');
    }
};
IconHorizontalDistribute.styles = style;
IconHorizontalDistribute = __decorate([
    customElement('mdui-icon-horizontal-distribute')
], IconHorizontalDistribute);
export { IconHorizontalDistribute };
