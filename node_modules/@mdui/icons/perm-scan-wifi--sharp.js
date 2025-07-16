import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPermScanWifi_Sharp = class IconPermScanWifi_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"/>');
    }
};
IconPermScanWifi_Sharp.styles = style;
IconPermScanWifi_Sharp = __decorate([
    customElement('mdui-icon-perm-scan-wifi--sharp')
], IconPermScanWifi_Sharp);
export { IconPermScanWifi_Sharp };
