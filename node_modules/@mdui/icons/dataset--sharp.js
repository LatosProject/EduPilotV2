import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDataset_Sharp = class IconDataset_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM11 17H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"/>');
    }
};
IconDataset_Sharp.styles = style;
IconDataset_Sharp = __decorate([
    customElement('mdui-icon-dataset--sharp')
], IconDataset_Sharp);
export { IconDataset_Sharp };
