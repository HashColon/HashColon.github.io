import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CodemirrorEditorComponent } from './codemirror-editor.component';
describe('CodemirrorEditorComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CodemirrorEditorComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CodemirrorEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=codemirror-editor.component.spec.js.map