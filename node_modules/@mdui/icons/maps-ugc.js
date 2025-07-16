import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMapsUgc = class IconMapsUgc extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97c1.31.61 2.75.97 4.29.97 5.52 0 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3h-2v-3H8v-2h3V8h2v3h3v2z"/>');
    }
};
IconMapsUgc.styles = style;
IconMapsUgc = __decorate([
    customElement('mdui-icon-maps-ugc')
], IconMapsUgc);
export { IconMapsUgc };
