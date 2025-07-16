import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDownloadForOffline_Sharp = class IconDownloadForOffline_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"/>');
    }
};
IconDownloadForOffline_Sharp.styles = style;
IconDownloadForOffline_Sharp = __decorate([
    customElement('mdui-icon-download-for-offline--sharp')
], IconDownloadForOffline_Sharp);
export { IconDownloadForOffline_Sharp };
