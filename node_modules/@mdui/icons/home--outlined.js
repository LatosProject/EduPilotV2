import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHome_Outlined = class IconHome_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>');
    }
};
IconHome_Outlined.styles = style;
IconHome_Outlined = __decorate([
    customElement('mdui-icon-home--outlined')
], IconHome_Outlined);
export { IconHome_Outlined };
