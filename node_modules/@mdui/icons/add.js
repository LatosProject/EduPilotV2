import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAdd = class IconAdd extends LitElement {
    render() {
        return svgTag('<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>');
    }
};
IconAdd.styles = style;
IconAdd = __decorate([
    customElement('mdui-icon-add')
], IconAdd);
export { IconAdd };
