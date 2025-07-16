import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAirplay_Rounded = class IconAirplay_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M8.41 22h7.17c.89 0 1.34-1.08.71-1.71L12.7 16.7a.996.996 0 0 0-1.41 0L7.7 20.29c-.62.63-.18 1.71.71 1.71zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
    }
};
IconAirplay_Rounded.styles = style;
IconAirplay_Rounded = __decorate([
    customElement('mdui-icon-airplay--rounded')
], IconAirplay_Rounded);
export { IconAirplay_Rounded };
