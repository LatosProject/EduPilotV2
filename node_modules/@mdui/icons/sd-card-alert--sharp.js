import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSdCardAlert_Sharp = class IconSdCardAlert_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 2H10L4 8v14h16V2zm-7 15h-2v-2h2v2zm0-4h-2V8h2v5z"/>');
    }
};
IconSdCardAlert_Sharp.styles = style;
IconSdCardAlert_Sharp = __decorate([
    customElement('mdui-icon-sd-card-alert--sharp')
], IconSdCardAlert_Sharp);
export { IconSdCardAlert_Sharp };
