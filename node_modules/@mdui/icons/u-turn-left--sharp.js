import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUTurnLeft_Sharp = class IconUTurnLeft_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 9v12h-2V9c0-2.21-1.79-4-4-4S8 6.79 8 9v4.17l1.59-1.59L11 13l-4 4-4-4 1.41-1.41L6 13.17V9c0-3.31 2.69-6 6-6s6 2.69 6 6z"/>');
    }
};
IconUTurnLeft_Sharp.styles = style;
IconUTurnLeft_Sharp = __decorate([
    customElement('mdui-icon-u-turn-left--sharp')
], IconUTurnLeft_Sharp);
export { IconUTurnLeft_Sharp };
