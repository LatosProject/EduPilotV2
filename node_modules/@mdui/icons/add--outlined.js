import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAdd_Outlined = class IconAdd_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>');
    }
};
IconAdd_Outlined.styles = style;
IconAdd_Outlined = __decorate([
    customElement('mdui-icon-add--outlined')
], IconAdd_Outlined);
export { IconAdd_Outlined };
