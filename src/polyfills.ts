import 'core-js/client/shim';
import 'reflect-metadata';
import 'ts-helpers';

require('zone.js/dist/zone');

if (process.env.ENV === 'build') {
  // Production

} else {
  // Development

  Error['stackTraceLimit'] = Infinity;

  require('zone.js/dist/long-stack-trace-zone');
}
