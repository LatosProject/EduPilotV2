import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHeadphones_Sharp = class IconHeadphones_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 3a9 9 0 0 0-9 9v9h6v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h6v-9a9 9 0 0 0-9-9z"/>');
    }
};
IconHeadphones_Sharp.styles = style;
IconHeadphones_Sharp = __decorate([
    customElement('mdui-icon-headphones--sharp')
], IconHeadphones_Sharp);
export { IconHeadphones_Sharp };
