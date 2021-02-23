import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { LayerEditorGeojsonComponent } from './layer-editor-geojson.component';
describe('LayerEditorGeojsonComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [LayerEditorGeojsonComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LayerEditorGeojsonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=layer-editor-geojson.component.spec.js.map