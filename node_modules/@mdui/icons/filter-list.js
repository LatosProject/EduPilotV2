import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterList = class IconFilterList extends LitElement {
    render() {
        return svgTag('<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>');
    }
};
IconFilterList.styles = style;
IconFilterList = __decorate([
    customElement('mdui-icon-filter-list')
], IconFilterList);
export { IconFilterList };
