import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMusicVideo_Sharp = class IconMusicVideo_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v18h22V3zm-2 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03A3.003 3.003 0 0 1 11 18c-1.66 0-3-1.34-3-3z"/>');
    }
};
IconMusicVideo_Sharp.styles = style;
IconMusicVideo_Sharp = __decorate([
    customElement('mdui-icon-music-video--sharp')
], IconMusicVideo_Sharp);
export { IconMusicVideo_Sharp };
