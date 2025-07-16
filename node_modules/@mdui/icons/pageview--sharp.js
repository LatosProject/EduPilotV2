import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPageview_Sharp = class IconPageview_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11.5 9a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM22 4H2v16h20V4zm-5.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"/>');
    }
};
IconPageview_Sharp.styles = style;
IconPageview_Sharp = __decorate([
    customElement('mdui-icon-pageview--sharp')
], IconPageview_Sharp);
export { IconPageview_Sharp };
