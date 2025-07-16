import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconIso_Sharp = class IconIso_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z"/>');
    }
};
IconIso_Sharp.styles = style;
IconIso_Sharp = __decorate([
    customElement('mdui-icon-iso--sharp')
], IconIso_Sharp);
export { IconIso_Sharp };
