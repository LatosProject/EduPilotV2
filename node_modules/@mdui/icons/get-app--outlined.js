import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGetApp_Outlined = class IconGetApp_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z"/>');
    }
};
IconGetApp_Outlined.styles = style;
IconGetApp_Outlined = __decorate([
    customElement('mdui-icon-get-app--outlined')
], IconGetApp_Outlined);
export { IconGetApp_Outlined };
