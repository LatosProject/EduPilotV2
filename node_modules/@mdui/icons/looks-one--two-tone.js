import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLooksOne_TwoTone = class IconLooksOne_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 5H5v14h14V5zm-5 12h-2V9h-2V7h4v10z" opacity=".3"/><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm5 4h2v8h2V7h-4z"/>');
    }
};
IconLooksOne_TwoTone.styles = style;
IconLooksOne_TwoTone = __decorate([
    customElement('mdui-icon-looks-one--two-tone')
], IconLooksOne_TwoTone);
export { IconLooksOne_TwoTone };
