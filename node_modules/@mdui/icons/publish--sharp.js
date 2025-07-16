import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPublish_Sharp = class IconPublish_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/>');
    }
};
IconPublish_Sharp.styles = style;
IconPublish_Sharp = __decorate([
    customElement('mdui-icon-publish--sharp')
], IconPublish_Sharp);
export { IconPublish_Sharp };
