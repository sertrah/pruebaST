import { Subject } from 'rxjs';

export function TakeUntilComponent(constructor: any) {
    let mainDestroyReference = constructor.prototype.ngOnDestroy;

    if (typeof mainDestroyReference !== 'function') {
        console.warn(`${constructor.name} Esta usando @TakeUntilComponent pero no esta implementado OnDestroy`);
    }

    constructor.prototype.spiaDestroyed = function () {
        this._takeUntilDestroy$ = this._takeUntilDestroy$ || new Subject();
        return this._takeUntilDestroy$.asObservable();
    };

    constructor.prototype.ngOnDestroy = function () {
        mainDestroyReference && typeof mainDestroyReference === 'function' && mainDestroyReference.apply(this, arguments);
        this._takeUntilDestroy$ && this._takeUntilDestroy$.next() && this._takeUntilDestroy$.complete();
    };
}
