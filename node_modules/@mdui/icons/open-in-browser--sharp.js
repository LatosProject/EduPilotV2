import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOpenInBrowser_Sharp = class IconOpenInBrowser_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 4v16h6v-2H5V8h14v10h-4v2h6V4H3zm9 6-4 4h3v6h2v-6h3l-4-4z"/>');
    }
};
IconOpenInBrowser_Sharp.styles = style;
IconOpenInBrowser_Sharp = __decorate([
    customElement('mdui-icon-open-in-browser--sharp')
], IconOpenInBrowser_Sharp);
export { IconOpenInBrowser_Sharp };
