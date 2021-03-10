import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { WysiwygComponent } from './wysiwyg.component';
describe('WysiwygComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [WysiwygComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(WysiwygComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=wysiwyg.component.spec.js.map