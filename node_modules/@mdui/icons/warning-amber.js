import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWarningAmber = class IconWarningAmber extends LitElement {
    render() {
        return svgTag('<path d="M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"/><path d="M13 16h-2v2h2zm0-6h-2v5h2z"/>');
    }
};
IconWarningAmber.styles = style;
IconWarningAmber = __decorate([
    customElement('mdui-icon-warning-amber')
], IconWarningAmber);
export { IconWarningAmber };
