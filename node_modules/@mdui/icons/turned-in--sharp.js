import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnedIn_Sharp = class IconTurnedIn_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5v18l7-3 7 3V3z"/>');
    }
};
IconTurnedIn_Sharp.styles = style;
IconTurnedIn_Sharp = __decorate([
    customElement('mdui-icon-turned-in--sharp')
], IconTurnedIn_Sharp);
export { IconTurnedIn_Sharp };
