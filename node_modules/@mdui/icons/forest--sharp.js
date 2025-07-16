import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconForest_Sharp = class IconForest_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 12 9 2 2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z"/><path d="M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"/>');
    }
};
IconForest_Sharp.styles = style;
IconForest_Sharp = __decorate([
    customElement('mdui-icon-forest--sharp')
], IconForest_Sharp);
export { IconForest_Sharp };
