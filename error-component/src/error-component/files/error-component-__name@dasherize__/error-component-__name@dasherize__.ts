import { Component, OnInit } from '@angular/core';

  
  @Component({
      selector: '<%=dasherize(name)%>-error-component',
      template: `<%= classify(errorMessage) %>`
  })
  export class <%= classify(name) %>Component {}
