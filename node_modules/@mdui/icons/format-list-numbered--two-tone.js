import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatListNumbered_TwoTone = class IconFormatListNumbered_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 13H3.2L5 10.9V10H2v1h1.8L2 13.1v.9h3zm2-8h14v2H7zM5 16H2v1h2v.5H3v1h1v.5H2v1h3zm2 1h14v2H7zM3 8h1V4H2v1h1zm4 3h14v2H7z"/>');
    }
};
IconFormatListNumbered_TwoTone.styles = style;
IconFormatListNumbered_TwoTone = __decorate([
    customElement('mdui-icon-format-list-numbered--two-tone')
], IconFormatListNumbered_TwoTone);
export { IconFormatListNumbered_TwoTone };
