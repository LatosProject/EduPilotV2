import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMusicNote = class IconMusicNote extends LitElement {
    render() {
        return svgTag('<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>');
    }
};
IconMusicNote.styles = style;
IconMusicNote = __decorate([
    customElement('mdui-icon-music-note')
], IconMusicNote);
export { IconMusicNote };
