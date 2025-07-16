import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPictureInPicture_Sharp = class IconPictureInPicture_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 7h-8v6h8V7zm4-4H1v17.98h22V3zm-2 16.01H3V4.98h18v14.03z"/>');
    }
};
IconPictureInPicture_Sharp.styles = style;
IconPictureInPicture_Sharp = __decorate([
    customElement('mdui-icon-picture-in-picture--sharp')
], IconPictureInPicture_Sharp);
export { IconPictureInPicture_Sharp };
