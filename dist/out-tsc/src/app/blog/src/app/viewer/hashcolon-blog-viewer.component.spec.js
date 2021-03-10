import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { HashcolonBlogViewerComponent } from './hashcolon-blog-viewer.component';
describe('HashcolonBlogViewerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [HashcolonBlogViewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HashcolonBlogViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hashcolon-blog-viewer.component.spec.js.map