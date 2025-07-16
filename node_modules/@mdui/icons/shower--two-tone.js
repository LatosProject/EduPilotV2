import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShower_TwoTone = class IconShower_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" opacity=".3"/><circle cx="8" cy="20" r="1"/><circle cx="16" cy="17" r="1"/><path d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92zM7 12c0-2.76 2.24-5 5-5s5 2.24 5 5H7z"/><circle cx="16" cy="20" r="1"/><circle cx="12" cy="17" r="1"/><circle cx="8" cy="17" r="1"/><circle cx="12" cy="20" r="1"/>');
    }
};
IconShower_TwoTone.styles = style;
IconShower_TwoTone = __decorate([
    customElement('mdui-icon-shower--two-tone')
], IconShower_TwoTone);
export { IconShower_TwoTone };
