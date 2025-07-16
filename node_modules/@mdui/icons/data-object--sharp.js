import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDataObject_Sharp = class IconDataObject_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 10H2v4h2v6h6v-2H6v-5.5H4v-1h2V6h4V4H4zm16 0V4h-6v2h4v5.5h2v1h-2V18h-4v2h6v-6h2v-4z"/>');
    }
};
IconDataObject_Sharp.styles = style;
IconDataObject_Sharp = __decorate([
    customElement('mdui-icon-data-object--sharp')
], IconDataObject_Sharp);
export { IconDataObject_Sharp };
