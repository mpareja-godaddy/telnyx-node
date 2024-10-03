import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'callControlApplications',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{callControlId}',
        urlParams: ['callControlId'],
        paramsValues: [response.data.id as string],
        paramsNames: ['id'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: '/{callControlId}',
        urlParams: ['callControlId'],
        paramsValues: [response.data.id as string],
        paramsNames: ['id'],
      }),
    },
  );
}

export const CallControlApplications = TelnyxResource.extend({
  path: 'call_control_applications',
  includeBasic: ['list', 'update'],

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
