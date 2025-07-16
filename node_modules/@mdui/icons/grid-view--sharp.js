import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGridView_Sharp = class IconGridView_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm0 10h8v8h-8z"/>');
    }
};
IconGridView_Sharp.styles = style;
IconGridView_Sharp = __decorate([
    customElement('mdui-icon-grid-view--sharp')
], IconGridView_Sharp);
export { IconGridView_Sharp };
