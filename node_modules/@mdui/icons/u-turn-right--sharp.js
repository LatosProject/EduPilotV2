import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUTurnRight_Sharp = class IconUTurnRight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 9v12h2V9c0-2.21 1.79-4 4-4s4 1.79 4 4v4.17l-1.59-1.59L13 13l4 4 4-4-1.41-1.41L18 13.17V9c0-3.31-2.69-6-6-6S6 5.69 6 9z"/>');
    }
};
IconUTurnRight_Sharp.styles = style;
IconUTurnRight_Sharp = __decorate([
    customElement('mdui-icon-u-turn-right--sharp')
], IconUTurnRight_Sharp);
export { IconUTurnRight_Sharp };
