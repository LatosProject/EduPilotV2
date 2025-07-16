import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon60fps_Sharp = class Icon60fps_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 8v8h-4V8h4m3-3H12v14h10V5zM10 8V5H2v14h9v-9H5V8h5zm-2 5v3H5v-3h3z"/>');
    }
};
Icon60fps_Sharp.styles = style;
Icon60fps_Sharp = __decorate([
    customElement('mdui-icon-60fps--sharp')
], Icon60fps_Sharp);
export { Icon60fps_Sharp };
