import { Component, OnInit } from '@angular/core';

  
  @Component({
      selector: '<%=dasherize(name)%>-error-component',
      template: `<%= classify(errorMessage) %>`
  })
  export class <%= classify(name) %>Component {}


import { Component } from '@angular/core';

/*@Component({
  selector: 'spog-resource-groups-loading-error',
  template: `
    <sui-empty-state color="warn">
      <ng-template suiEmptyStateTitle>
        Loading Error
      </ng-template>
      <ng-template suiEmptyStateMessage>
        A error has occured loading your Resource Groups. Please call Synapse at:
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
export class ResourceGroupsLoadingErrorComponent {}*/