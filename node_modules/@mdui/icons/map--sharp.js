import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMap_Sharp = class IconMap_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15 5.1 9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77L15 5.1zm0 13.79-6-2.11V5.11l6 2.11v11.67z"/>');
    }
};
IconMap_Sharp.styles = style;
IconMap_Sharp = __decorate([
    customElement('mdui-icon-map--sharp')
], IconMap_Sharp);
export { IconMap_Sharp };
