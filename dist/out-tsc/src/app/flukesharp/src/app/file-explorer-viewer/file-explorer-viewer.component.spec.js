import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { FileExplorerViewerComponent } from './file-explorer-viewer.component';
describe('FileExplorerViewerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [FileExplorerViewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FileExplorerViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=file-explorer-viewer.component.spec.js.map