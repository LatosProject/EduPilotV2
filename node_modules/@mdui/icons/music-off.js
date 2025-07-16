import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMusicOff = class IconMusicOff extends LitElement {
    render() {
        return svgTag('<path d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"/>');
    }
};
IconMusicOff.styles = style;
IconMusicOff = __decorate([
    customElement('mdui-icon-music-off')
], IconMusicOff);
export { IconMusicOff };
