import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrokenImage_Sharp = class IconBrokenImage_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3v8.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V3h18zm-3 8.42 3 3.01V21H3v-8.58l3 2.99 4-4 4 4 4-3.99z"/>');
    }
};
IconBrokenImage_Sharp.styles = style;
IconBrokenImage_Sharp = __decorate([
    customElement('mdui-icon-broken-image--sharp')
], IconBrokenImage_Sharp);
export { IconBrokenImage_Sharp };
