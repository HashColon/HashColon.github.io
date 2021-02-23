import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { HashcolonBlogHomeComponent } from './hashcolon-blog-home.component';
describe('HashcolonBlogHomeComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [HashcolonBlogHomeComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HashcolonBlogHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hashcolon-blog-home.component.spec.js.map