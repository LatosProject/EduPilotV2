import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNightlightRound_Outlined = class IconNightlightRound_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15.5 22c1.05 0 2.05-.16 3-.46-4.06-1.27-7-5.06-7-9.54s2.94-8.27 7-9.54c-.95-.3-1.95-.46-3-.46-5.52 0-10 4.48-10 10s4.48 10 10 10z"/>');
    }
};
IconNightlightRound_Outlined.styles = style;
IconNightlightRound_Outlined = __decorate([
    customElement('mdui-icon-nightlight-round--outlined')
], IconNightlightRound_Outlined);
export { IconNightlightRound_Outlined };
