import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWebStories_TwoTone = class IconWebStories_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 4h9v16H4z" opacity=".3"/><path d="M17 4v16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h9v16zm8-14v12c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z"/>');
    }
};
IconWebStories_TwoTone.styles = style;
IconWebStories_TwoTone = __decorate([
    customElement('mdui-icon-web-stories--two-tone')
], IconWebStories_TwoTone);
export { IconWebStories_TwoTone };
