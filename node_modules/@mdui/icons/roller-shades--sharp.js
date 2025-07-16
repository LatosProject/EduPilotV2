import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRollerShades_Sharp = class IconRollerShades_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3H4v16H2v2h20v-2h-2zM6 19v-6h5v1.8c-.4.3-.8.8-.8 1.4 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.6-.3-1.1-.8-1.4V13h5v6H6z"/>');
    }
};
IconRollerShades_Sharp.styles = style;
IconRollerShades_Sharp = __decorate([
    customElement('mdui-icon-roller-shades--sharp')
], IconRollerShades_Sharp);
export { IconRollerShades_Sharp };
