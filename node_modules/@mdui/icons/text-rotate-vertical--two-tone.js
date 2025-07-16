import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextRotateVertical_TwoTone = class IconTextRotateVertical_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15.75 5h-1.5L9.5 16h2.1l.9-2.2h5l.9 2.2h2.1L15.75 5zm-2.62 7L15 6.98 16.87 12h-3.74zM6 20l3-3H7V4H5v13H3l3 3z"/>');
    }
};
IconTextRotateVertical_TwoTone.styles = style;
IconTextRotateVertical_TwoTone = __decorate([
    customElement('mdui-icon-text-rotate-vertical--two-tone')
], IconTextRotateVertical_TwoTone);
export { IconTextRotateVertical_TwoTone };
