import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSimCardDownload = class IconSimCardDownload extends LitElement {
    render() {
        return svgTag('<path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 15-4-4h3V9.02L13 9v4h3l-4 4z"/>');
    }
};
IconSimCardDownload.styles = style;
IconSimCardDownload = __decorate([
    customElement('mdui-icon-sim-card-download')
], IconSimCardDownload);
export { IconSimCardDownload };
