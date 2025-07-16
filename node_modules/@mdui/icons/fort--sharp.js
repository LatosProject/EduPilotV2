import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFort_Sharp = class IconFort_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3v2h-2V3h-2v2h-2V3h-2v4l2 2v1H9V9l2-2V3H9v2H7V3H5v2H3V3H1v4l2 2v6l-2 2v4h9v-5h4v5h9v-4l-2-2V9l2-2V3z"/>');
    }
};
IconFort_Sharp.styles = style;
IconFort_Sharp = __decorate([
    customElement('mdui-icon-fort--sharp')
], IconFort_Sharp);
export { IconFort_Sharp };
