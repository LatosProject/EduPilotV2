import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon30fps_Sharp = class Icon30fps_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 5v3h6v2.5H3v3h5V16H2v3h9V5H2zm17 3v8h-4V8h4m3-3H12v14h10V5z"/>');
    }
};
Icon30fps_Sharp.styles = style;
Icon30fps_Sharp = __decorate([
    customElement('mdui-icon-30fps--sharp')
], Icon30fps_Sharp);
export { Icon30fps_Sharp };
