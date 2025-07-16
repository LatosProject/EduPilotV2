import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeaturedVideo_TwoTone = class IconFeaturedVideo_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 19h18V5H3v14zM4 6h9v7H4V6z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM4 6h9v7H4z"/>');
    }
};
IconFeaturedVideo_TwoTone.styles = style;
IconFeaturedVideo_TwoTone = __decorate([
    customElement('mdui-icon-featured-video--two-tone')
], IconFeaturedVideo_TwoTone);
export { IconFeaturedVideo_TwoTone };
