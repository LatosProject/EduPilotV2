import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArtTrack_TwoTone = class IconArtTrack_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M14 7h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zM4 17h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2zm1.25-4.25 1.25 1.51L8.25 12l2.25 3h-7l1.75-2.25z"/>');
    }
};
IconArtTrack_TwoTone.styles = style;
IconArtTrack_TwoTone = __decorate([
    customElement('mdui-icon-art-track--two-tone')
], IconArtTrack_TwoTone);
export { IconArtTrack_TwoTone };
