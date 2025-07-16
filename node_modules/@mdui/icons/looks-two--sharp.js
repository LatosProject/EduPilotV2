import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLooksTwo_Sharp = class IconLooksTwo_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6v6z"/>');
    }
};
IconLooksTwo_Sharp.styles = style;
IconLooksTwo_Sharp = __decorate([
    customElement('mdui-icon-looks-two--sharp')
], IconLooksTwo_Sharp);
export { IconLooksTwo_Sharp };
