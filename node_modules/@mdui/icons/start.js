import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStart = class IconStart extends LitElement {
    render() {
        return svgTag('<path d="M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6-1.41 1.41zM2 6v12h2V6H2z"/>');
    }
};
IconStart.styles = style;
IconStart = __decorate([
    customElement('mdui-icon-start')
], IconStart);
export { IconStart };
