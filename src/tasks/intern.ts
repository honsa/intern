import { global } from '../common';
import Node from '../core/lib/executors/Node';
import { Config } from '../core/lib/config';
import { createConfigurator } from '../core/lib/node';

export = function(grunt: IGrunt) {
  grunt.registerMultiTask('intern', function() {
    const done = this.async();
    const options = this.options<TaskOptions>({});

    // Force colored output for istanbul report
    process.env.FORCE_COLOR = 'true';

    getConfigAndOptions(options)
      .then(({ config, options }) => {
        const intern = (global.intern = new Node());
        intern.configure(config);
        intern.configure(options);

        return intern.run();
      })
      .then(finish, finish);

    function finish(error?: any) {
      global.intern = null;
      done(error);
    }
  });
};

interface TaskOptions extends grunt.task.ITaskOptions, Partial<Config> {
  [key: string]: any;
}

async function getConfigAndOptions(
  options: TaskOptions
): Promise<{
  config: Partial<Config>;
  options: TaskOptions;
}> {
  if (options.config) {
    const configurator = createConfigurator();
    const config = await configurator.loadConfig(options.config);
    const opts = { ...options };
    delete opts.config;
    return { config, options: opts };
  }

  return Promise.resolve({ config: {}, options });
}
