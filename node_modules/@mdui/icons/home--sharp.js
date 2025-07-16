import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHome_Sharp = class IconHome_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/>');
    }
};
IconHome_Sharp.styles = style;
IconHome_Sharp = __decorate([
    customElement('mdui-icon-home--sharp')
], IconHome_Sharp);
export { IconHome_Sharp };
