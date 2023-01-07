import { t as register } from '../entry.mjs';
export { u as edo, v as tuning, x as xen } from '../entry.mjs';
import 'react';
import 'react-dom/server';
import 'preact';
import 'preact-render-to-string';
import 'html-escaper';
/* empty css                          *//* empty css                         */import 'fraction.js';
import 'bjork';
import 'react/jsx-runtime';
import 'canvas';
import 'escodegen';
import 'acorn';
import 'estree-walker';
import '@tonaljs/tonal';
import 'chord-voicings';

/*
tunejs.js - <short description TODO>
Copyright (C) 2022 Strudel contributors - see <https://github.com/tidalcycles/strudel/blob/main/packages/xen/tunejs.js>
This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


// See all scales at: http://abbernie.github.io/tune/scales.html
function Tune(){

	// the scale as ratios
	this.scale = [];

	// i/o modes
	this.mode = {
		output: "frequency",
		input: "step"
	};

	// ET major, for reference
	this.etmajor = [ 261.62558,
		293.664764,
		329.627563,
		349.228241,
		391.995422,
		440,
		493.883301,
		523.25116
	];

	// Root frequency.
	this.tonic = 440;     // * Math.pow(2,(60-69)/12);

	// console.log("{{{{ Tune.js v0.1 Loaded }}}}");

}

/* Set the tonic frequency */

Tune.prototype.tonicize = function(newTonic) {
	this.tonic = newTonic;
};


/* Return data in the mode you are in (freq, ratio, or midi) */

Tune.prototype.note = function(input,octave){

	var newvalue;

	if (this.mode.output == "frequency") { 
		newvalue = this.frequency(input,octave);
	} else if (this.mode.output == "ratio") { 
		newvalue = this.ratio(input,octave);
	} else if (this.mode.output == "MIDI") { 
		newvalue = this.MIDI(input,octave);
	} else {
		newvalue = this.frequency(input,octave);
	}
	
	return newvalue;

};


/* Return freq data */

Tune.prototype.frequency = function(stepIn, octaveIn) {

	if (this.mode.input == "midi" || this.mode.input == "MIDI" ) {
		this.stepIn += 60;
	}
	
	// what octave is our input
	var octave = Math.floor(stepIn/this.scale.length);

	if (octaveIn) { 
		octave += octaveIn;
	}
	
	// which scale degree (0 - scale length) is our input
	var scaleDegree = stepIn % this.scale.length;

	while (scaleDegree < 0) {
		scaleDegree += this.scale.length;
	}
	
	var freq = this.tonic*this.scale[scaleDegree];
	
	freq = freq*(Math.pow(2,octave));
	
	// truncate irrational numbers
	freq = Math.floor(freq*100000000000)/100000000000;
	
	return freq

};

/* Force return ratio data */

Tune.prototype.ratio = function(stepIn, octaveIn) {

	if (this.mode.input == "midi" || this.mode.input == "MIDI" ) {
		this.stepIn += 60;
	}
	
	// what octave is our input
	var octave = Math.floor(stepIn/this.scale.length);

	if (octaveIn) { 
		octave += octaveIn;
	}
	
	// which scale degree (0 - scale length) is our input
	var scaleDegree = stepIn % this.scale.length;

	// what ratio is our input to our key
	var ratio = Math.pow(2,octave)*this.scale[scaleDegree];

	ratio = Math.floor(ratio*100000000000)/100000000000;

	return ratio

};

/* Force return adjusted MIDI data */

Tune.prototype.MIDI = function(stepIn,octaveIn) {

	var newvalue = this.frequency(stepIn,octaveIn);

	var n = 69 + 12*Math.log(newvalue/440)/Math.log(2);

	n = Math.floor(n*1000000000)/1000000000;

	return n

};

/* Load a new scale */

Tune.prototype.loadScale = function(name){

	/* load the scale */
	var freqs = TuningList[name].frequencies;
	this.scale = [];
	for (var i=0;i<freqs.length-1;i++) {
		this.scale.push(freqs[i]/freqs[0]);
	}

	/* visualize in console */
/* 	console.log(" ");
	console.log("LOADED "+name);
	console.log(TuningList[name].description);
	console.log(this.scale); */
	var vis = [];
	for (var i=0;i<100;i++) {
		vis[i] = " ";
	}
	for (var i=0;i<this.scale.length;i++) {
		var spot = Math.round(this.scale[i] * 100 - 100);
		if (i<10) {
			vis.splice(spot,1,i+1);
		} else {
			vis.splice(spot,5,i+1);
		}
	}
	var textvis = "";
	for (var i=0;i<vis.length;i++) {
		textvis += vis[i];
	}
/* 	console.log(name)
	console.log(textvis) */
	// ET scale vis
	var vis = [];
	for (var i=0;i<100;i++) {
		vis[i] = " ";
	}
	for (var i=0;i<this.etmajor.length;i++) {
		var spot = Math.round(this.etmajor[i]/this.etmajor[0] * 100 - 100);
		if (i<10) {
			vis.splice(spot,1,i+1);
		} else {
			vis.splice(spot,5,i+1);
		}
		
	}
	var textvis = "";
	for (var i=0;i<vis.length;i++) {
		textvis += vis[i];
	}
/* 	console.log(textvis)
	console.log("equal-tempered major (reference)") */

};

/* Search the names of tunings
	 Returns an array of names of tunings */

Tune.prototype.search = function(letters) {
	var possible = [];
	for (var key in TuningList) {
		if (key.toLowerCase().indexOf(letters.toLowerCase())!=-1) {
			possible.push(key);
		}
	}
	return possible
};

Tune.prototype.isValidScale = function(name) {
  return !!TuningList[name];
};

/* Return a collection of notes as an array */

Tune.prototype.chord = function(midis) {
	var output = [];
	for (var i=0;i<midis.length;i++) {
		output.push(this.note(midis[i]));
	}
	return output;
};


/* Change the tonic frequency? */

Tune.prototype.root = function(newmidi, newfreq) {
	this.rootFreq = newfreq;
	// not working now ... needs much work.
	// setKey is not transposing now, either.
};


/* The list of tunings */


/*
tune.mjs - <short description TODO>
Copyright (C) 2022 Strudel contributors - see <https://github.com/tidalcycles/strudel/blob/main/packages/xen/tune.mjs>
This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

register('tune', (scale, pat) => {
  const tune = new Tune();
  if (!tune.isValidScale(scale)) {
    throw new Error('not a valid tune.js scale name: "' + scale + '". See http://abbernie.github.io/tune/scales.html');
  }
  tune.loadScale(scale);
  tune.tonicize(1);
  return pat.withHap((hap) => {
    return hap.withValue(() => tune.note(hap.value));
  });
});