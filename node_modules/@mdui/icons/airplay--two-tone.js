import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAirplay_TwoTone = class IconAirplay_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 22h12l-6-6z"/><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
    }
};
IconAirplay_TwoTone.styles = style;
IconAirplay_TwoTone = __decorate([
    customElement('mdui-icon-airplay--two-tone')
], IconAirplay_TwoTone);
export { IconAirplay_TwoTone };
