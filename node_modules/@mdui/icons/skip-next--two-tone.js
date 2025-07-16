import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSkipNext_TwoTone = class IconSkipNext_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8 9.86v4.28L11.03 12z" opacity=".3"/><path d="M14.5 12 6 6v12l8.5-6zM8 9.86 11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/>');
    }
};
IconSkipNext_TwoTone.styles = style;
IconSkipNext_TwoTone = __decorate([
    customElement('mdui-icon-skip-next--two-tone')
], IconSkipNext_TwoTone);
export { IconSkipNext_TwoTone };
