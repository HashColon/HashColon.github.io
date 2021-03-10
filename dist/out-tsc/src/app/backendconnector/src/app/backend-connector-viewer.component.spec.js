import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { BackendConnectorViewerComponent } from './backend-connector-viewer.component';
describe('BackendConnectorViewerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [BackendConnectorViewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BackendConnectorViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=backend-connector-viewer.component.spec.js.map