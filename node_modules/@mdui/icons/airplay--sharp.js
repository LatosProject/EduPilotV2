import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAirplay_Sharp = class IconAirplay_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 22h12l-6-6-6 6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6V3z"/>');
    }
};
IconAirplay_Sharp.styles = style;
IconAirplay_Sharp = __decorate([
    customElement('mdui-icon-airplay--sharp')
], IconAirplay_Sharp);
export { IconAirplay_Sharp };
