/**
 * Plugin: "restore_on_backspace" (selectize.js)
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

Selectize.define('infinite_scroll', function(options) {
	var self = this;

	self.setup = (function() {
		var original = self.setup;
		return function() {
			original.apply(self, arguments);

			self.$dropdown_content.on('scroll', function() {
				console.log('scrollTop', self.$dropdown_content.scrollTop())
				console.log('height', self.$dropdown_content.height())
				console.log('scrollHeight', self.$dropdown_content[0].scrollHeight)
				console.log('scrollBottom', self.$dropdown_content[0].scrollHeight - (self.$dropdown_content.scrollTop() + self.$dropdown_content.height()))
				console.log('---')
			});
		};
	})();
});
