import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { LayerEditorMarkerComponent } from './layer-editor-marker.component';
describe('LayerEditorMarkerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [LayerEditorMarkerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LayerEditorMarkerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=layer-editor-marker.component.spec.js.map