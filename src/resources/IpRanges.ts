import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const IpRanges = TelnyxResource.extend({
  path: 'ip_ranges',
  includeBasic: ['list', 'retrieve', 'delete'],

  ListAccessIpRanges: telnyxMethod({
    method: 'GET',
    path: '/access_ip_ranges',
  }),
  undefined: telnyxMethod({
    method: 'DELETE',
    path: '/access_ip_ranges/{access_ip_range_id}',
    urlParams: ['access_ip_range_id'],
  }),
});
