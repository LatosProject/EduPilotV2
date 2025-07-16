import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatListBulleted_TwoTone = class IconFormatListBulleted_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 5h14v2H7z"/><circle cx="4" cy="6" r="1.5"/><path d="M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z"/><circle cx="4" cy="12" r="1.5"/>');
    }
};
IconFormatListBulleted_TwoTone.styles = style;
IconFormatListBulleted_TwoTone = __decorate([
    customElement('mdui-icon-format-list-bulleted--two-tone')
], IconFormatListBulleted_TwoTone);
export { IconFormatListBulleted_TwoTone };
