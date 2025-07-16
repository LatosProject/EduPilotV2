import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWallet_Sharp = class IconWallet_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zm-6.25 10.09L4 11.22V10h16v.53l-4.25 3.56zM4 6h16v2H4V6z"/>');
    }
};
IconWallet_Sharp.styles = style;
IconWallet_Sharp = __decorate([
    customElement('mdui-icon-wallet--sharp')
], IconWallet_Sharp);
export { IconWallet_Sharp };
