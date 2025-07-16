import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRepeatOne_Sharp = class IconRepeatOne_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/>');
    }
};
IconRepeatOne_Sharp.styles = style;
IconRepeatOne_Sharp = __decorate([
    customElement('mdui-icon-repeat-one--sharp')
], IconRepeatOne_Sharp);
export { IconRepeatOne_Sharp };
