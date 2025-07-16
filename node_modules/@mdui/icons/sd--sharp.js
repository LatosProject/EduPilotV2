import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSd_Sharp = class IconSd_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 4v16h20V4H2zm11 5h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm-3.5 4.5v-1H6V9h5v2H9.5v-.5h-2v1H11V15H6v-2h1.5v.5h2zm5 0h2v-3h-2v3z"/>');
    }
};
IconSd_Sharp.styles = style;
IconSd_Sharp = __decorate([
    customElement('mdui-icon-sd--sharp')
], IconSd_Sharp);
export { IconSd_Sharp };
