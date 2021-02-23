import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { HashcolonBlogPageviewerComponent } from './hashcolon-blog-pageviewer.component';
describe('HashcolonBlogPageviewerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [HashcolonBlogPageviewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HashcolonBlogPageviewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hashcolon-blog-pageviewer.component.spec.js.map