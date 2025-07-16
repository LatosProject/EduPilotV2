import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddBox_Sharp = class IconAddBox_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>');
    }
};
IconAddBox_Sharp.styles = style;
IconAddBox_Sharp = __decorate([
    customElement('mdui-icon-add-box--sharp')
], IconAddBox_Sharp);
export { IconAddBox_Sharp };
