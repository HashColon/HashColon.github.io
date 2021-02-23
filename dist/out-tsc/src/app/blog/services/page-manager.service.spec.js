import { TestBed } from '@angular/core/testing';
import { PageManagerService } from './page-manager.service';
describe('PageManagerService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PageManagerService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=page-manager.service.spec.js.map