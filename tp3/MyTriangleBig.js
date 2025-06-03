import { CGFobject } from '../lib/CGF.js';

/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleBig extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            -2, 0, 0,	//0
            2, 0, 0,	//1
            0, 2, 0,    //2
        ];

        this.indices = [
            0, 1, 2,
        ];

        this.normals = [
            0, 0, 1,  // Frente
            0, 0, 1,  
            0, 0, 1,
            0, 0, 1,  // Tras
            0, 0, 1,  
            0, 0, 1   
        ];
        

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}
