import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMilitaryTech_Sharp = class IconMilitaryTech_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 11V2H7v9l4.66 2.8-.99 2.34-3.41.29 2.59 2.24L9.07 22 12 20.23 14.93 22l-.78-3.33 2.59-2.24-3.41-.29-.99-2.34L17 11zm-4 1.23-1 .6-1-.6V3h2v9.23z"/>');
    }
};
IconMilitaryTech_Sharp.styles = style;
IconMilitaryTech_Sharp = __decorate([
    customElement('mdui-icon-military-tech--sharp')
], IconMilitaryTech_Sharp);
export { IconMilitaryTech_Sharp };
