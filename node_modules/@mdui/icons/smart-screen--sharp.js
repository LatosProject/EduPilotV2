import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmartScreen_Sharp = class IconSmartScreen_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M1 5v14h22V5H1zm17 12H6V7h12v10z"/><path d="M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z"/>');
    }
};
IconSmartScreen_Sharp.styles = style;
IconSmartScreen_Sharp = __decorate([
    customElement('mdui-icon-smart-screen--sharp')
], IconSmartScreen_Sharp);
export { IconSmartScreen_Sharp };
