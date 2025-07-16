import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGppMaybe = class IconGppMaybe extends LitElement {
    render() {
        return svgTag('<path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>');
    }
};
IconGppMaybe.styles = style;
IconGppMaybe = __decorate([
    customElement('mdui-icon-gpp-maybe')
], IconGppMaybe);
export { IconGppMaybe };
