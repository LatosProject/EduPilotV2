import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderVertical_TwoTone = class IconBorderVertical_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 3h2v2H7zm0 8h2v2H7zm0 8h2v2H7zm-4 0h2v2H3zM3 3h2v2H3zm0 8h2v2H3zm16-8h2v2h-2zM3 7h2v2H3zm8-4h2v18h-2zM3 15h2v2H3zm12-4h2v2h-2zm4 4h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm0 12h2v2h-2zm-4 0h2v2h-2zm0-16h2v2h-2z"/>');
    }
};
IconBorderVertical_TwoTone.styles = style;
IconBorderVertical_TwoTone = __decorate([
    customElement('mdui-icon-border-vertical--two-tone')
], IconBorderVertical_TwoTone);
export { IconBorderVertical_TwoTone };
