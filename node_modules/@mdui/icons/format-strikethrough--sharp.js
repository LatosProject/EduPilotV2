import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatStrikethrough_Sharp = class IconFormatStrikethrough_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"/>');
    }
};
IconFormatStrikethrough_Sharp.styles = style;
IconFormatStrikethrough_Sharp = __decorate([
    customElement('mdui-icon-format-strikethrough--sharp')
], IconFormatStrikethrough_Sharp);
export { IconFormatStrikethrough_Sharp };
