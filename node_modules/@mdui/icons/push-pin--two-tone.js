import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPushPin_TwoTone = class IconPushPin_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M14 4h-4v5c0 1.1-.35 2.14-1 3h6c-.63-.84-1-1.88-1-3V4z" opacity=".3"/><path d="M19 12c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2zM9 12c.65-.86 1-1.9 1-3V4h4v5c0 1.12.37 2.16 1 3H9z"/>');
    }
};
IconPushPin_TwoTone.styles = style;
IconPushPin_TwoTone = __decorate([
    customElement('mdui-icon-push-pin--two-tone')
], IconPushPin_TwoTone);
export { IconPushPin_TwoTone };
