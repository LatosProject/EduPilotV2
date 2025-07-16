import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAppRegistration_Rounded = class IconAppRegistration_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><path d="M11 18.07v1.43c0 .28.22.5.5.5h1.4c.13 0 .26-.05.35-.15l5.83-5.83-2.12-2.12-5.81 5.81c-.1.1-.15.23-.15.36zM12.03 14 14 12.03V12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2h.03zm8.82-2.44-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c.2-.2.2-.51 0-.71z"/>');
    }
};
IconAppRegistration_Rounded.styles = style;
IconAppRegistration_Rounded = __decorate([
    customElement('mdui-icon-app-registration--rounded')
], IconAppRegistration_Rounded);
export { IconAppRegistration_Rounded };
