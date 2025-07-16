import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNewLabel_Rounded = class IconNewLabel_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m20.18 13.16-3.55 5c-.38.53-.98.84-1.63.84h-3v-3c0-1.66-1.34-3-3-3 0-1.66-1.34-3-3-3H3V7c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84l3.55 5c.49.7.49 1.62 0 2.32zM10 16c0-.55-.45-1-1-1H7v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1z"/>');
    }
};
IconNewLabel_Rounded.styles = style;
IconNewLabel_Rounded = __decorate([
    customElement('mdui-icon-new-label--rounded')
], IconNewLabel_Rounded);
export { IconNewLabel_Rounded };
