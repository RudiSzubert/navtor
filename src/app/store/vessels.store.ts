import { ResolveFn } from '@angular/router';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

export const vesselsValues = {
  vessels: 'vessels'
}

export const registerAgGrid: ResolveFn<void> = (): void => {
  ModuleRegistry.registerModules([ AllCommunityModule ]);
}


