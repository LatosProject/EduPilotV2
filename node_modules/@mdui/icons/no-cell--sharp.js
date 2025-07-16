import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoCell_Sharp = class IconNoCell_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21.19 21.19 2.81 2.81 1.39 4.22 5 7.83V23h14v-1.17l.78.78 1.41-1.42zM7 18V9.83L15.17 18H7zM8.83 6 5 2.17V1h14v15.17l-2-2V6H8.83z"/>');
    }
};
IconNoCell_Sharp.styles = style;
IconNoCell_Sharp = __decorate([
    customElement('mdui-icon-no-cell--sharp')
], IconNoCell_Sharp);
export { IconNoCell_Sharp };
