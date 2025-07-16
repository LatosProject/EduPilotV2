import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPrivacyTip_Outlined = class IconPrivacyTip_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m12 3.19 7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/>');
    }
};
IconPrivacyTip_Outlined.styles = style;
IconPrivacyTip_Outlined = __decorate([
    customElement('mdui-icon-privacy-tip--outlined')
], IconPrivacyTip_Outlined);
export { IconPrivacyTip_Outlined };
