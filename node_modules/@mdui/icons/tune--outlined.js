import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTune_Outlined = class IconTune_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>');
    }
};
IconTune_Outlined.styles = style;
IconTune_Outlined = __decorate([
    customElement('mdui-icon-tune--outlined')
], IconTune_Outlined);
export { IconTune_Outlined };
