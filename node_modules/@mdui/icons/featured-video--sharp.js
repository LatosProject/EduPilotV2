import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeaturedVideo_Sharp = class IconFeaturedVideo_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v18h22V3zm-11 9H3V5h9v7z"/>');
    }
};
IconFeaturedVideo_Sharp.styles = style;
IconFeaturedVideo_Sharp = __decorate([
    customElement('mdui-icon-featured-video--sharp')
], IconFeaturedVideo_Sharp);
export { IconFeaturedVideo_Sharp };
