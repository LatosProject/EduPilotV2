import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTune_TwoTone = class IconTune_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 5h10v2H3zm4 6H3v2h4v2h2V9H7zm6 4h-2v6h2v-2h8v-2h-8zM3 17h6v2H3zm8-6h10v2H11zm6-8h-2v6h2V7h4V5h-4z"/>');
    }
};
IconTune_TwoTone.styles = style;
IconTune_TwoTone = __decorate([
    customElement('mdui-icon-tune--two-tone')
], IconTune_TwoTone);
export { IconTune_TwoTone };
