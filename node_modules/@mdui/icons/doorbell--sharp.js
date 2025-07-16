import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorbell_Sharp = class IconDoorbell_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 3 4 9v12h16V9l-8-6zm0 14.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1zm4-1.5H8v-1h1v-2.34c0-1.54.82-2.82 2.25-3.16v-1h1.5v1c1.44.34 2.25 1.62 2.25 3.16V15h1v1z"/>');
    }
};
IconDoorbell_Sharp.styles = style;
IconDoorbell_Sharp = __decorate([
    customElement('mdui-icon-doorbell--sharp')
], IconDoorbell_Sharp);
export { IconDoorbell_Sharp };
