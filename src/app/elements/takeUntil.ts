import { Subject } from 'rxjs';

export function TakeUntilComponent(constructor: any) {
    let mainDestroyReference = constructor.prototype.ngOnDestroy;

    if (typeof mainDestroyReference !== 'function') {
        console.warn(`${constructor.name} Esta usando @TakeUntilComponent pero no esta implementado OnDestroy`);
    }

    constructor.prototype.spiaDestroyed = function () {
        this.TakeUntilComponent$ = this.TakeUntilComponent$ || new Subject();
        return this.TakeUntilComponent$.asObservable();
    };

    constructor.prototype.ngOnDestroy = function () {
        mainDestroyReference && typeof mainDestroyReference === 'function' && mainDestroyReference.apply(this, arguments);
        this.TakeUntilComponent$ && this.TakeUntilComponent$.next() && this.TakeUntilComponent$.complete();
    };
}
