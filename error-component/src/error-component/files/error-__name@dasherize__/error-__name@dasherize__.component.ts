import { Component } from '@angular/core';

@Component({
    selector: 'spog-<%=dasherize(name)%>-error',
    template: `
      <sui-empty-state color="warn">
        <ng-template suiEmptyStateTitle>
          Loading Error
        </ng-template>
        <ng-template suiEmptyStateMessage>
          A error has occured loading your <%= featureName %>. Please call Synapse at:
          <span>(877) 982-7888.</span>
        </ng-template>
        <ng-template suiEmptyStateActions> </ng-template>
      </sui-empty-state>
    `,
    styles: [
      `
        :host {
          display: block;
          width: calc(100% - 40px);
          max-width: 560px;
          margin: 0 auto;
        }
  
        span {
          white-space: nowrap;
        }
      `,
    ],
})
export class <%= classify(name) %>ErrorComponent {}