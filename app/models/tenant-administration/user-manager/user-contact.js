import BaseModel from '../../../framework/base-model';
import DS from 'ember-data';

export default BaseModel.extend({
	'user': DS.belongsTo('tenant-administration/user-manager/user', {
		'async': true,
		'inverse': 'contacts'
	}),

	'type': DS.attr('string', { 'defaultValue': 'mobile' }),
	'contact': DS.attr('string'),
	'verified': DS.attr('boolean', { 'defaultValue': false })
});
