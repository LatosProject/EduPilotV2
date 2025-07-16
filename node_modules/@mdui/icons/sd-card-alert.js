import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSdCardAlert = class IconSdCardAlert extends LitElement {
    render() {
        return svgTag('<path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z"/>');
    }
};
IconSdCardAlert.styles = style;
IconSdCardAlert = __decorate([
    customElement('mdui-icon-sd-card-alert')
], IconSdCardAlert);
export { IconSdCardAlert };
