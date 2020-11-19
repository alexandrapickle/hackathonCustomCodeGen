import { CommonModule } from '@angular/common';
import { SuiEmptyStateModule } from '@sui/components';
import { createComponentFixture } from '@sui/testing';
import { <%= classify(name) %>ErrorComponent } from './error-<%= dasherize(name) %>.component';

describe('<%= classify(name) %>ErrorComponent', () => {
  const fixture = createComponentFixture({
    component: <%= classify(name) %>ErrorComponent,
    imports: [CommonModule, SuiEmptyStateModule],
    providers: [],
  });

  beforeEach(async () => {
    await fixture.compile({});
  });

  it('should compile successfully', () => {
    expect(fixture).toMatchInlineSnapshot(`
      <spog-<%=dasherize(name)%>-error>
        
        <sui-empty-state color="warn"
                         class="suiEmptyStateWarn"
        >
          <sui-card>
            <h3>
              Loading Error
            </h3>
            <p>
              A error has occured loading your <%= featureName %>. Please call Synapse at:
              <span>
                (877) 982-7888.
              </span>
            </p>
            <div class="suiEmptyStateActions">
            </div>
          </sui-card>
        </sui-empty-state>
        
      </spog-<%=dasherize(name)%>-error>
    `);
  });
});
