import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRollerShades_TwoTone = class IconRollerShades_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 5h12v6H6z" opacity=".3"/><path d="M20 19V3H4v16H2v2h20v-2h-2zm-2 0H6v-6h5v1.82A1.746 1.746 0 0 0 12 18a1.746 1.746 0 0 0 1-3.18V13h5v6zm0-8H6V5h12v6z"/>');
    }
};
IconRollerShades_TwoTone.styles = style;
IconRollerShades_TwoTone = __decorate([
    customElement('mdui-icon-roller-shades--two-tone')
], IconRollerShades_TwoTone);
export { IconRollerShades_TwoTone };
