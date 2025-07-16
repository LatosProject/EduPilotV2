import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconModeNight_Sharp = class IconModeNight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2z"/>');
    }
};
IconModeNight_Sharp.styles = style;
IconModeNight_Sharp = __decorate([
    customElement('mdui-icon-mode-night--sharp')
], IconModeNight_Sharp);
export { IconModeNight_Sharp };
