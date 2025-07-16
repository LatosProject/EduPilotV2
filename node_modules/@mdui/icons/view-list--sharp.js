import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewList_Sharp = class IconViewList_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h13v-4H8v4zm0 5h13v-4H8v4zM8 5v4h13V5H8z"/>');
    }
};
IconViewList_Sharp.styles = style;
IconViewList_Sharp = __decorate([
    customElement('mdui-icon-view-list--sharp')
], IconViewList_Sharp);
export { IconViewList_Sharp };
