
$.runScript = {


	formatTiktok: function() {
		app.enableQE();

		var project = app.project; // project variable
		var sequence = project.activeSequence; // active sequence variable
		var tracks = sequence.videoTracks; // video tracks within sequence

		// create a variable for the first clip in each track
		var v6 = qe.project.getActiveSequence().getVideoTrackAt(5).getItemAt(0); // Video track 6, clip 1
		var v5 = qe.project.getActiveSequence().getVideoTrackAt(4).getItemAt(0); // Video track 5, clip 1
		var v4 = qe.project.getActiveSequence().getVideoTrackAt(3).getItemAt(0); // Video track 4, clip 1
		var v3 = qe.project.getActiveSequence().getVideoTrackAt(2).getItemAt(0); // Video track 3, clip 1
		var v2 = qe.project.getActiveSequence().getVideoTrackAt(1).getItemAt(0); // Video track 2, clip 1
		var v1 = qe.project.getActiveSequence().getVideoTrackAt(0).getItemAt(0); // Video track 1, clip 1

		// variables for tracks
		var v6Track = tracks[5];
		var v5Track = tracks[4];
		var v4Track = tracks[3];
		var v3Track = tracks[2];
		var v2Track = tracks[1];
		var v1Track = tracks[0];

		// variables for clips
		var v6Clips = v6Track.clips;
		var v5Clips = v5Track.clips;
		var v4Clips = v4Track.clips;
		var v3Clips = v3Track.clips;
		var v2Clips = v2Track.clips;
		var v1Clips = v1Track.clips;

		var v6Clip = v6Clips[0];
		var v5Clip = v5Clips[0];
		var v4Clip = v4Clips[0];
		var v3Clip = v3Clips[0];
		var v2Clip = v2Clips[0];
		var v1Clip = v1Clips[0];

		// variables for storing a list of each clips effects (called components)
		var v6Components = v6Clip.components;
		var v5Components = v5Clip.components;
		var v4Components = v4Clip.components;
		var v3Components = v3Clip.components;
		var v2Components = v2Clip.components;
		var v1Components = v1Clip.components;

		// Add effects
		v1.addVideoEffect(qe.project.getVideoEffectByName("Gaussian Blur")); // Apply gaussian blur to V1


		// Create variables for each effect that needs to be changed on each clip
		// V6
		var v6Position;
		var v6Scale;

		// V5
		// Change nothing

		// V4
		var v4Scale;
		var V4Position;
		var V4EllipseMask; // TODO
		var V4Feather; // TODO


		// V3
		var v3Position;
		var v3EllipseMask; // TODO

		// V2
		var v2Scale;
		var v2Position;

		// V1
		var v1Scale;
		var v1Gaussian;

		// Loop through components of each clip and assign effects to corresponding variables

		// V6
		for(var i = 0; i< v6Components.numItems; i++){
		if(v6Components[i].displayName == "Motion"){
			v6Motion = v6Components[i];
		}
		}

		// V5


		// V4
		for(var i = 0; i< v4Components.numItems; i++){
		if(v4Components[i].displayName == "Motion"){
			v4Motion = v4Components[i];
		}
		}

		// V3
		for(var i = 0; i< v3Components.numItems; i++){
		if(v3Components[i].displayName == "Motion"){
			v3Motion = v3Components[i];
		}
		}

		// V2
		for(var i = 0; i< v2Components.numItems; i++){
		if(v2Components[i].displayName == "Motion"){
			v2Motion = v2Components[i];
		}
		}

		// V1
		for(var i = 0; i< v1Components.numItems; i++){
		if(v1Components[i].displayName == "Motion"){
			v1Motion = v1Components[i];
		}
		if(v1Components[i].displayName == "Gaussian Blur"){
				v1Gaussian = v1Components[i];
			}
		}

		// set the effect properties

		// V6
		v6Motion.properties[0].setValue([-0.82311,0.8156], true); // Set Position
		v6Motion.properties[1].setValue(200, true); // Set scale

		// V5
		// do nothing

		// V4
		v4Motion.properties[0].setValue([0.5, 0.28123], true); // Set Position
		v4Motion.properties[1].setValue(84, true); // Set scale


		// V3
		v3Motion.properties[0].setValue([2.1639, 0.62133], true); // Set Position
		v3Motion.properties[1].setValue(260, true); // Set scale


		// V2
		v2Motion.properties[0].setValue([0.5, 0.63123], true); // Set Position
		v2Motion.properties[1].setValue(128, true); // Set scale


		// V1
		v1Gaussian.properties[0].setValue(40, true); // Set Gaussian
		v1Motion.properties[1].setValue(179, true); // Set scale
	}	
    
}