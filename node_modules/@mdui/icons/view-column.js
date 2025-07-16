import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewColumn = class IconViewColumn extends LitElement {
    render() {
        return svgTag('<path d="M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"/>');
    }
};
IconViewColumn.styles = style;
IconViewColumn = __decorate([
    customElement('mdui-icon-view-column')
], IconViewColumn);
export { IconViewColumn };
