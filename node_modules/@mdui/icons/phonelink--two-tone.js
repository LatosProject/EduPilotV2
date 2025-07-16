import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhonelink_TwoTone = class IconPhonelink_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 10h4v7h-4z" opacity=".3"/><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>');
    }
};
IconPhonelink_TwoTone.styles = style;
IconPhonelink_TwoTone = __decorate([
    customElement('mdui-icon-phonelink--two-tone')
], IconPhonelink_TwoTone);
export { IconPhonelink_TwoTone };
