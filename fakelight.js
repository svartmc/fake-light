function fakeLight( mesh ) {

	var geometry = mesh.geometry;

	var count = geometry.attributes.position.count;

	var positions = geometry.attributes.position;

	geometry.setAttribute( 'color', new THREE.BufferAttribute( new Float32Array( count * 3 ), 3 ) );

	var color = new THREE.Color();

	var colors = geometry.attributes.color;

	var normals = geometry.attributes.normal;

	var greyValue = new THREE.Color( 0xe9e9e9 );

	// vertex colors

	for ( var i = 0; i < count; i ++ ) {

		var greyFactor = normals.getX( i ) + normals.getZ( i ) / 4 + normals.getY( i ) * 1.2;

		var posX = positions.getX( i );
		var posY = positions.getY( i );
		var posZ = positions.getZ( i );

		colors.setXYZ( i, greyValue.r + greyFactor / 20, greyValue.g + greyFactor / 20, greyValue.b + greyFactor / 20 );

	}

	mesh.material.vertexColors = THREE.VertexColors;

}
