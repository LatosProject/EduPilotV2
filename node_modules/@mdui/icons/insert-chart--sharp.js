import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertChart_Sharp = class IconInsertChart_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>');
    }
};
IconInsertChart_Sharp.styles = style;
IconInsertChart_Sharp = __decorate([
    customElement('mdui-icon-insert-chart--sharp')
], IconInsertChart_Sharp);
export { IconInsertChart_Sharp };
