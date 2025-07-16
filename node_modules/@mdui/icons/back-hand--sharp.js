import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBackHand_Sharp = class IconBackHand_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2.21 10.47 5 9.36 7.25 15H8V2h2.5v10h1V0H14v12h1V1.5h2.5V12h1V4.5H21V16c0 4.42-3.58 8-8 8-3.26 0-6.19-1.99-7.4-5.02l-3.39-8.51z"/>');
    }
};
IconBackHand_Sharp.styles = style;
IconBackHand_Sharp = __decorate([
    customElement('mdui-icon-back-hand--sharp')
], IconBackHand_Sharp);
export { IconBackHand_Sharp };
