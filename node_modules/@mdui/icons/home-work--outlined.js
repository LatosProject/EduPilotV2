import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHomeWork_Outlined = class IconHomeWork_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-6.97l5-3.57 5 3.57V19zm4-12h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"/><path d="M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z"/>');
    }
};
IconHomeWork_Outlined.styles = style;
IconHomeWork_Outlined = __decorate([
    customElement('mdui-icon-home-work--outlined')
], IconHomeWork_Outlined);
export { IconHomeWork_Outlined };
