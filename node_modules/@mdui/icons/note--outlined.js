import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNote_Outlined = class IconNote_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 4H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zM4 18.01V6h11v5h5v7.01H4z"/>');
    }
};
IconNote_Outlined.styles = style;
IconNote_Outlined = __decorate([
    customElement('mdui-icon-note--outlined')
], IconNote_Outlined);
export { IconNote_Outlined };
