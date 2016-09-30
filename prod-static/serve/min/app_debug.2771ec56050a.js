/*

  The software provided in this file is offered under a variety of free and open
  source licenses. Unless otherwise specified, software is provided under the
  Apache License, Version 2.0, for which the following text applies:

    Copyright 2011-2016 Dropbox Inc. and contributors.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

  If some of the software in this file is offered under a different license,
  information about that license will appear in this file.
*/
function print_elapsed_time(a,b){var c=(new Date).getTime(),d=b(),e=(new Date).getTime();console.log(a+": "+(e-c)+" ms");return d}function IterationProfiler(){this.sections={};this.last_time=window.performance.now()}
IterationProfiler.prototype={iteration_start:function(){this.section("_iteration_overhead")},iteration_stop:function(){var a=window.performance.now(),b=a-this.last_time;1<b&&(void 0===this.sections._rest_of_iteration&&(this.sections._rest_of_iteration=0),this.sections._rest_of_iteration+=b);this.last_time=a},section:function(a){var b=window.performance.now();void 0===this.sections[a]&&(this.sections[a]=0);this.sections[a]+=b-this.last_time;this.last_time=b},done:function(){this.section("_iteration_overhead");
for(var a in this.sections)this.sections.hasOwnProperty(a)&&console.log(a,this.sections[a])}};
