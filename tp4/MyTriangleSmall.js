import { CGFobject } from '../lib/CGF.js';

/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall extends CGFobject {
    constructor(scene, textureCoords) {
        super(scene);
        this.texCoords = textureCoords;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            -1, 0, 0,	//0
            1, 0, 0,	//1
            0, 1, 0,    //2
        ];

        
        this.indices = [
            0, 1, 2,
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

