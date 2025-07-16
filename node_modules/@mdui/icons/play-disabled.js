import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayDisabled = class IconPlayDisabled extends LitElement {
    render() {
        return svgTag('<path d="M8 5.19V5l11 7-2.55 1.63L8 5.19zm12 14.54-5.11-5.11L8 7.73 4.27 4 3 5.27l5 5V19l5.33-3.4 5.4 5.4L20 19.73z"/>');
    }
};
IconPlayDisabled.styles = style;
IconPlayDisabled = __decorate([
    customElement('mdui-icon-play-disabled')
], IconPlayDisabled);
export { IconPlayDisabled };
