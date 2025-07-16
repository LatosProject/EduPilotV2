import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStraighten_Sharp = class IconStraighten_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 6H1v12h22V6zm-2 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"/>');
    }
};
IconStraighten_Sharp.styles = style;
IconStraighten_Sharp = __decorate([
    customElement('mdui-icon-straighten--sharp')
], IconStraighten_Sharp);
export { IconStraighten_Sharp };
