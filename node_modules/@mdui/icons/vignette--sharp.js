import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVignette_Sharp = class IconVignette_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v18h22V3zM12 18c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"/>');
    }
};
IconVignette_Sharp.styles = style;
IconVignette_Sharp = __decorate([
    customElement('mdui-icon-vignette--sharp')
], IconVignette_Sharp);
export { IconVignette_Sharp };
