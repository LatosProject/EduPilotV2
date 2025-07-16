import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExposure_Sharp = class IconExposure_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM6 7h5v1.5H6V7zm13 12H5L19 5v14zm-4.5-3v2H16v-2h2v-1.5h-2v-2h-1.5v2h-2V16h2z"/>');
    }
};
IconExposure_Sharp.styles = style;
IconExposure_Sharp = __decorate([
    customElement('mdui-icon-exposure--sharp')
], IconExposure_Sharp);
export { IconExposure_Sharp };
