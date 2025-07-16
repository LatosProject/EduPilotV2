import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGite_Sharp = class IconGite_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z"/>');
    }
};
IconGite_Sharp.styles = style;
IconGite_Sharp = __decorate([
    customElement('mdui-icon-gite--sharp')
], IconGite_Sharp);
export { IconGite_Sharp };
