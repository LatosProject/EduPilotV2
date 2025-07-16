import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLooksOne_Sharp = class IconLooksOne_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-7 14h-2V9h-2V7h4v10z"/>');
    }
};
IconLooksOne_Sharp.styles = style;
IconLooksOne_Sharp = __decorate([
    customElement('mdui-icon-looks-one--sharp')
], IconLooksOne_Sharp);
export { IconLooksOne_Sharp };
