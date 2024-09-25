import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'portingOrders', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{portingOrderId}',
      urlParams: ['portingOrderId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/{portingOrderId}',
      urlParams: ['portingOrderId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const PortingOrders = TelnyxResource.extend({
  path: 'porting_orders',

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',

    transformResponseData: transformResponseData,
  }),

  create: telnyxMethod({
    method: 'POST',
    methodType: 'create',

    transformResponseData: transformResponseData,
  }),

  // include_phone_numbers query param
  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),

  listExceptionTypes: telnyxMethod({
    method: 'GET',
    path: '/exception_types',
    methodType: 'list',
  }),

  listActivationJobs: telnyxMethod({
    method: 'GET',
    path: '/{id}/activation_jobs',
    methodType: 'list',
    urlParams: ['id'],
  }),

  cancelOrder: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/cancel',
    urlParams: ['id'],
  }),

  listAllowedFocWindows: telnyxMethod({
    method: 'GET',
    path: '/{id}/allowed_foc_windows',
    methodType: 'list',
    urlParams: ['id'],
  }),

  retrieveLoaTemplate: telnyxMethod({
    method: 'GET',
    path: '/{id}/loa_template',
    urlParams: ['id'],
  }),

  confirmOrder: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/confirm',
    urlParams: ['id'],
  }),
  createComment: telnyxMethod({
    method: 'POST',
    path: '/{id}/comments',
    methodType: 'create',
    urlParams: ['id'],
  }),
  listComments: telnyxMethod({
    method: 'GET',
    path: '/{id}/comments',
    methodType: 'list',
    urlParams: ['id'],
  }),
});
