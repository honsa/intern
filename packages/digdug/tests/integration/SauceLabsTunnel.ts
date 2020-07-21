import { addEnvironmentTest, addStartStopTest } from '../support/integration';
import SauceLabsTunnel from '../../src/SauceLabsTunnel';

function checkEnvironment(environment: any) {
  assert.property(environment, 'short_version');
  assert.property(environment, 'api_name');
  assert.property(environment, 'os');
}

let suite = {};
suite = addEnvironmentTest(suite, SauceLabsTunnel, checkEnvironment);
suite = addStartStopTest(suite, SauceLabsTunnel, {
  timeout: 120000,
  // Use a non-standard port to not conflict with a running tunnel in the
  // host Intern
  port: 39823
});

registerSuite('integration/SauceLabsTunnel', suite);
