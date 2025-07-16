import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBedroomChild = class IconBedroomChild extends LitElement {
    render() {
        return svgTag('<path d="M9 8.5h6v2H9zm6.64 3.5H8.37a.87.87 0 0 0-.87.87h.01V14h9v-1.13a.87.87 0 0 0-.87-.87z"/><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 15h-1.5v-1.5h-9V17H6v-4.13c0-1 .62-1.85 1.5-2.2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v1.67c.88.35 1.5 1.2 1.5 2.2V17z"/>');
    }
};
IconBedroomChild.styles = style;
IconBedroomChild = __decorate([
    customElement('mdui-icon-bedroom-child')
], IconBedroomChild);
export { IconBedroomChild };
